import React from "react";
import ReactDOM from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
