import React, { useEffect, useState } from "react";
import axios from "axios";

function JokeComponent({ id, onDelete }) {
  const [joke, setJoke] = useState({ setup: "", delivery: "" });

  const fetchJoke = () => {
    axios
      .get("https://v2.jokeapi.dev/joke/Programming")
      .then((response) => {
        const data = response.data;
        const setup = data.setup ? data.setup : "no setup available";
        const delivery = data.delivery
          ? data.delivery
          : "no delivery available";

        setJoke({ setup, delivery });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("Mounted");
    fetchJoke();
    let updateJoke = setInterval(() => {
      fetchJoke();
    }, 5000);
    return () => {
      console.log("Un Mounted");
      clearInterval(updateJoke);
    };
  }, []);

  return (
    <>
      <div className="joke">
        <h4>Programming Joke</h4>
        <p>{joke.setup}</p>
        <p>{joke.delivery}</p>
        <button
          className="joke-btn"
          onClick={() => {
            onDelete(id);
          }}
        >
          Remove Joke
        </button>
      </div>
    </>
  );
}

export default JokeComponent;
