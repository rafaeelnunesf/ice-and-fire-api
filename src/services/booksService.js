import {
  EmptyBodyError,
  notFoundError,
  EmptyArrayError,
  typeError,
} from "../errors/index.js";

import {
  booksRepository,
  charactersRepository,
} from "../repositories/index.js";

export async function getBookCover(bookId) {
  const book = await booksRepository.getOne(bookId);
  if (!book) throw notFoundError();
  return book.base64cover;
}
export async function getpovCharacters(bookId) {
  const book = await booksRepository.getOne(bookId);
  if (!book) throw notFoundError();

  const { povCharacters: povCharactersIds } = book;
  const povCharacters = await charactersRepository.getMany(povCharactersIds);

  return povCharacters;
}

export async function getManyCovers(booksIds) {
  if (!booksIds) throw EmptyBodyError();

  const verify = booksIds.some(
    (item) =>
      isNaN(item) || item.length !== undefined || !Array.isArray(booksIds)
  );

  if (verify) throw typeError();
  if (booksIds.length === 0) throw EmptyArrayError();

  const books = await booksRepository.getFromIds(booksIds);

  return books.map((book) => book.base64cover);
}

const booksService = {
  getBookCover,
  getManyCovers,
  getpovCharacters,
};

export default booksService;
