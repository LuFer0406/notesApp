import * as dotenv from 'dotenv'
import express from "express";
import { connectDb } from "./database.js";
import { socket } from "./socket/noteSocket.js";
const app = express();

dotenv.config();

connectDb();

app.set("Port", process.env.PORT);

const server = app.listen(app.get("Port"), () => {
  console.log("El servidor está escuchando por el puerto", app.get("Port"));
});

socket(server);
