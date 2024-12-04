import React from "react";
import Sketch from "react-p5";

const PendulumCanvas = ({ gravity, length, friction, pendulumColor }) => {
  let angle = Math.PI / 4; // Ángulo inicial
  let angleVel = 0; // Velocidad angular
  let angleAcc = 0; // Aceleración angular
  const originX = 300; // Punto de origen X
  const originY = 100; // Punto de origen Y
  let ballX, ballY; // Posición de la bola

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(30);
    p5.stroke(255);
    p5.fill(pendulumColor);

    // Calcular posición de la bola
    ballX = originX + length * Math.sin(angle);
    ballY = originY + length * Math.cos(angle);

    // Dibujar cuerda y bola
    p5.line(originX, originY, ballX, ballY);
    p5.ellipse(ballX, ballY, 40, 40);

    // Física del péndulo
    angleAcc = (-1 * gravity / length) * Math.sin(angle); // Aceleración angular
    angleVel += angleAcc; // Actualizar velocidad angular
    angleVel *= friction; // Aplicar fricción
    angle += angleVel; // Actualizar ángulo
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default PendulumCanvas;
