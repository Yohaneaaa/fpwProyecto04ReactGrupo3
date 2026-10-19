export const generarNumeroAleatorio = () => {
  return Math.floor(Math.random() * 6) + 1;
};


export const obtenerResultado = (numeroDelDado) => {
  if (numeroDelDado === 1) {
    return "Mala suerte, sacaste 1";
  } else if (numeroDelDado >= 2 && numeroDelDado <= 5) {
    return "Buen tiro!";
  } else {
    return "¡FELICIDADES! ¡Sacaste el mayor!";
  }
}