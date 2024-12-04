import React, { useState } from "react";
import JokeComponent from "./JokeComponent";

function JokeContainer() {
  const [jokes, setJokes] = useState([1, 2, 3]);
  let handleAdd = () => {
    let id = jokes.length == 0 ? 1 : jokes[jokes.length - 1] + 1;
    setJokes((prev) => [...prev, id]);
  };

  let deleteJoke = (joke) => {
    setJokes((prev) => prev.filter((id) => id !== joke));
  };

  return (
    <>
      <button className="joke-btn" onClick={handleAdd}>
        Add Joke
      </button>
      {jokes.map((joke) => (
        <JokeComponent key={joke} id={joke} onDelete={deleteJoke} />
      ))}
    </>
  );
}

export default JokeContainer;
