import { EmptyBodyError } from "../errors/emptyBodyError.js";
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

export async function getMany(charactersIds) {
  if (!charactersIds) throw EmptyBodyError();

  const characters = await charactersRepository.getMany(charactersIds);
  return characters;
}

const characterService = {
  getBooks,
  getCharacter,
  getMany,
};

export default characterService;
