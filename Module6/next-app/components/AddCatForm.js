"use client";
import { useState } from "react";

export function AddCatForm() {
  // input state values always need to be strings - empty initially
  const [catName, setCatName] = useState("");
  const [catLatinName, setLatinName] = useState("");
  const [catImage, setImage] = useState("");
  const [submitResults, setSubmitResults] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitResults("New cat added");
  };

  return (
    <form className="AddCatForm" onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={catName}
            name="catName"
            onChange={(e) => setCatName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Latin Name:
          <input
            type="text"
            value={catLatinName}
            name="latinName"
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input
            type="text"
            value={catImage}
            name="Image"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Add Cat</button>
      <p>{submitResults}</p>
    </form>
  );
}