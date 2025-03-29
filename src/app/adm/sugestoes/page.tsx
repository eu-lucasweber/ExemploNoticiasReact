import { getSugestoes } from "@/lib/sugestaoDB"
import CardSugestao from "@/components/cardsugestao"
import Link from "next/link";

export default async function Sugestao() {
    const sugestoes = await getSugestoes();
    return (
        <div>
            <h2>Sugestões Recebidas</h2>
            <ul className="lista">
                {sugestoes.length > 0 ? (
                    sugestoes.map((sugestaoTemp) => (
                        <li key={sugestaoTemp.id.toString()}>
                            <CardSugestao {...sugestaoTemp} />
                        </li>
                    ))
                ) : (
                    <li>
                        <p>Nenhuma sugestão encontrada</p>
                    </li>
                )}
            </ul>
            <p className='voltar'><Link href='/adm'>&#8592; Voltar</Link></p>
        </div>
    )
}