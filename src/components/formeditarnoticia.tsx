'use client'
import { noticiaComIdProps } from "@/lib/noticiasDB";
import { InputHTMLAttributes, useState } from "react";

interface FormEditarNoticiaProps extends noticiaComIdProps {
    editar: boolean;
    operacaoNoticia: Function;
  }


export default function FormEditarNoticia({id, titulo, descricao, imagem, editar, operacaoNoticia}: FormEditarNoticiaProps){
    const [inputTitulo, setInputTitulo] = useState(titulo);
    const [inputDescricao, setInputDescricao] = useState(descricao);
    const handleInputTituloChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitulo(e.target.value);
    }
    const handleInputDescricaoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputDescricao(e.target.value);
    }
    let novaImagem = {};
    const handleInputImagemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(file)
            if(file.size > 2000000){
                alert('Excedido o tamanho máximo para o arquivo. Escolha um arquivo menor!');
                e.target.value = ''
                novaImagem = {}
            } else {
                novaImagem = file;
            }
    }
    const enviar = () => {
        if (inputTitulo){ // && ...
            let dadosNoticia = {}
            if (editar){
                dadosNoticia = {
                    id: id,
                    titulo: inputTitulo,
                    descricao: inputDescricao,
                    imagem: novaImagem,
                    imagemAntiga: imagem
                }
            } else {
                dadosNoticia = {
                    titulo: inputTitulo,
                    descricao: inputDescricao,
                    imagem: novaImagem
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
                <p>
                    Titulo: 
                    <input type="text" size={60} name='titulo' value={inputTitulo.toString()} onChange={handleInputTituloChange} required/>
                </p>
                <p>
                    Descrição: 
                    <textarea name="descricao" rows={10} cols={50} id="" value={inputDescricao.toString()} onChange={handleInputDescricaoChange}></textarea>
                </p>
            </form>
        </div>
    )
}