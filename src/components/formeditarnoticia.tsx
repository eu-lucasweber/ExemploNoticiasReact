'use client'
import { noticiaComIdProps } from "@/lib/noticiasDB";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import xss from "xss";

interface FormEditarNoticiaProps extends noticiaComIdProps {
    editar: boolean;
    operacaoNoticia: Function;
  }


export default function FormEditarNoticia({id, titulo, descricao, imagem, editar, operacaoNoticia}: FormEditarNoticiaProps){
    const [inputTitulo, setInputTitulo] = useState(titulo);
    const [inputDescricao, setInputDescricao] = useState(descricao);
    const [novaImagem, setNovaImagem] = useState<File>();
    const handleInputTituloChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitulo(e.target.value);
    }
    const handleInputDescricaoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputDescricao(e.target.value);
    }
    const handleInputImagemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if(file.size > 2000000){
                alert('Excedido o tamanho máximo para o arquivo. Escolha um arquivo menor!');
                e.target.value = ''
                setNovaImagem(undefined);
            } else {
                setNovaImagem(file);
            }
          }else
            alert("Erro")
    }
    const enviar = () => {
        if (inputTitulo){
            let dadosNoticia = {}
            if (editar){
                dadosNoticia = {
                    id: id,
                    titulo: xss(inputTitulo),
                    descricao: xss(inputDescricao),
                    imagemFile: novaImagem,
                    imagemAntiga: imagem,
                }
            } else {
                dadosNoticia = {
                    titulo: xss(inputTitulo),
                    descricao: xss(inputDescricao),
                    imagemFile: novaImagem,
                }
            }
            operacaoNoticia(dadosNoticia)
        } else {
            alert('É preciso preencher o título.')
        }
    }

    return(
        <div>
            <h2>{editar ? 'Editar' : 'Adicionar'} notícia</h2>
            <form>
                <p><input type="text" size={60} name='titulo' value={inputTitulo.toString()} onChange={handleInputTituloChange} required/></p>
                <p><textarea name="descricao" rows={10} cols={50} id="" value={inputDescricao.toString()} onChange={handleInputDescricaoChange}></textarea></p>
                {editar &&
                    <p>
                        <Image 
                            src={'/'+imagem}
                            alt="Imagem"
                            width={100}
                            height={100}
                        />
                    </p>
                }
                <p><label>Imagem (Limite 2MB): <input type='file' name='imagem' accept='image/*' onChange={handleInputImagemChange} /></label></p>
            </form>
            <button onClick={enviar}>{editar ? 'Salvar' : 'Adicionar'} notícia</button><p className='voltar'><Link href='/adm/noticias'>&#8592; Voltar</Link></p>
        </div>
    )
}