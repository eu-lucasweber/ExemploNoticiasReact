import { getSugestoes } from "@/lib/sugestaoDB"
import CardSugestao from "@/components/cardsugestao"

export default async function Sugestao() {
    const sugestoes = await getSugestoes();
    return (
        <div>
            <h2>Sugestões Recebidas</h2>
            <ul className="lista">
                {sugestoes.length > 0 ? (
                    sugestoes.map((sugestaoTemp) => (
                        <li key={sugestaoTemp.id}>
                            <CardSugestao {...sugestaoTemp} />
                        </li>
                    ))
                ) : (
                    <li>
                        <p>Nenhuma sugestão encontrada</p>
                    </li>
                )}
            </ul>
        </div>
    )
}