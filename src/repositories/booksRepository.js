import db from "../config/db.js";
async function getFromIds(booksIds) {
  return await db
    .collection("books")
    .find({ bookId: { $in: booksIds } })
    .toArray();
}

async function getOne(bookId) {
  return await db.collection("books").findOne({ bookId });
}

const booksRepository = {
  getFromIds,
  getOne,
};

export default booksRepository;
