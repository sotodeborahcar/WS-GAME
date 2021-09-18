var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false; // permite no saturar la imagen

var sprite = new Image();
sprite.src = "recursos/Main Characters/Ninja Frog/Idle (32x32).png";

// escala o scale
var proporcion_sprite = 2;

var cuadroActual = 0;

function borrarPantalla() {
  // borrar cuadrado
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujarSprite() {
  var anchoSprite = 32;
  var altoSprite = 32;

  var cuadros = sprite.width / anchoSprite;
  //   console.log(cuadros);

  ctx.save();

  ctx.scale(jugador.direccion, 1); //(eje X , eje Y )

  // si el jugador mira hacia la izquierda
  if (jugador.direccion === -1) {
    ctx.translate(-anchoSprite * proporcion_sprite, 0);
  }

  ctx.drawImage(
    sprite,
    cuadroActual * anchoSprite, // posicion X de la imagen
    0, // posicion Y de la imagen
    anchoSprite, // ancho de la imagen
    altoSprite, // alto de la imagen
    jugador.direccion * jugador.x, // posicion X del canvas
    0, // posicion Y del canvas
    anchoSprite * proporcion_sprite,
    altoSprite * proporcion_sprite
  );

  ctx.restore();

  cuadroActual++;

  // RESETEAMOS ANIMACION , y solo se muestran los cuadros que hay y vuelve a mostrarse
  if (cuadroActual >= cuadros) {
    cuadroActual = 0;
  }
}
// Bucle principal del juego:

function ejecutarBucle() {
  borrarPantalla();
  dibujarSprite();
  // bucle que se va a ejecutar muchas veces por segundo
  // console.log("ejecutandose...")

  procesarControles();

  window.requestAnimationFrame(ejecutarBucle);
}

// Requerir cuadro de animacion con =>
window.requestAnimationFrame(ejecutarBucle);
