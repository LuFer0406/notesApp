import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const uri = "mongodb+srv://root:1234@cluster0.iifcrfm.mongodb.net/db_notesapp";

export const connectDb = async() => {
    try {
        const db = await mongoose.connect(uri);
        console.log(`La base de datos ${db.connection.name} ha sido conectada correctamente.`)
    } catch (error) {
        console.log(`Ha sucedido un error al conectar a la base de datos ${error.message}`)
    }
}