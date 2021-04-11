import React from "react";
import { render } from "react-dom";
import Pet from "./components/pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Lucky", animal: "Cat", breed: "Tabby" }),
    React.createElement(Pet, { name: "Tina", animal: "Cat", breed: "Black" }),
    React.createElement(Pet, {
      name: "Kirby",
      animal: "Dog",
      breed: "Miniature Schnauzer",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
