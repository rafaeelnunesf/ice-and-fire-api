import db from "../config/db.js";
async function getBooksFromIds(booksIds) {
  return await db
    .collection("books")
    .find({ bookId: { $in: booksIds } })
    .toArray();
}

const booksRepository = {
  getBooksFromIds,
};

export default booksRepository;
