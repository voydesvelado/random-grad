import React from "react";
import GradCard from "./componentes/GradCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      {[...Array(12)].map((_, index) => (
        <GradCard />
      ))}
    </div>
  );
}

export default App;
