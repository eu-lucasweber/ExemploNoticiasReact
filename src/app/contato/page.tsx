'use client'
import { useState } from "react";

export default function Contato() {
    const [enviado, setEnviado] = useState(false);
    const [inputNome, setInputNome] = useState('');
    const handleInputNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputNome(e.target.value)
    }
    const enviar = () => {
        if (inputNome) {
            setEnviado(true);
        }
    }
    const resetar = () => {
        setEnviado(false);
        setInputNome('');
    }
    return (
        <div>
            <h2>Contato</h2>
            {enviado ?
                <div>
                    <p>{inputNome}, obrigado pela sugestão!</p>
                    <button onClick={resetar}>Enviar outra sugestão</button>
                </div>
                :
                <div>
                    <p>Entre em contato para enviar sugestões, reclamações ou oferecer patrocínio.</p>
                    <form>
                        <p><label>Nome: <input type="text" size={35} value={inputNome} onChange={handleInputNomeChange} /></label></p>
                        <p><label>Telefone: <input type="text" size={33}/></label></p>
                        <p><label>E-mail: <input type="text" size={35}/></label></p>
                        <p><textarea rows={5}  cols={35} defaultValue="Abra seu coração..."></textarea></p>
                        <button onClick={enviar}>Enviar</button>
                    </form>
                </div>
            }
        </div>
    );
}