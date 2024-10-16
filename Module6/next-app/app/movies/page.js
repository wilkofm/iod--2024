// separate component for displaying each movie
function Movie({ title, year, synopsis }) {
  return (
    <li>
      <h3>{title}</h3> <span>({year})</span>
      <div>{synopsis}</div>
    </li>
  );
}

export default function MovieList() {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  return (
    <>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <Movie
          id={movie.id}
          title={movie.title}
          year={movie.year}
          synopsis={movie.synopsis}
        />
      ))}
    </>
  );
}
