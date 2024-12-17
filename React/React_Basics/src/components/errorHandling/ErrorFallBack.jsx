import React from "react";

function ErrorFallBack({ error }) {
  return (
    <div>
      <h4>Error: {error.message}</h4>
    </div>
  );
}

export default ErrorFallBack;
