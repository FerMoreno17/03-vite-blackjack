export const dibujarCarta = (carta, jugador, cartas_place) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `./assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  cartas_place[jugador].append(imgCarta);
};
