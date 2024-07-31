import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    unique: true,
  },
});

const Book = mongoose.model("Library", librarySchema);
export default Book
