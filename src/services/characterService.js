import {
  EmptyBodyError,
  notFoundError,
  EmptyArrayError,
} from "../errors/index.js";

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
  if (!character) throw notFoundError();
  return character;
}

export async function getMany(charactersIds) {
  if (!charactersIds) throw EmptyBodyError();
  if (charactersIds.length === 0) throw EmptyArrayError();
  // type error

  const characters = await charactersRepository.getMany(charactersIds);
  return characters;
}

const characterService = {
  getBooks,
  getCharacter,
  getMany,
};

export default characterService;
