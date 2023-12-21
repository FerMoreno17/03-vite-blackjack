export const repartirCarta = (baraja) => {
  let carta;
  if (baraja.length != 0) {
    carta = baraja.shift();
  } else {
    alert("no hay mas cartas");
  }
  return carta;
};
