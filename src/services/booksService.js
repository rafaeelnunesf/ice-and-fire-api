import {
  EmptyBodyError,
  notFoundError,
  EmptyArrayError,
} from "../errors/index.js";

import { booksRepository } from "../repositories/index.js";

export async function getBookCover(bookId) {
  if (!bookId) throw notFoundError();
  // type error
  const book = await booksRepository.getOne(bookId);
  return book.base64cover;
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
};

export default booksService;
