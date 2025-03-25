import Noticia from "@/models/noticia"
import connectDB from "@/lib/connectDB"

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

export async function getNoticias() {
    await connDB()
    return await Noticia.find({})
}

export async function getNoticia(id: String) {
    await connDB()
    return await Noticia.findById(id)
}