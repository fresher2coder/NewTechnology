import React from "react";

//if-else
// function UserDashboard({ isLoggedIn }) {
//   if (isLoggedIn) return <h1>Welcome Back!</h1>;
//   else return <h1>Please Sign IN</h1>;
// }

//Element Variable
// function UserDashboard({ isLoggedIn }) {
//   let greetMessage;
//   if (isLoggedIn) {
//     greetMessage = <h1>Welcome Back!</h1>;
//   } else {
//     greetMessage = <h1>Please Sign IN</h1>;
//   }

//   return greetMessage;
// }

// function UserDashboard({ isLoggedIn }) {
//   return (
//     <>
//       <div>
//         <h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>
//       </div>
//     </>
//   );
// }

//short circuit
function UserDashboard({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn && <h1>Welcome Back</h1>}
      {!isLoggedIn && <h2>Please Sign In</h2>}
    </>
  );
}

export default UserDashboard;
