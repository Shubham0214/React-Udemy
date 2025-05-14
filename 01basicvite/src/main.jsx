import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to Visit Google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
}

const anotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Gooogle
  </a>
);
ReactDOM.createRoot(document.getElementById("root")).render(anotherElement);
