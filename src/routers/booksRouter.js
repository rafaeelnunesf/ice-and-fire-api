import { Router } from "express";
import { getBookCover, getManyCovers } from "../controllers/booksController.js";
const booksRouter = Router();

booksRouter.get("/:bookId/cover", getBookCover);
booksRouter.get("/", getManyCovers);

export default booksRouter;
