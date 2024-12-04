import React, { useEffect, useState } from "react";
import axios from "axios";

function JokeComponent() {
  const [joke, setJoke] = useState({ setup: "", delivery: "" });

  useEffect(() => {
    console.log("Mounted");
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

    return () => {
      console.log("Un Mounted");
    };
  }, []);

  return (
    <>
      <div className="joke">
        <h4>Programming Joke</h4>
        <p>{joke.setup}</p>
        <p>{joke.delivery}</p>
        <button className="joke-btn">Remove Joke</button>
      </div>
    </>
  );
}

export default JokeComponent;
