import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adoopt Me!"),
    React.createElement(Pet, {
      name: "Nami",
      animal: "Dog",
      breed: "Great"
    }),
    React.createElement(Pet, {
      name: "Ember",
      animal: "Dog",
      breed: "Lab"
    }),
    React.createElement(Pet, {
      name: "Gracie",
      animal: "Cat",
      breed: "Tabby"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
