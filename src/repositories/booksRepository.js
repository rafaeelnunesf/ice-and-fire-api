import db from "../config/db.js";
async function getBooksFromIds(arrayIds) {
  const response = await db
    .collection("books")
    .find({ bookId: { $in: arrayIds } })
    .toArray();

  console.log(response);
  return response;
}

const booksRepository = {
  getBooksFromIds,
};

export default booksRepository;
