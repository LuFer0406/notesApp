import mongoose from "mongoose";
const {Schema, model} = mongoose;

const noteSchema = new Schema({
    title: {
        type: String,
        required: ["true", "The field title is required."]
    },
    description: {
        type: String,
        required: ["true", "The field description is required."]

    }
},{
    timestamps: true
})

export const noteModel = model("note", noteSchema)