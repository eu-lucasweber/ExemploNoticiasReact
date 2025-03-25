'use server'

import { Document } from "mongoose";
import Sugestao from "@/models/sugestao"
import connectDB from "@/lib/connectDB"

export interface SugestaoParams {
    nome: String,
    telefone: String | null,
    email: String | null,
    sugestao: String
}

async function connDB() {
    await connectDB()
        .then(() => {
            console.log('Conexão estabelecida com o banco!')
        })
        .catch(err => {
            console.log('Erro ao conectar com o banco.')
            console.log(err)
        })
}

export async function gravaSugestao({nome, telefone, email, sugestao}: SugestaoParams) {
    await connDB()
    const novaSugestao = new Sugestao({
        nome: nome,
        telefone: telefone,
        email: email,
        sugestao: sugestao
      })
    await novaSugestao.save()
}

export async function getSugestoes(): Promise<SugestaoParams[]> {
    await connDB();
    const sugestoes: Document[] = await Sugestao.find({});

    return sugestoes.map((sugestao) => ({
        nome: String(sugestao.get("nome") || "Nome não informado"),
        telefone: sugestao.get("telefone") ? String(sugestao.get("telefone")) : null,
        email: sugestao.get("email") ? String(sugestao.get("email")) : null,
        sugestao: String(sugestao.get("sugestao") || "Sem sugestão"),
    }));
}

export async function getSugestao(id: String) {
    await connDB()
    return await Sugestao.findById(id)
}