import Noticia from "@/models/noticia"
import connectDB from "@/lib/connectDB"
import { Document } from "mongoose"

export interface noticiaProps {
    titulo: String,
    descricao: String,
    imagem: String
}

export interface noticiaComIdProps extends noticiaProps {
    id: String,
}

async function connDB() {
    await connectDB()
        .then(() => {
            console.log('Conexão estabelecida com o banco!')
        })
        .catch(err => {
            console.log('Erro ao conectar com o banco.')
            console.log(err)
        })
}

export async function getNoticias() {
    await connDB()
    const noticias: Document[] = await Noticia.find({});

    return noticias.map((noticia) => ({
        id: String(noticia.get("id")),
        titulo: String(noticia.get("titulo")),
        descricao: String(noticia.get("descricao")),
        imagem: String(noticia.get("imagem")),
    }));
}

export async function getNoticia(id: String) {
    await connDB()
    return await Noticia.findById(id)
}