/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const sticks = ["♦", "♥", "♠", "♣"];
  const colors = ["red", "black"];

  //funcion que genera un numero aleatorio entre [start,end)
  // ejemplo (4,9) .--> numeros entre 4 inlcuido y 8 incluido
  function randomRange(end, start = 0) {
    let x = Math.floor(start + Math.random() * (end - start));
    return x;
  }

  let btn = document.getElementById("change");
  btn.addEventListener("click", changeCard);

  function changeCard() {
    // se selecciona una posicion aleatoria en el arreglo de sticks
    let stick = randomRange(sticks.length);
    //accedemos a una posicion aleatoria  de colors
    let color = randomRange(colors.length);

    // se cambia el numero por una posicion aleatoria del arreglo numbers
    let cardNumber = document.getElementById("cardNumber");
    cardNumber.textContent = number[randomRange(number.length)];

    let pinta1 = document.getElementById("pinta");
    pinta1.textContent = sticks[stick];
    pinta1.style.color = colors[color];
    pinta1.style.fontSize = "60px";

    // se accede al objeto pinta 2
    let pinta2 = document.getElementById("pinta2");
    // se le asigna el mismo stick que pinta 1
    pinta2.textContent = sticks[stick];
    //efecto espejo en eje Y para la pinta2 y color
    pinta2.style.transform = "scaleY(-1)";
    pinta2.style.color = colors[color];
    pinta2.style.fontSize = "60px";
  }
  //se carga una carta aleatoria con la funcion onload
  changeCard();
};
