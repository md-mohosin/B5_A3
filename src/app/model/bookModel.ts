import { model, Schema } from "mongoose";
import { Book } from "../interface/book.Interface";

const bookSchema = new Schema<Book>(
    {
        title: { type: String, required: true, trim: true },
        author: { type: String, required: true, trim: true },
        genre: { type: String, required: true, trim: true },
        isbn: { type: Number, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        copies: { type: Number, required: true, trim: true },
        available: { type: Boolean, required: true }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)


export const Books = model("Book",bookSchema)