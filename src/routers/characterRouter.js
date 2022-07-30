import { Router } from "express";
import {
  getCharacterBooks,
  getCharacter,
} from "../controllers/characterController.js";
const characterRouter = Router();

characterRouter.get("/:characterId/books", getCharacterBooks);
characterRouter.get("/:characterId", getCharacter);

export default characterRouter;
