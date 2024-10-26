import { MoviesList } from "@/components/MovieList";

function Movie({ title, year, synopsis }) {
  return (
    <li className="list-none">
      <h3>{title}</h3> <span>({year})</span>
      <div>({synopsis})</div>
    </li>
  );
}

export default function MoviesPage() {
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
      <MoviesList />
    </>
  );
}
