import React from "react";

function ListCard({ id, data }) {
  return (
    <>
      <div className="list-card">
        <h3>Id: {id}</h3>
        <p>Name: {data.name}</p>
        {data.age && <p>Age: {data.age}</p>}
        {data.occupation && <p>Occuputation: {data.occupation}</p>}
      </div>
    </>
  );
}

export default ListCard;
