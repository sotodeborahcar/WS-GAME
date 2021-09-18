// necesitamos 3 controles :
// 😀 MOVER DERECHA
// 😃 MOVER IZQUIERDA
// 😄 SALTAR
// 😆 ENTER

var Tecla = {
  Derecha: false,
  Izquierda: false,
  Salto: false,
};

function procesarControles() {
  if (Tecla.Derecha) {
    moverJugadorDerecha();
  } else if (Tecla.Izquierda) {
    moverJugadorIzquierda();
  }
}

// CUANDO SE APRIETA UNA TECLA:

document.addEventListener("keydown", function (event) {
  // chequeamos que la tecla se aprieta y la guardamos
  //   console.log("tecla apretada", e.code);
  switch (event.code) {
    case "KeyA":
      Tecla.Izquierda = true;
      break;
    case "KeyD":
      Tecla.Derecha = true;
      break;
    case "KeyW":
      Tecla.Salto = true;
      break;
  }
});
document.addEventListener("keyup", function (event) {
  switch (event.code) {
    case "KeyA":
      Tecla.Izquierda = false;
      break;
    case "KeyD":
      Tecla.Derecha = false;
      break;
    case "KeyW":
      Tecla.Salto = false;
      break;
  }
  //   console.log("tecla soltada", e.code);
});
