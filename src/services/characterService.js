import {
  EmptyBodyError,
  notFoundError,
  EmptyArrayError,
  typeError,
} from "../errors/index.js";

import {
  charactersRepository,
  booksRepository,
} from "../repositories/index.js";

export async function getBooks(characterId) {
  const booksIds = await charactersRepository.getBooksIds(characterId);
  const books = await booksRepository.getFromIds(booksIds);
  return books;
}

export async function getCharacter(characterId) {
  const character = await charactersRepository.getOne(characterId);
  if (!character) throw notFoundError();
  return character;
}

export async function getMany(charactersIds) {
  if (!charactersIds) throw EmptyBodyError();

  const typeVerification = charactersIds.some(
    (item) => isNaN(item) || item.length !== undefined
  );

  if (typeVerification || !Array.isArray(charactersIds)) throw typeError();
  if (charactersIds.length === 0) throw EmptyArrayError();

  const characters = await charactersRepository.getMany(charactersIds);
  return characters;
}

const characterService = {
  getBooks,
  getCharacter,
  getMany,
};

export default characterService;
