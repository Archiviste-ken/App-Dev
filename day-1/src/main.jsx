import { createRoot } from "react-dom/client";
// import React from "React"

// const h1 = React.createElement("h1", null , "Hello World! ")

// so babel converts the jsx internally the jsx in the form of above line.

let name = "shreyesh";

createRoot(document.getElementById("root")).render(
  <h1 className="h1">Hello World! {name} </h1>, // browser dont know jsx
);



// JSX IS CALLED A SYNTACTICAL SUGAR SINCE IT SHORTENS THE CODE and ensuring ease in writting code.