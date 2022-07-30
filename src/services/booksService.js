import {
  EmptyBodyError,
  notFoundError,
  EmptyArrayError,
} from "../errors/index.js";

import {
  booksRepository,
  charactersRepository,
} from "../repositories/index.js";

export async function getBookCover(bookId) {
  if (!bookId) throw notFoundError();
  // type error
  const book = await booksRepository.getOne(bookId);
  return book.base64cover;
}
export async function getpovCharacters(bookId) {
  if (!bookId) throw notFoundError();
  // type error
  const { povCharacters: povCharactersIds } = await booksRepository.getOne(
    bookId
  );

  const povCharacters = await charactersRepository.getMany(povCharactersIds);

  return povCharacters;
}

export async function getManyCovers(booksIds) {
  if (!booksIds) throw EmptyBodyError();
  if (booksIds.length === 0) throw EmptyArrayError();
  // type error
  const books = await booksRepository.getFromIds(booksIds);

  return books.map((book) => book.base64cover);
}

const booksService = {
  getBookCover,
  getManyCovers,
  getpovCharacters,
};

export default booksService;
