'use client'
import { apagaSugestao, SugestaoComIdParams } from "@/lib/sugestaoDB";
import { useState } from "react";

export default function CardSugestao({ id, nome, telefone, email, sugestao }: SugestaoComIdParams) {
    const [detalhes, setDetalhes] = useState(false);
    const [apagar, setApagar] = useState(false);
    const toggleDetalhes = () => {
        setDetalhes(detalhes => !detalhes);
        setApagar(false);
    }
    const toggleApagar = () => {
        setApagar(apagar => !apagar);
    }
    let ponts = ' ...';
    let limiteSugestao = 200;
    if (sugestao.length < limiteSugestao) {
        ponts = '';
    }
    return (
        <div className='cardAdm'>
            <p className='tituloAdm'>{nome}
                <span className='verMaisAdm' onClick={toggleDetalhes}>
                    {detalhes ? 'ver menos' : 'ver mais'}
                </span>
                {detalhes &&
                    <span>
                        <span className={apagar ? 'apagarAdm cancelar' : 'apagarAdm'} onClick={toggleApagar}>
                            {apagar ? 'não apagar' : 'apagar'}
                        </span>
                        {apagar &&
                            <span className='apagarAdm' onClick={() => { apagaSugestao(id) }}>apagar</span>
                        }
                    </span>
                }
            </p>
            {detalhes &&
                <p className={apagar ? 'contatoAdm opaco' : 'contatoAdm'}>
                    {telefone ? telefone : "Não informado!"} | {email ? email : "Não informado!"}
                </p>}
            <p className={apagar ? 'descricaoAdm opaco' : 'descricaoAdm'}>
                {detalhes ? sugestao : sugestao.substring(0, limiteSugestao) + ponts}
            </p>
        </div>
    )
}