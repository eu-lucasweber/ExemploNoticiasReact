import { noticiaComIdProps } from "@/lib/noticiasDB";

export default function CardAdmNoticia({ id, titulo, descricao, imagem}: noticiaComIdProps) {
    return(
        <div>
            {titulo}
        </div>
    )
}