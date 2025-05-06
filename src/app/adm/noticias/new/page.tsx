'use client'
import FormEditarNoticia from "@/components/formeditarnoticia";
import { gravaNoticia } from "@/lib/noticiasDB";
import { ReactElement } from "react";


export default function NoticasNew() {
    const noticia = {
        id: '',
        titulo: '',
        descricao: '',
        imagem: '',
    };
    return(
        <FormEditarNoticia editar={false} operacaoNoticia={gravaNoticia} {...noticia}/>
    )
}