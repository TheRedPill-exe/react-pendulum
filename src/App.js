import React, { useState } from "react";
import PendulumCanvas from "./components/PendulumCanvas";
import Controls from "./components/Controls";
import Description from "./components/Description";
import "./components/ParticleSimulator"
import "./App.css";
import ParticleSimulator from "./components/ParticleSimulator";

function App() {
  const [gravity, setGravity] = useState(0.4);
  const [length, setLength] = useState(200);
  const [friction, setFriction] = useState(0.99);
  const [pendulumColor, setPendulumColor] = useState("#ff6b6b");
  const [backgroundColor, setBackgroundColor] = useState("#1e3a8a");

  return (
    <div className="App" style={{ backgroundColor }}>
      <header className="App-header">
        <h1>Péndulo Simulado</h1>
        <p>Explora el movimiento oscilatorio de un péndulo con física realista.</p>
      </header>
      <PendulumCanvas
        gravity={gravity}
        length={length}
        friction={friction}
        pendulumColor={pendulumColor}
      />
      <Controls
        gravity={gravity}
        setGravity={setGravity}
        length={length}
        setLength={setLength}
        friction={friction}
        setFriction={setFriction}
        pendulumColor={pendulumColor}
        setPendulumColor={setPendulumColor}
        setBackgroundColor={setBackgroundColor}
      />
      <Description />
    </div>
  );
}

export default App;
