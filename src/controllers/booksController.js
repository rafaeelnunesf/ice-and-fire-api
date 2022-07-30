import booksService from "../services/booksService.js";

export async function getBookCover(req, res) {
  const { bookId } = req.params;

  const cover = await booksService.getBookCover(parseInt(bookId));

  res.status(200).send(cover);
}
export async function getManyCovers(req, res) {
  const { books: booksId } = req.body;
  const covers = await booksService.getManyCovers(booksId);
  res.status(200).send(covers);
}
export async function getpovCharacters(req, res) {
  const { bookId } = req.params;

  const cover = await booksService.getpovCharacters(parseInt(bookId));

  res.status(200).send(cover);
}
