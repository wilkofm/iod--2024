"use client";
import { useState } from "react";

const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://i.natgeofe.com/k/66d3a80c-f4c3-4410-845c-3543375eaa85/cheetah-watching_square.jpg",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThI7FQQxYm2WiXnVYMc5LERR5HlDRrcwB2cA&s",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://cdn.britannica.com/09/143609-050-826EA62F/Jaguar-stream-Brazil.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "https://cdn.britannica.com/30/136130-050-3370E37A/Leopard.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://cdn.britannica.com/52/170952-050-A545E35D/carnivore-Snow-leopard-regions-subcontinent-Asia-Indian.jpg",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://cdn.britannica.com/83/195983-138-66807699/numbers-tiger-populations.jpg?w=800&h=450&c=crop",
  },
];

export function CatList() {
  const [currentCats, setCurrentCats] = useState(cats);

  const reverseCats = () => {
    // first clone the original, so we don’t mutate it
    let newCats = [...currentCats];
    newCats.reverse(); // 2. modify the clone
    setCurrentCats(newCats); // 3. set updated clone in state
  };

  const sortByName = () => {
    let newCats = [...currentCats];
    newCats.sort((a, b) => a.name.localeCompare(b.name));
    setCurrentCats(newCats);
  };

  const pantheraCats = () => {
    let newCats = currentCats.filter((cat) =>
      cat.latinName.includes("Panthera")
    );
    setCurrentCats(newCats);
  };

  const resetCats = () => {
    setCurrentCats(cats);
  };

  return (
    <>
      <button
        className="px-2 py-3 bg-blue-500 rounded-lg"
        onClick={reverseCats}
      >
        Reverse Cats
      </button>
      <button
        className="px-2 py-3 bg-green-500 rounded-lg"
        onClick={sortByName}
      >
        Sort By Cat Name
      </button>
      <button
        className="px-2 py-3 bg-red-500 rounded-lg"
        onClick={pantheraCats}
      >
        Panthera Family
      </button>
      <button
        className="px-2 py-3 bg-purple-500 rounded-lg"
        onClick={resetCats}
      >
        Reset List
      </button>
      <h1>Big Cats</h1>
      {currentCats.map((cat) => (
        <div key={cat.id}>
          <h1>{cat.name}</h1>
          <p>{cat.latinName}</p>
          <img src={cat.image} alt={cat.name} width="500"></img>
        </div>
      ))}
    </>
  );
}
