import { characterService } from "../services/index.js";
export async function getCharacterBooks(req, res) {
  const { characterId } = req.params;

  const books = await characterService.getBooks(parseInt(characterId));

  res.status(200).send(books);
}

export async function getCharacter(req, res) {
  const { characterId } = req.params;

  const character = await characterService.getCharacter(parseInt(characterId));

  res.status(200).send(character);
}
