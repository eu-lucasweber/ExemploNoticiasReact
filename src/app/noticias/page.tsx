import noticias from '@/noticias.json'
import CardNoticia from '../cardnoticia/page'

export default function Noticias(){
    return(
        <div>
            <h2>Noticias</h2>
            <div className='flex-container'>
                {
                    noticias.map(noticia => 
                        <CardNoticia key={noticia.id} noticia={noticia} />
                    )
                }
            </div>
        </div>
    );
}