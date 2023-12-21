import { determinarGanador } from "./determinar-ganador";
import { repartirCarta } from "./pedir-carta";
import { calcularPuntos } from "./calcular-puntos";
import { dibujarCarta } from "./dibujar-carta";

export const turnoPc = (
  puntos,
  puntosMinimos,
  baraja,
  puntosHTML,
  cartas_place
) => {
  do {
    const carta = repartirCarta(baraja);
    calcularPuntos(carta, puntos.length - 1, puntos, puntosHTML);
    dibujarCarta(carta, puntos.length - 1, cartas_place);
    if (puntosMinimos > 21) {
      break;
    }
  } while (puntos[puntos.length - 1] < puntosMinimos && puntosMinimos <= 21);
  determinarGanador(puntos);
};
