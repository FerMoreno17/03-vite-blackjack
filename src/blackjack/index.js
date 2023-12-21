import { crearBaraja } from "../usecases/crear-baraja";
import { repartirCarta } from "../usecases/pedir-carta";
import { turnoPc } from "../usecases/turno-computadora";
import { dibujarCarta } from "../usecases/dibujar-carta";
import { calcularPuntos } from "../usecases/calcular-puntos";

const juego = (() => {
  "use strict";

  let baraja = [];
  const tipos = ["C", "D", "H", "S"];
  const especiales = ["A", "J", "Q", "K"];
  const pedir_carta = document.querySelector("#pedir-carta");
  const nuevo_juego = document.querySelector("#nuevo-juego");
  const detener = document.querySelector("#detener");
  const puntosHTML = document.querySelectorAll("small");
  const cartas_place = document.querySelectorAll(".divCartas");
  let puntos = [];

  detener.disabled = true;
  pedir_carta.disabled = true;

  crearBaraja(baraja);

  const iniciarJuego = (cantidad_jugadores = 2) => {
    baraja = crearBaraja(baraja);
    puntos = [];
    for (let i = 0; i < cantidad_jugadores; i++) {
      puntos.push(0);
      puntosHTML[i].innerText = 0;
      cartas_place[i].innerHTML = "";
    }
    detener.disabled = false;
    pedir_carta.disabled = false;
  };

  pedir_carta.addEventListener("click", () => {
    const carta = repartirCarta(baraja);
    calcularPuntos(carta, 0, puntos, puntosHTML);
    dibujarCarta(carta, 0, cartas_place);

    if (puntos[0] > 21) {
      pedir_carta.disabled = true;
      detener.disabled = true;
      turnoPc(puntos, puntos[0], baraja, puntosHTML, cartas_place);
    } else if (puntos[0] === 21) {
      pedir_carta.disabled = true;
      detener.disabled = true;
      turnoPc(puntos, puntos[0], baraja, puntosHTML, cartas_place);
    }
  });

  detener.addEventListener("click", () => {
    pedir_carta.disabled = true;
    detener.disabled = true;
    turnoPc(puntos, puntos[0], baraja, puntosHTML, cartas_place);
  });

  nuevo_juego.addEventListener("click", () => {
    iniciarJuego();
  });

  // return {
  //   nuevoJuego: iniciarJuego,
  // };
  return { nuevoJuego: iniciarJuego };
})();
