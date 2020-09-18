import React from "react";
import GradCard from "./componentes/GradCard";
import "./App.css";

function App() {
  const lista = [...Array(24)].map((_, index) => <GradCard key={index} />);

  return <div className="App">{lista}</div>;
}

export default App;
