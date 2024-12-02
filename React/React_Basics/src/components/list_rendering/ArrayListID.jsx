import React from "react";
import ListCard from "./ListCard";

function ArrayListID() {
  const names = [
    { id: 1, name: "Dineshkumar" },
    { id: 2, name: "Divya Dineshkumar", age: 3 },
    { id: 3, name: "Darwin Divya Dinesh", occupation: "Molucular Biologist" },
  ];
  return (
    <>
      <div>
        <h2>Array with key as Index</h2>
        <section className="list-rendering">
          {names.map((person) => (
            <ListCard key={person.id} id={person.id} data={person} />
          ))}
        </section>
      </div>
    </>
  );
}

export default ArrayListID;

/*
index as key

1. static list
2. no sorting or filter
*/
