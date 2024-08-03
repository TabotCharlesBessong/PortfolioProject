import express from "express";
import { createBook, getAllBooks } from "../controller/library.controller.js";

const bookRouter = express.Router();

bookRouter.get("/getall", getAllBooks);
bookRouter.post("/create", createBook);

export default bookRouter;
