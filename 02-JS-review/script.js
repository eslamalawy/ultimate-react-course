const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// 01 Destructuring

const book = getBook(2);
// const title = book.title
// const author = book.author

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);

// 02 Rest Spread operator
const [primaryGenre1, ...otherGenres] = genres;
console.log(primaryGenre1, otherGenres);

// const newGenres = [genres, 'epic fantasy']
const newGenres = [...genres, "epic fantasy"];
const newGenres2 = ["epic fantasy", ...genres];
console.log(newGenres);
console.log(newGenres2);

// add new properties to object
const book1 = getBook(1);
const book2 = getBook(2);
const book3 = getBook(3);
// const updatedBook = {book1, moviePublicationDate: "2002-12-16"}
const updatedBook = {
  ...book1,
  // Adding new property
  moviePublicationDate: "2002-12-16",
  // Overwriting an existing property  note: should spread the object first
  pages: 840,
};
console.log(updatedBook);

//  03 Template Literals

const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
console.log(summary);

// 04 Ternaries Instead of if/else Statements
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
console.log(pagesRange);

// 05 Arrow Functions
// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

// 06 Short Circuiting And Logical Operators
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "This book has a movie.");

// && it return the last value if all true
// falsy: 0, '', null, undefined
console.log("jonas" && "some string");
console.log(0 && "some string");

// || if the first is true it return it without looking to the sencod value
console.log(true || "some str");
console.log(false || "some str");

console.log(book2.translations.spanish);

const spanishTranslation = book1.translations.spanish || "NOT TRANSLATED";
console.log(spanishTranslation);

console.log(book2.reviews.librarything.reviewsCount);
const countingWrong = book2.reviews.librarything.reviewsCount || "no data";
console.log(countingWrong);

// Nullish Coalescing Operator
// it does also short circut for falsy values like ||
// it will only return the second value when the first value is null or undefined
const count = book2.reviews.librarything.reviewsCount ?? "no data";
console.log(count);
// null case
let fakeReviewsCount = null;
let countForFake = fakeReviewsCount ?? "no data";
console.log(countForFake);
// undefined case
fakeReviewsCount = undefined;
countForFake = fakeReviewsCount ?? "no data";
console.log(countForFake);
// 0 case
fakeReviewsCount = 0;
countForFake = fakeReviewsCount ?? "no data";
console.log(countForFake);
// value case
fakeReviewsCount = 837;
countForFake = fakeReviewsCount ?? "no data";
console.log(countForFake);

// 07 Optional Chaining Operator

function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + librarything;
}

console.log(getTotalReviewCount(book3));

// 08 The Array map Method
const books = getBooks();

const doubledarray = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(doubledarray);

const titles = books.map((book) => book.title);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData);

// 09 The Array filter Method

// it will return the whole object if condetion is true
const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);

const longMovieBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longMovieBooks);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

// 10 The Array reduce Method
const allBooksPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log(allBooksPages);

// 11 The Array sort Method  (MUTATE the original array)
const AscendingArr = [3, 7, 1, 9, 6];
const sorted = AscendingArr.sort((a, b) => a - b);
console.log(sorted);
console.log(AscendingArr);

const DescendingArr = [3, 7, 1, 9, 6];
DescendingArr.sort((a, b) => b - a);
console.log(DescendingArr);
// avoid mutation
const DescendingArrAvoid = [3, 7, 1, 9, 0, 6];
const nArr = DescendingArrAvoid.slice().sort((a, b) => b - a);
console.log(nArr);
console.log(DescendingArrAvoid);
// descending
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

// 12 Working With Immutable Arrays

//1) add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "j. k. Rowling",
};
const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

//2) delete book object from array
// it will return all books except that book which has id equal to 3
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
console.log(booksAfterUpdate);

// 013 Asynchronous JavaScript Promises
promise = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log("013", data));
console.log(promise);
console.log("simple");

// 014 Asynchronous JavaScript AsyncAwait
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}

const todos = await getTodos();
console.log("todos:",todos);
console.log("simpler");
