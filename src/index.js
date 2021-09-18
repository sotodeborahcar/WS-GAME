var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// x => poscision en el eje X (horizontal)
// y => posicion en el eje Y (vertical)
// ancho => w
// alto => h

// PARA USAR IMAGENES HAY QUE CREARLAS

var imagen = new Image();
imagen.src = "src/mario.jpeg";
imagen.width = 1200;
imagen.height = 675;
imagen.onload = function () {
  // void ctx.drawImage( image, sx,sy, swidth, sheigth, x_en_canvas, y_en_canvas, ancho_en_canvas, alto_en_canvas)
  ctx.drawImage(imagen, 0, 0, 600, 600, 100, 100, 800, 800);
};

// scale => agranda o achica
// ctx.scale(1, 1);

// // translate => translada
// ctx.translate(200, 200);

// // ctx.save(); => guarda

// ctx.fillStyle = "red"; // HEX, CSS
// ctx.fillRect(100, 100, 100, 100);

// ctx.scale(0.5, 1);

// ctx.fillStyle = "blue"; // HEX, CSS
// ctx.fillRect(300, 300, 100, 100);

// JAVA 2D API
