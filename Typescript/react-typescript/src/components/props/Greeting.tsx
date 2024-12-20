import React from "react";

interface GreetingProps {
  name: string;
  age: number;
}

// const Greeting = ({ name, age }: GreetingProps) => {
//   return (
//     <>
//       <h1>Name: {name}</h1>
//       <h2>Age: {age}</h2>
//     </>
//   );
// };

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
    </>
  );
};

export default Greeting;
