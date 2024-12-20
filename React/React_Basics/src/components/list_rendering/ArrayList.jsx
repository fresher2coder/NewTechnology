import React from "react";
import { v4 as random } from "uuid";
import ListCard from "./ListCard";

function ArrayList() {
  const names = [
    { name: "Dineshkumar" },
    { name: "Divya Dineshkumar", age: 3 },
    { name: "Darwin Divya Dinesh", occupation: "Molucular Biologist" },
  ];
  return (
    <>
      <div>
        <h2>Array with key as Index</h2>
        <section className="list-rendering">
          {names.map((person, index) => (
            <ListCard key={index + 1} id={index + 1} data={person} />
          ))}
        </section>
      </div>
    </>
  );
}

export default ArrayList;

/*
index as key

1. static list
2. no sorting or filter
*/
