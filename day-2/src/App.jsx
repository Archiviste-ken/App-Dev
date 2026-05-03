// import React from "react";
// import { useState, useEffect } from "react";

// const App = () => {
//   // 1 top level

//   // const [count, setCount] = useState(0);

//   // const handleIncreement = () => {
//   //   if (count != 20) setCount(count + 1);
//   // };

//   // const handleDecreement = () => {
//   //   if (count > 0) setCount(count - 1);
//   // };

//   const [darkMode, setDarkMode] = useState(false);

//   const[count,setCount] = useState(0);

//   const onToggleTheme = () => {
//     setDarkMode(!darkMode);

//     console.log(darkMode);
//   };

//   // 1. without dep array []
//   // useEffect(() => {
//   //   console.log("runs on every render");
//   // });

//   // 2. with empty dep array

//   // useEffect(()=> {
//   //     console.log("Hello from useEffect");

//   // }, [])

//   useEffect(()=> {
//     console.log("Count is updated", count);

//   },[count])

//   return (
//     <div
//       style={{
//         height: "100vh",
//         backgroundColor: darkMode ? "#121212" : "#ffff",
//         color: darkMode ? "#ffff" : "#121212",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "20px",
//       }}
//     >
//       {/* <h1>{count}</h1>
//       <button onClick={handleIncreement}> ➕ </button>
//       <button onClick={handleDecreement}> ➖ </button> */}
//       <h1> Mode {darkMode ? "Dark" : "Light"}</h1>
//       <button onClick={onToggleTheme}>Toggle Theme</button>

//       <h1>Count : {count}</h1>
//      <button onClick ={() => setCount(count + 1)}>Increment</button>
//      <button onClick ={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import GitHubProfile from "./GitHubProfile";

// const App = () => {
//   return <GitHubProfile />;
// };

// export default App;

import React from "react";

const App = () => {
  const onClick = (event) => {
    console.log(event);
  };

  return <button onClick={onClick}>App</button>;
};

export default App;
