import { Router } from "express";
import { getCharacterBooks } from "../controllers/characterController.js";
const characterRouter = Router();

characterRouter.get("/:characterId/books", getCharacterBooks);

export default characterRouter;
