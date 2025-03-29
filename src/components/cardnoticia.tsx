import { noticiaComIdProps } from "@/lib/noticiasDB";
import Image from "next/image";
import Link from "next/link";

export default function CardNoticia({ id,  titulo, descricao, imagem }: noticiaComIdProps){
    return(
        <Link href={`/noticias/${id}`}>
            <div className="cardNoticia">
                <Image 
                    src={"/"+imagem}
                    alt="Imagem"
                    width={100}
                    height={100}
                />
                <p className="tituloNoticia">{titulo}</p>
                <p className="textoNoticia">{descricao && descricao.substring(0,200)+" ..."}</p>
            </div>
        </Link>
    )
}