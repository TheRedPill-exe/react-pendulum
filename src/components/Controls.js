// src/components/Controls.js
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
      <div className="control-group">
        <label>Gravedad: {gravity.toFixed(2)}</label>
        <input
          type="range"
          min="0.1"
          max="1.5"
          step="0.01"
          value={gravity}
          onChange={(e) => setGravity(parseFloat(e.target.value))}
          className="slider"
        />
      </div>

      <div className="control-group">
        <label>Longitud: {length}</label>
        <input
          type="range"
          min="50"
          max="400"
          step="1"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="slider"
        />
      </div>

      <div className="control-group">
        <label>Fricción: {friction.toFixed(2)}</label>
        <input
          type="range"
          min="0.5"
          max="1"
          step="0.01"
          value={friction}
          onChange={(e) => setFriction(parseFloat(e.target.value))}
          className="slider"
        />
      </div>

      <div className="control-group">
        <label>Color del Péndulo:</label>
        <input
          type="color"
          value={pendulumColor}
          onChange={(e) => setPendulumColor(e.target.value)}
        />
      </div>

      <div className="control-group">
        <label>Color de Fondo:</label>
        <input
          type="color"
          value={setBackgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Controls;
