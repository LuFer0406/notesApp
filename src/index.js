import express from "express";
import { connectDb } from "./database.js";
import { socket } from "./socket/noteSocket.js";
const app = express();

connectDb();

app.set("Port", 4000);

const server = app.listen(app.get("Port"), () => {
  console.log("El servidor está escuchando por el puerto", app.get("Port"));
});

socket(server);
