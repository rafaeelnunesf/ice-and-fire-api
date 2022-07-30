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

async function getMany(charactersIds) {
  return await db
    .collection("characters")
    .find({ characterId: { $in: charactersIds } })
    .toArray();
}

const charactersRepository = {
  getBooksIds,
  getOne,
  getMany,
};

export default charactersRepository;
