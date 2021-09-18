var jugador = {
  x: 0,
  y: 0,
  velocidad: 5,
  direccion: 1, // => 1 es derecha y -1 es izquierda
};
function moverJugadorDerecha() {
  jugador.x += jugador.velocidad;
  jugador.direccion;
}

function moverJugadorIzquierda() {
  jugador.x -= jugador.velocidad;
}
