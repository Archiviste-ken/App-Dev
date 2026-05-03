import React from "react";
import { useState } from "react";

const App = () => {
  // 1 top level

  // const [count, setCount] = useState(0);

  // const handleIncreement = () => {
  //   if (count != 20) setCount(count + 1);
  // };

  // const handleDecreement = () => {
  //   if (count > 0) setCount(count - 1);
  // };

  const [darkMode, setDarkMode] = useState(false);

  const onToggleTheme = () => {
    setDarkMode(!darkMode);

    console.log(darkMode);
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: darkMode ? "#121212" : "#ffff",
        color: darkMode ? "#ffff" : "#121212",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {/* <h1>{count}</h1>
      <button onClick={handleIncreement}> ➕ </button>
      <button onClick={handleDecreement}> ➖ </button> */}
      <h1> Mode {darkMode ? "Dark" : "Light"}</h1>
      <button onClick={onToggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
