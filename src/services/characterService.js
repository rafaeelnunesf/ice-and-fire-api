import {
  charactersRepository,
  booksRepository,
} from "../repositories/index.js";

export async function getBooks(characterId) {
  const booksIds = await charactersRepository.getBooksIds(characterId);
  const books = await booksRepository.getBooksFromIds(booksIds);
  return books;
}

const characterService = {
  getBooks,
};

export default characterService;
