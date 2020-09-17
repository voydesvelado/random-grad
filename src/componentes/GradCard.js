import React from "react";

export default function GradCard() {
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  let color1 = getRandomColor();
  let color2 = getRandomColor();
  const gradient = `linear-gradient(to bottom right, ${color1}, ${color2})`;

  return (
    <div className="gradcard">
      <div
        className="grad"
        style={{
          background: gradient,
        }}
      ></div>
      <p>
        {color1} &#8594; {color2}
      </p>
      <button
        className="btn"
        onClick={() => {
          navigator.clipboard.writeText(gradient);
        }}
      >
        Copiar css
      </button>
    </div>
  );
}
