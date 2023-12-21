import { valorCarta } from "./valor-carta";

export const calcularPuntos = (carta, jugador, puntos, puntosHTML) => {
  puntos[jugador] = puntos[jugador] + valorCarta(carta);
  puntosHTML[jugador].innerText = puntos[jugador];
  return puntos[jugador];
};
