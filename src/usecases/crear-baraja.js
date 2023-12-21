import underscore from "underscore";

const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

export const crearBaraja = (baraja) => {
  baraja = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      baraja.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let especial of especiales) {
      baraja.push(especial + tipo);
    }
  }
  return underscore.shuffle(baraja);
};
