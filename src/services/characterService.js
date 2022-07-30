import {
  charactersRepository,
  booksRepository,
} from "../repositories/index.js";

export async function getBooks(characterId) {
  const booksIds = await charactersRepository.getBooksIds(characterId);
  const books = await booksRepository.getBooksFromIds(booksIds);
  return books;
}

export async function getCharacter(characterId) {
  const character = await charactersRepository.getOne(characterId);
  return character;
}

const characterService = {
  getBooks,
  getCharacter,
};

export default characterService;
