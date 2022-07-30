import db from "../config/db.js";
async function getBooksIds(characterId) {
  const { books: booksIds } = await db
    .collection("characters")
    .findOne({ characterId });

  return booksIds;
}

const charactersRepository = {
  getBooksIds,
};

export default charactersRepository;
