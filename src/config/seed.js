import axios from "axios";
import { loadingAnimation } from "../utils/loadingAnimation.js";
import db from "../config/db.js";
import { Buffer } from "node:buffer";
async function insertBooks() {
  try {
    const books = await db.collection("books").find().toArray();
    if (books.length === 0) {
      const { data: arrayBooks } = await axios.get(
        `https://anapioficeandfire.com/api/books?page=1&pageSize=50`
      );

      for (const book of arrayBooks) {
        const urlId = parseInt(book.url.replace(/[^0-9]/g, ""));
        delete book.url;
        book.bookId = urlId;

        const { data: image } = await axios.get(
          `https://covers.openlibrary.org/b/isbn/${book.isbn}.jpg`
        );

        const buff = Buffer.from(image);
        const base64cover = buff.toString("base64");

        book.base64cover = base64cover;

        const charactersIds = [];
        book.characters.forEach((character) => {
          const characterId = parseInt(character.replace(/[^0-9]/g, ""));
          charactersIds.push(characterId);
        });
        book.characters = charactersIds;

        const povCharactersIds = [];
        book.povCharacters.forEach((povCharacter) => {
          const characterId = parseInt(povCharacter.replace(/[^0-9]/g, ""));
          povCharactersIds.push(characterId);
        });
        book.povCharacters = povCharactersIds;
      }

      db.collection("books").insertMany(arrayBooks);
    }
  } catch (err) {
    console.log(err);
  }
}

async function insertCharacters() {
  try {
    const characters = await db.collection("characters").find().toArray();
    if (characters.length === 0) {
      for (let i = 1; i <= 43; i++) {
        const { data: arraycharacters } = await axios.get(
          `https://anapioficeandfire.com/api/characters?page=${i}&pageSize=50`
        );

        arraycharacters.forEach((character) => {
          const urlId = parseInt(character.url.replace(/[^0-9]/g, ""));
          delete character.url;
          character.characterId = urlId;

          const booksId = [];
          character.books.forEach((book) => {
            const bookId = parseInt(book.replace(/[^0-9]/g, ""));
            booksId.push(bookId);
          });
          character.books = booksId;

          const povBooksId = [];
          character.povBooks.forEach((povBook) => {
            const povBookId = parseInt(povBook.replace(/[^0-9]/g, ""));
            povBooksId.push(povBookId);
          });
          character.povBooks = povBooksId;

          const allegiancesId = [];
          character.allegiances.forEach((allegiance) => {
            const allegianceId = parseInt(allegiance.replace(/[^0-9]/g, ""));
            allegiancesId.push(allegianceId);
          });
          character.allegiances = allegiancesId;
        });

        db.collection("characters").insertMany(arraycharacters);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function insertHouses() {
  try {
    const houses = await db.collection("houses").find().toArray();
    if (houses.length === 0) {
      for (let i = 1; i <= 9; i++) {
        const { data: arrayHouses } = await axios.get(
          `https://anapioficeandfire.com/api/houses?page=${i}&pageSize=50`
        );

        arrayHouses.forEach((house) => {
          const urlId = parseInt(house.url.replace(/[^0-9]/g, ""));
          delete house.url;
          house.houseId = urlId;

          house.currentLord = parseInt(
            house.currentLord.replace(/[^0-9]/g, "")
          );
          house.heir = parseInt(house.heir.replace(/[^0-9]/g, ""));
          house.overlord = parseInt(house.overlord.replace(/[^0-9]/g, ""));
          house.founder = parseInt(house.founder.replace(/[^0-9]/g, ""));

          const cadetBranchesIds = [];
          house.cadetBranches.forEach((cadetBranche) => {
            const cadetBrancheId = parseInt(
              cadetBranche.replace(/[^0-9]/g, "")
            );
            cadetBranchesIds.push(cadetBrancheId);
          });
          house.cadetBranches = cadetBranchesIds;

          const swornMembersIds = [];
          house.swornMembers.forEach((swornMember) => {
            const swornMemberId = parseInt(swornMember.replace(/[^0-9]/g, ""));
            swornMembersIds.push(swornMemberId);
          });
          house.swornMembers = swornMembersIds;
        });

        db.collection("houses").insertMany(arrayHouses);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

async function seed() {
  let interval = loadingAnimation("Seeding in progress.");

  await insertBooks();
  await insertCharacters();
  await insertHouses();

  clearInterval(interval);

  process.stdout.clearLine();
  console.log("\r" + "🌱 Seeding completed!");
}

seed();
