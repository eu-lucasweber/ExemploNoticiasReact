import { getNoticias } from "@/lib/noticiasDB";
import CardAdmNoticia from "@/components/cardadmnoticia";
import Link from "next/link";

export default async function Noticia() {
    const noticias = await getNoticias();
    return (
        <div>
            <h2>Administrar notícias</h2>
            <h3 className='buttonLink'><Link href='/adm/noticias/new'>Adicionar notícia</Link></h3>
            <ul className="lista">
                {noticias.length > 0 ? (
                    noticias.map((noticiaTemp) => (
                        <li key={noticiaTemp.id.toString()}>
                            <CardAdmNoticia {...noticiaTemp} />
                        </li>
                    ))
                ) : (
                <li>
                    <p>Nenhuma noticia encontrada</p>
                </li>
                )}
            </ul>
            <p className='voltar'><Link href='/adm'>&#8592; Voltar</Link></p>
        </div>
    )
}