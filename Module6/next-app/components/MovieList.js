"use client";
import { useState } from "react";
import SortButton from "./SortButton";

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

export function MoviesList() {
  const [currentMovies, setCurrentMovies] = useState(movies);

  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
  };

  const sortByYear = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => a.year - b.year);
    setCurrentMovies(newMovies);
  };

  const sortByTitle = () => {
    let newMovies = [...currentMovies];
    newMovies.sort((a, b) => a.title.localeCompare(b.title));
    setCurrentMovies(newMovies);
  };

  return (
    <>
      <h1>Movie List</h1>
      <div>
        {currentMovies.map((movie, index) => (
          <li key={index}>
            {movie.title}
            {movie.synopsis}
            {movie.year}
          </li>
        ))}
      </div>
      <div>
        {/* <SortButton styles onClick={sortByYear} text="Sort By Year" />
        <SortButton onClick={sortByTitle} text="Sort By Title" /> */}
        <button
          className="px-2 py-3 bg-red-500 rounded-lg"
          onClick={handleReverseMovies}
        >
          Reverse List
        </button>
      </div>
      <div>
        <button
          className="px-2 py-3 bg-green-500 rounded-lg"
          onClick={sortByYear}
        >
          Sort By Year
        </button>
      </div>
      <div>
        <button
          className="px-2 py-3 bg-blue-500 rounded-lg"
          onClick={sortByTitle}
        >
          Sort By Title
        </button>
      </div>
    </>
  );

  //     <div className="MoviesList">
  //       <ul>{movieItems}</ul>
  //       <button onClick={handleReverseMovies}>Reverse List</button>
  //     </div>
  //   );
}
// ++ Try adding buttons to sort by year and by title
// ++ Try extracting a SortButton component to replace the above
