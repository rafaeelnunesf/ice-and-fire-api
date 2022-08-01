# Ice And Fire API

This is an api with information about the A Song of Ice and Fire books and their characters.

## About this Project

This project is part of a technical test by the company [Mobix](https://www.mobixtec.com/) and part of my personal portfolio, so, I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!

Email-me: rafaelnfsq@gmail.com

Connect with me at [LinkedIn](https://www.linkedin.com/in/rafaeelnunesf/)

Also, you can use this Project as you wish, be for study, be for make improvements!

It's free!

## Getting Started

### Prerequisites

To run this project in the development mode, you'll need to have a basic environment with NodeJS 16+ installed. To use the database, you'll need to have MongoDB installed and running on your machine at the default port (27017).

### Installing

**Cloning the Repository**

```
$ git@github.com:rafaeelnunesf/backend_challenge_mobix.git
$ cd backend_challenge_mobix
```

**Installing dependencies**

```
$ npm install
```

### Running

1. Create an .env file based on the .env.example file

2. With all dependencies installed, the Database running and the environment properly configured, you can now run the server:

```
$ npm run dev
```

### Populate the Database

```
$ npm run dev:seed
```

## Routes

The base URL is: http://localhost:5000

### Books

This route you can get the cover of one books:

| **url**              | **Method** | Body Params | URL Params                        | Success Response                                           | Error Response                                                                             |
| -------------------- | ---------- | ----------- | --------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| /books/:bookId/cover | `GET`      | -           | **Required:**<br />bookId: String | **Code:** 200 - OK<br />**Content:** <br/>String: "base64" | **Code:** 400 - Bad Request!<br />**Content:** `{"message": "No result for this search!"}` |

This route you can get the cover of many books:

| **url**       | **Method** | Body Params                          | URL Params | Success Response                                                      | Error Response                                                                                      |
| ------------- | ---------- | ------------------------------------ | ---------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| /books/covers | `GET`      | **Example:**<br />"books":[1, 2, 3]} | -          | **Code:** 200 - OK<br />**Content:**<br /> Array of Strings: "base64" | **Code:** 500 - INTERNAL SERVER ERROR<br />**Content:** `{"message": "No result for this search!"}` |

This route you can get the cover of one books:

| **url**                 | **Method** | Body Params | URL Params                        | Success Response                                                          | Error Response                                                                             |
| ----------------------- | ---------- | ----------- | --------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| /:bookId/pov-characters | `GET`      | -           | **Required:**<br />bookId: String | **Code:** 200 - OK<br />**Content:** <br/>[povCharacters](#povCharacters) | **Code:** 400 - Bad Request!<br />**Content:** `{"message": "No result for this search!"}` |

### Models

#### povCharacters

```
[
  {
    "_id": "62e45b281b1bd29359b6c88b",
    "name": "Arya Stark",
    "gender": "Female",
    "culture": "Northmen",
    "born": "In 289 AC, at Winterfell",
    "died": "",
    "titles": [
      "Princess"
    ],
    "aliases": [
      "Arya Horseface",
      "Arya Underfoot",
      "Arry",
      "Lumpyface",
      "Lumpyhead",
      "Stickboy",
      "Weasel",
      "Nymeria",
      "Squan",
      "Saltb",
      "Cat of the Canaly",
      "Bets",
      "The Blind Girh",
      "The Ugly Little Girl",
      "Mercedenl",
      "Mercye"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      362
    ],
    "books": [],
    "povBooks": [
      1,
      2,
      3,
      5,
      8
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Maisie Williams"
    ],
    "characterId": 148
  },
  {
    "_id": "62e45b2a1b1bd29359b6c9ed",
    "name": "Brandon Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 290 AC, at Winterfell",
    "died": "",
    "titles": [
      "Prince of Winterfell"
    ],
    "aliases": [
      "Bran",
      "Bran the Broken",
      "The Winged Wolf"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      362
    ],
    "books": [
      5
    ],
    "povBooks": [
      1,
      2,
      3,
      8
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 6"
    ],
    "playedBy": [
      "Isaac Hempstead-Wright"
    ],
    "characterId": 208
  },
  {
    "_id": "62e45b2a1b1bd29359b6ca05",
    "name": "Catelyn Stark",
    "gender": "Female",
    "culture": "Rivermen",
    "born": "In 264 AC, at Riverrun",
    "died": "In 299 AC, at the Twins",
    "titles": [
      "Lady of Winterfell"
    ],
    "aliases": [
      "Catelyn Tully",
      "Lady Stoneheart",
      "The Silent Sistet",
      "Mother Mercilesr",
      "The Hangwomans"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/339",
    "allegiances": [
      362,
      395
    ],
    "books": [
      5,
      8
    ],
    "povBooks": [
      1,
      2,
      3
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3"
    ],
    "playedBy": [
      "Michelle Fairley"
    ],
    "characterId": 232
  },
  {
    "_id": "62e45b2a1b1bd29359b6ca70",
    "name": "Eddard Stark",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 263 AC, at Winterfell",
    "died": "In 299 AC, at Great Sept of Baelor in King's Landing",
    "titles": [
      "Lord of Winterfell",
      "Warden of the North",
      "Hand of the King",
      "Protector of the Realm",
      "Regent"
    ],
    "aliases": [
      "Ned",
      "The Ned",
      "The Quiet Wolf"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/232",
    "allegiances": [
      362
    ],
    "books": [
      2,
      3,
      5,
      8,
      11
    ],
    "povBooks": [
      1
    ],
    "tvSeries": [
      "Season 1",
      "Season 6"
    ],
    "playedBy": [
      "Sean Bean",
      "Sebastian Croft",
      "Robert Aramayo"
    ],
    "characterId": 339
  },
  {
    "_id": "62e45b2c1b1bd29359b6cb64",
    "name": "Jon Snow",
    "gender": "Male",
    "culture": "Northmen",
    "born": "In 283 AC",
    "died": "",
    "titles": [
      "Lord Commander of the Night's Watch"
    ],
    "aliases": [
      "Lord Snow",
      "Ned Stark's Bastard",
      "The Snow of Winterfell",
      "The Crow-Come-Over",
      "The 998th Lord Commander of the Night's Watch",
      "The Bastard of Winterfell",
      "The Black Bastard of the Wall",
      "Lord Crow"
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [
      362
    ],
    "books": [
      5
    ],
    "povBooks": [
      1,
      2,
      3,
      8
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Kit Harington"
    ],
    "characterId": 583
  },
  {
    "_id": "62e45b2e1b1bd29359b6ccda",
    "name": "Sansa Stark",
    "gender": "Female",
    "culture": "Northmen",
    "born": "In 286 AC, at Winterfell",
    "died": "",
    "titles": [
      "Princess"
    ],
    "aliases": [
      "Little bird",
      "Alayne Stone",
      "Jonquil"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/1052",
    "allegiances": [
      10,
      362
    ],
    "books": [
      8
    ],
    "povBooks": [
      1,
      2,
      3,
      5
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Sophie Turner"
    ],
    "characterId": 957
  },
  {
    "_id": "62e45b2f1b1bd29359b6cd39",
    "name": "Tyrion Lannister",
    "gender": "Male",
    "culture": "",
    "born": "In 273 AC, at Casterly Rock",
    "died": "",
    "titles": [
      "Acting Hand of the King (former)",
      "Master of Coin (former)"
    ],
    "aliases": [
      "The Imp",
      "Halfman",
      "The boyman",
      "Giant of Lannister",
      "Lord Tywin's Doom",
      "Lord Tywin's Bane",
      "Yollo",
      "Hugor Hill",
      "No-Nose",
      "Freak",
      "Dwarf"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/2044",
    "allegiances": [
      229
    ],
    "books": [
      5,
      11
    ],
    "povBooks": [
      1,
      2,
      3,
      8
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Peter Dinklage"
    ],
    "characterId": 1052
  },
  {
    "_id": "62e45b2f1b1bd29359b6cd72",
    "name": "Will",
    "gender": "Male",
    "culture": "",
    "born": "",
    "died": "In 297 AC, at Haunted Forest",
    "titles": [
      ""
    ],
    "aliases": [
      ""
    ],
    "father": "",
    "mother": "",
    "spouse": "",
    "allegiances": [],
    "books": [
      2
    ],
    "povBooks": [
      1
    ],
    "tvSeries": [
      ""
    ],
    "playedBy": [
      "Bronson Webb"
    ],
    "characterId": 1109
  },
  {
    "_id": "62e45b301b1bd29359b6ce34",
    "name": "Daenerys Targaryen",
    "gender": "Female",
    "culture": "Valyrian",
    "born": "In 284 AC, at Dragonstone",
    "died": "",
    "titles": [
      "Queen of the Andals and the Rhoynar and the First Men, Lord of the Seven Kingdoms",
      "Khaleesi of the Great Grass Sea",
      "Breaker of Shackles/Chains",
      "Queen of Meereen",
      "Princess of Dragonstone"
    ],
    "aliases": [
      "Dany",
      "Daenerys Stormborn",
      "The Unburnt",
      "Mother of Dragons",
      "Mother",
      "Mhysa",
      "The Silver Queen",
      "Silver Lady",
      "Dragonmother",
      "The Dragon Queen",
      "The Mad King's daughter"
    ],
    "father": "",
    "mother": "",
    "spouse": "https://anapioficeandfire.com/api/characters/1346",
    "allegiances": [
      378
    ],
    "books": [
      5
    ],
    "povBooks": [
      1,
      2,
      3,
      8
    ],
    "tvSeries": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4",
      "Season 5",
      "Season 6"
    ],
    "playedBy": [
      "Emilia Clarke"
    ],
    "characterId": 1303
  }
]
```
