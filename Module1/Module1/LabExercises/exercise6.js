const books = {
  book: [
    {
      title: "Death In Her Hands",
      description: "A thriller where a woman finds a note from a serial killer",
      author: "Ottessa Moshfegh",
      numberOfPages: 272,
    },
    {
      title: "Dune",
      description: "A sci-fi epic about a boys journey in a new world",
      author: "Frank Herbert",
      numberOfPages: 600,
    },
    {
      title: "Perfume",
      description: "The story of a man who makes purfume out of human remains",
      author: "Patrick Suskind",
      numberOfPages: 300,
    },
    {
      title: "His Name Was Death",
      description: "A thriller where a man befriends legions of mosquitos",
      author: "Rafael Bernal",
      numberOfPages: 162,
    },
    {
      title: "A Little Life",
      description:
        "A drama about four friends growing up together over the years",
      author: "Hanya Yanagihara",
      numberOfPages: 886,
    },
  ],
};

books.book[0].description = "A thriller where a woman finds an intruiging note";

console.log(books.book[0].title);
console.log(books.book[0].description);
console.log(books.book[0].author);
console.log(books.book[0].numberOfPages);
console.log(books.book[0]);
console.log(books.book[0].description);
console.log(books.book[4].title);
