'use server'
import Noticia from "@/models/noticia"
import connectDB from "@/lib/connectDB"
import { Document } from "mongoose"
import { revalidatePath } from "next/cache";
import xss from "xss";
import fs from 'fs';
import { redirect } from "next/navigation";
import { get } from "https";



export interface noticiaProps {
    titulo: string,
    descricao: string,
    imagem: string,
}

export interface noticiaComIdProps extends noticiaProps {
    id: string,
}

export interface noticiaComFileProps extends noticiaProps {
    imagemFile: File,
}

async function connDB() {
    await connectDB()
        .then(() => {
            console.log('Conexão estabelecida com o banco!')
        })
        .catch(err => {
            console.log('Erro ao conectar com o banco.')
            console.log(err)
        });
}

function geraNomeImagem(titulo: String, nomeImagem: string){
    return `${titulo.substring(0,15)}-${nomeImagem.toString().substring(nomeImagem.length - 15)}`
}

async function gravaImagem(imagem: File, nomeImagem: String){
    const stream = fs.createWriteStream(`public/${nomeImagem}`)
    const bufferedImage = await imagem.arrayBuffer()
    stream.write(Buffer.from(bufferedImage), (error) => {
        if(error){
            console.log("Erro ao salvar a imagem...")
            console.log(error)
        }
    })
}

export async function gravaNoticia({titulo, descricao, imagemFile}: noticiaComFileProps) {
    await connDB();
    const nomeImagem = geraNomeImagem(titulo, imagemFile.name);
    const novaNoticia = new Noticia({
        titulo: titulo,
        descricao: descricao,
        imagem: nomeImagem,
    });
    gravaImagem(imagemFile, nomeImagem);
    await novaNoticia.save();
    redirect(`/adm/noticias`);
}

export async function getNoticias() {
    await connDB();
    const noticias: Document[] = await Noticia.find({});

    return noticias.map((noticia) => ({
        id: String(noticia.get("id")),
        titulo: String(noticia.get("titulo")),
        descricao: String(noticia.get("descricao")),
        imagem: String(noticia.get("imagem")),
    }));
}

export async function getNoticia(id: String) {
    await connDB();
    return await Noticia.findById(id);
}

export async function apagaNotica(id: String, imagem: String) {
    await connDB();
    await Noticia.findByIdAndDelete(id);
    revalidatePath('/adm/noticias');
}