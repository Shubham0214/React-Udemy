import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: "olive" }}
    >
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-3">
        <div className="bg-cyan-300 rounded p-5 flex justify-center gap-3">
          <button className="bg-red-500" onClick={() => changeColor("Red")}>
            Red
          </button>
          <button className="bg-green-500" onClick={() => changeColor("Green")}>
            Green
          </button>
          <button
            className="bg-yellow-500"
            onClick={() => changeColor("Yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
