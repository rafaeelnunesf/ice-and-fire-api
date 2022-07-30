import db from "../config/db.js";
async function getBooksIds(characterId) {
  const { books: booksIds } = await db
    .collection("characters")
    .findOne({ characterId });

  return booksIds;
}
async function getOne(characterId) {
  return await db.collection("characters").findOne({ characterId });
}

const charactersRepository = {
  getBooksIds,
  getOne,
};

export default charactersRepository;
