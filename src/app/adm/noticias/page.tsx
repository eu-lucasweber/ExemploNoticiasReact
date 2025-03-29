import { getNoticias } from "@/lib/noticiasDB";
import CardAdmNoticia from "@/components/cardadmnoticia";

export default async function Noticia() {
    const noticias = await getNoticias();
    return(
        <div>
            <h2>Administrar notícias</h2>
            <ul className="lista">
                {noticias.map(noticia => 
                    <li key={noticia.id}>
                        <CardAdmNoticia {...noticia}/>
                    </li>
                )}
            </ul>
        </div>
    )
}