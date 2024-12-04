import React from "react";

const Description = () => {
  return (
    <div className="description">
      <h2>¿Cómo funciona el péndulo?</h2>
      <p>
        Un péndulo simple es un modelo idealizado donde una masa (la bola) está
        suspendida de una cuerda inextensible y sin masa. La física detrás del
        movimiento oscilatorio se basa en la fuerza de gravedad y la longitud de
        la cuerda.
      </p>
      <ul>
        <li>
          <strong>Gravedad:</strong> La fuerza que tira de la masa hacia abajo.
        </li>
        <li>
          <strong>Longitud de la cuerda:</strong> Influye directamente en la
          aceleración angular.
        </li>
        <li>
          <strong>Fricción:</strong> Simula la pérdida de energía en cada
          oscilación.
        </li>
      </ul>
      <p>
        Ecuaciones principales:
        <br />
        <br />
        Velocidad angular: \(\omega += \alpha\)
        <br />
        Ángulo: \(\theta += \omega\)
      </p>
    </div>
  );
};

export default Description;
