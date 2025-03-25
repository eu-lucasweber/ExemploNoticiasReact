import { SugestaoParams } from "@/lib/sugestaoDB";

export default async function CardSugestao( {nome, telefone, email, sugestao }: SugestaoParams ){
    return(
        <div>
            <p>Nome: {nome}</p>
            <p>Telefone: {telefone?telefone:"Não informado!"}</p>
            <p>Email: {email?email:"Não informado!"}</p>
            <p>Sugestão: {sugestao}</p>
        </div>
    )
}