import express from "express";
import http from "http";
import morgan from "morgan";
import { Server as socket } from "socket.io";
import cors from 'cors';
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import chatsRouter from "./routes/chat.routes.js";

dotenv.config();

const PORT = 4000
const app = express()
const server = http.createServer(app);
const io = new socket(server, {
    cors: {
        origin: '*',
    }
});


app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use("/chat",chatsRouter);




server.listen(PORT)
console.log("server en puerto " + PORT);


conectarDB();

io.on('connection', (socket) => {
    
    
    console.log("alguien se conectó");
    console.log(socket.id);

    socket.on('conectado', () => {

        socket.broadcast.emit('mensajes', { mensaje: `Alguien ha entrado al chat` })
    })


    socket.on('mensaje', (nombre, mensaje) => {
       
        io.emit("mensajes", { nombre, mensaje }); 

    })

    socket.on('disconnect', () => {
        console.log("alguien se desconecto");
        io.emit("mensajes", { servidor: "servidor", mensaje: `Alguien ha abandonado la sala` })
    })
})


