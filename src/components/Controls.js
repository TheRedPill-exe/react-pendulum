import React from "react";

const Controls = ({
  gravity,
  setGravity,
  length,
  setLength,
  friction,
  setFriction,
  pendulumColor,
  setPendulumColor,
  setBackgroundColor,
}) => {
  return (
    <div className="controls">
      <h2>Controles</h2>
      <label>
        Gravedad:
        <input
          type="range"
          min="0.1"
          max="2"
          step="0.1"
          value={gravity}
          onChange={(e) => setGravity(parseFloat(e.target.value))}
        />
      </label>
      <label>
        Longitud:
        <input
          type="range"
          min="100"
          max="300"
          step="10"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </label>
      <label>
        Fricción:
        <input
          type="range"
          min="0.9"
          max="1"
          step="0.01"
          value={friction}
          onChange={(e) => setFriction(parseFloat(e.target.value))}
        />
      </label>
      <label>
        Color del péndulo:
        <input
          type="color"
          value={pendulumColor}
          onChange={(e) => setPendulumColor(e.target.value)}
        />
      </label>
      <label>
        Color de fondo:
        <input
          type="color"
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Controls;
