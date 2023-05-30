import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import dotenv from "dotenv";

function App() {
  const [count, setCount] = useState(0);
  console.log(import.meta.env.VITE_API_KEY);

  return (
    <>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
