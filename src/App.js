import React from "react";
import GradCard from "./componentes/GradCard";
import Nav from "./componentes/Nav";
import "./App.css";

function App() {
  const lista = [...Array(24)].map((_, index) => <GradCard key={index} />);

  return (
    <>
      <Nav />
      <div className="App">{lista}</div>
    </>
  );
}

export default App;
