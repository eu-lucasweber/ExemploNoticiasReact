import { use } from "react";
import noticias from "@/noticias.json";
import Image from "next/image";
import Link from "next/link";

export default function Noticia({ params }) {
    const { id } = use(params)
    const noticia = noticias.find(news => news.id === Number(id))

    return (
        <div>
            <h2>{noticia?.titulo}</h2>
            <Image
                src={`/${noticia?.imagem}`}
                alt="Imagem"
                width={300}
                height={300}
            />
            <p className="descricaoNoticia">{noticia?.descricao}</p>
            <p><Link href="/noticias">&#8592; Voltar</Link></p>
        </div>
    )
}