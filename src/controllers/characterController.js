import { characterService } from "../services/index.js";
export async function getCharacterBooks(req, res) {
  const { characterId } = req.params;

  const books = await characterService.getBooks(parseInt(characterId));

  res.status(200).send(books);
}
