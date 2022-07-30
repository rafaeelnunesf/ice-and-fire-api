import { Router } from "express";
import {
  getBookCover,
  getManyCovers,
  getpovCharacters,
} from "../controllers/booksController.js";
const booksRouter = Router();

booksRouter.get("/:bookId/cover", getBookCover);
booksRouter.get("/:bookId/pov-characters", getpovCharacters);
booksRouter.get("/", getManyCovers);

export default booksRouter;
