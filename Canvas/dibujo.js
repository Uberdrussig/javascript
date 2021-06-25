var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoPorClick()
{

  var lineas = xxx = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "lime";
  var xi, yf;
  var xri, yrf;
  for(l = 0; l < lineas; l++)

  {
    yi = ancho / xxx * l;
    xf = ancho / xxx * (l + 1);
    dibujarlinea(colorcito, 0, yi, xf, 300);
    console.log("linea " + l)
  }

  dibujarlinea(colorcito, 1, 0, 0, ancho -1)
  dibujarlinea(colorcito, 0, ancho - 1, ancho -1, ancho - 1)


  console.log(lienzo);

}
