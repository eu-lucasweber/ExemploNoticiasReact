'use client'
import FormEditarNoticia from "@/components/formeditarnoticia";
import { noticiaComIdProps } from "@/lib/noticiasDB";


export default async function NoticasNew() {
    const noticia = {
        id: '',
        titulo: '',
        descricao: '',
        imagem: '',
    };
    return(
        <FormEditarNoticia editar={false} operacaoNoticia={() => {return 0;}} {...noticia}/>
    )
}