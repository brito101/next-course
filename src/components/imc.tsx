"use client";

import React from "react";

export default function IMC() {
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [imc, setImc] = React.useState("");

  function handleClick() {
    const heightMeter = Number(height) / 100;
    const total = (Number(height) / (heightMeter * heightMeter)).toFixed(2);
    setImc(total);
  }

  return (
    <div>
      <label htmlFor="weight">Weight (kg)</label>
      <input
        type="text"
        id="weight"
        name="weight"
        onChange={(e) => setHeight(e.target.value)}
      />
      <label htmlFor="height">Height (cm)</label>
      <input
        type="text"
        id="height"
        name="height"
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={handleClick}>Calculate</button>
      <p>IMC: {imc}</p>
    </div>
  );
}
