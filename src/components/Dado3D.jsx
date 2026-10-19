import { useState, useEffect } from "react";
import "../css/Dado3D.css";

const caras = [
  { nombre: "frente", numero: 1 },
  { nombre: "atras", numero: 6 },
  { nombre: "derecha", numero: 3 },
  { nombre: "izquierda", numero: 4 },
  { nombre: "arriba", numero: 2 },
  { nombre: "abajo", numero: 5 },
];

const puntos = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 3, 6, 2, 5, 8],
};

const orientaciones = {
  1: [0, 0],
  2: [-90, 0],
  3: [0, -90],
  4: [0, 90],
  5: [90, 0],
  6: [0, 180],
};


function calcularDestino(actual, objetivo, vueltas, sentido) {
  const diferencia = (((objetivo - actual) % 360) + 360) % 360;

  if (sentido > 0) {
    return actual + diferencia + vueltas * 360;
  }

  return actual + diferencia - 360 - vueltas * 360;
}

function Dado3D({ numeroAleatorio, tiradaId }) {
  const [rotacion, setRotacion] = useState({ x: 0, y: 0 });
  const [girando, setGirando] = useState(false);

  useEffect(() => {
   
    if (tiradaId === 0) return;

    if (
      !Number.isInteger(numeroAleatorio) ||
      numeroAleatorio < 1 ||
      numeroAleatorio > 6
    ) {
      return;
    }

    const [x, y] = orientaciones[numeroAleatorio];

    const vueltasX = 2 + Math.floor(Math.random() * 3);
    const vueltasY = 2 + Math.floor(Math.random() * 3);

    const sentidoX = Math.random() < 0.5 ? -1 : 1;
    const sentidoY = Math.random() < 0.5 ? -1 : 1;

    setGirando(true);

    setRotacion((actual) => ({
      x: calcularDestino(actual.x, x, vueltasX, sentidoX),
      y: calcularDestino(actual.y, y, vueltasY, sentidoY),
    }));

    const temporizador = setTimeout(() => {
      setGirando(false);
    }, 2200);

    return () => clearTimeout(temporizador);
  }, [numeroAleatorio, tiradaId]);

  return (
    <div className="text-center">
      <div className={`escena ${girando ? "en-giro" : ""}`}>
        <div
          className="dado-3d"
          style={{
            transform: `rotateX(${rotacion.x}deg) rotateY(${rotacion.y}deg)`,
          }}
        >
          {caras.map((cara) => (
            <div key={cara.nombre} className={`cara ${cara.nombre}`}>
              {puntos[cara.numero].map((posicion) => (
                <span key={posicion} className={`punto punto-${posicion}`} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <h4>Resultado: {numeroAleatorio ?? "-"}</h4>
    </div>
  );
}

export default Dado3D;
