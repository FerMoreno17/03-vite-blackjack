export const determinarGanador = (puntos) => {
  setTimeout(() => {
    if (puntos[puntos.length - 1] === puntos[0]) {
      alert("Empate -.-");
    } else if (puntos[0] > 21) {
      alert("Computadora gana");
    } else if (puntos[puntos.length - 1] > 21) {
      alert("Jugador gana :)");
    } else {
      alert("Computadora gana");
    }
  }, 50);
};
