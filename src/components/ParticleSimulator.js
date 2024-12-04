import React from "react";
import Sketch from "react-p5";

class Particle {
  constructor(p5, x, y) {
    this.p5 = p5;
    this.position = p5.createVector(x, y);
    this.velocity = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));
    this.acceleration = p5.createVector(0, 0);
    this.size = p5.random(5, 15);
    this.lifespan = 255; // Vida de la partícula
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    this.lifespan -= 2; // Reducir vida con el tiempo
  }

  display() {
    this.p5.noStroke();
    this.p5.fill(255, this.lifespan);
    this.p5.ellipse(this.position.x, this.position.y, this.size);
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

const ParticleSimulator = () => {
  let particles = [];
  const gravity = 0.1;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 600).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);

    // Crear partículas nuevas en el centro
    if (p5.frameCount % 5 === 0) {
      particles.push(new Particle(p5, p5.width / 2, p5.height / 2));
    }

    // Actualizar y mostrar partículas
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      const gravityForce = p5.createVector(0, gravity);
      particle.applyForce(gravityForce);

      particle.update();
      particle.display();

      if (particle.isDead()) {
        particles.splice(i, 1); // Eliminar partículas "muertas"
      }
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default ParticleSimulator;
    