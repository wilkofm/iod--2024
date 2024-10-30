"use client";
import { useState } from "react";

export function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  // ++ add support for the synopsis field as well, here and below
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onAddMovie({ title, year });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    console.log("FD title", formData.get("title"));

    // const movieData = {
    //     title: formData.get('title')
    //     year: formData.get('year')
    //     synopsis: "Some data about the movie"
    // };

    const movieData = Object.fromEntries(formData);

    onAddMovie(movieData);

    return (
      <div className="AddMovieForm componentBox">
        <form onSubmit={handleSubmit}>
          <label>
            Movie Title:
            <input
              name="title"
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
              defaultValue=""
            />
          </label>
          <label>
            Year Released:
            <input
              name="year"
              type="number"
              // value={year}
              // onChange={(e) => setYear(e.target.value)}
              defaultValue=""
            />
          </label>
          <button>Add Movie</button>
        </form>
      </div>
    );
  };
}
