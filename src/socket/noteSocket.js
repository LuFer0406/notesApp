import { Server } from "socket.io";
import { noteModel } from "../models/noteModel.js";

export const socket = (server) => {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("Usuario conectado ", socket.id);

    const getNotes = async () => {
      const notes = await noteModel.find();
      io.emit("server:getNotes", notes);
    };

    getNotes();

    socket.on("client:addNote", async (note) => {
      await noteModel.create(note);
      getNotes();
    });

    socket.on("client:updateNote", async (note) => {
      await noteModel.findByIdAndUpdate({ _id: note._id }, note);
      getNotes();
    });

    socket.on("client:deleteNote", async(id) => {
        await noteModel.findOneAndDelete(id)
        getNotes()
    })

    socket.on("client:getNote", async(id) => {
        const note = await noteModel.findById(id)
        io.emit("server:getNote", note)
    })

    socket.on("disconnect", () => {
        console.log("Usuario desconectado ", socket.id )
    })
  });
};
