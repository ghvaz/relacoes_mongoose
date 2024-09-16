import mongoose from "mongoose";

const BD = "mongodb+srv://ghvaz:men1go23@cluster0.fshq8.mongodb.net/subdocumentos"

async function main () {
    try {
        await mongoose.connect(BD)
        console.log("Conectado ao mongoDB")
    } catch (error) {
        console.log("ERRO  \n"+error)
    }
}

main()

export default mongoose