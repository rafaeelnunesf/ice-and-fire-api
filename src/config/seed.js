import axios from "axios";
import { loadingAnimation, replaceIdsFromUrl } from "../utils/index.js";
import db from "../config/db.js";
import { Buffer } from "node:buffer";

const baseUrl = "https://anapioficeandfire.com/api";

async function insertBooks() {
  try {
    const books = await db.collection("books").find().toArray();
    if (books.length === 0) {
      const { data: arrayBooks } = await axios.get(
        `${baseUrl}/books?page=1&pageSize=50`
      );

      for (const book of arrayBooks) {
        const urlId = parseInt(book.url.replace(/[^0-9]/g, ""));
        const image = `https://covers.openlibrary.org/b/isbn/${book.isbn}.jpg`;
        const buff = Buffer.from(image);
        const base64cover = buff.toString("base64");

        delete book.url;

        book.bookId = urlId;
        book.base64cover = base64cover;
        book.characters = replaceIdsFromUrl(book.characters);
        book.povCharacters = replaceIdsFromUrl(book.povCharacters);
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
          `${baseUrl}/characters?page=${i}&pageSize=50`
        );

        arraycharacters.forEach((character) => {
          const urlId = parseInt(character.url.replace(/[^0-9]/g, ""));
          delete character.url;
          character.characterId = urlId;
          character.books = replaceIdsFromUrl(character.books);
          character.povBooks = replaceIdsFromUrl(character.povBooks);
          character.allegiances = replaceIdsFromUrl(character.allegiances);
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
          `${baseUrl}/houses?page=${i}&pageSize=50`
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
          house.cadetBranches = replaceIdsFromUrl(house.cadetBranches);
          house.swornMembers = replaceIdsFromUrl(house.swornMembers);
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
