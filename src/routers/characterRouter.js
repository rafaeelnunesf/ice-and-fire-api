import { Router } from "express";
import {
  getCharacterBooks,
  getCharacter,
  getManyCharacters,
} from "../controllers/characterController.js";
const characterRouter = Router();

characterRouter.get("/:characterId/books", getCharacterBooks);
characterRouter.get("/:characterId", getCharacter);
characterRouter.get("/", getManyCharacters);

export default characterRouter;
