var teclas = {
  UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39
};

console.log(teclas)

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{

switch (evento.keyCode) {
  case teclas.DOWN:
    console.log("abajo")
    break;
  case teclas.UP:
    console.log("Arriba")
    break;
    case teclas.RIGHT:
    console.log("Derecha")
    break
    case teclas.LEFT:
    console.log("Izquierda")

      break;
      default:
}
}
