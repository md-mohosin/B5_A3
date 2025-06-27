import { Server } from "http"
import mongoose from 'mongoose';
import app from './app';
import dotenv from "dotenv"


dotenv.config()


let server:Server
const port = 5000;


async function main() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.db}:${process.env.pass}@cluster0.b7lw2.mongodb.net/Ass-3?retryWrites=true&w=majority&appName=Cluster0`)
        server=app.listen(port,()=>{
            console.log(`Listening on port ${port}`)
        })

    } catch (error) {
        console.log(error)
    }
}

main()