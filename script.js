// const numero_1 = document.getElementById('numero_1').value;
// const numero_2 = document.getElementById('numero_2').value;

// function suma(){
//     console.log(numero_1 + numero_2);
// }

// function resta(){
//     console.log(numero_1 - numero_2);
// }

// function multiplicar(){
//     console.log(numero_1 * numero_2);
// }

// function dividir(){
//     console.log(numero_1 / numero_2)
// }

// document.getElementById('btnOperaciones').addEventListener('click', () => {
//     suma();
//     resta();
//     multiplicar();
//     dividir();
// });

////////////////////////////////
console.log("cambio ejercicios");
////////////////////////////////

const numero_3 = 5;
const numero_4 = 10;

function suma_2() {
  console.log(numero_3 + numero_4);
}

function resta_2() {
  console.log(numero_3 - numero_4);
}

function multiplicar_2() {
  console.log(numero_3 * numero_4);
}

function dividir_2() {
  console.log(numero_3 / numero_4);
}

suma_2();
resta_2();
multiplicar_2();
dividir_2();

////////////////////////////////
console.log("cambio ejercicios");
////////////////////////////////

const numero_5 = 20;
const numero_6 = 4;

function suma_3(numA, numB) {
  console.log(numA + numB);
}

function resta_3(numA, numB) {
  console.log(numA - numB);
}

function multiplicar_3(numA, numB) {
  console.log(numA * numB);
}

function dividir_3(numA, numB) {
  console.log(numA / numB);
}

suma_3(numero_5, numero_6);
resta_3(numero_5, numero_6);
multiplicar_3(numero_5, numero_6);
dividir_3(numero_5, numero_6);

////////////////////////////////
console.log("cambio ejercicios");
////////////////////////////////

const nombre = "Alejandro";
const apellido = "Santos";

function cadena(name, apellido) {
  return "el nombre es: " + name + " " + apellido;
}

const imprimir = cadena(nombre, apellido);

console.log(imprimir);

////////////////////////////////
console.log("cambio ejercicios");
////////////////////////////////

function suma_4(numA, numB) {
  return "El resultado es: " + (numA + numB);
}
const sumaReturn = suma_4(numero_5, numero_6);
console.log(sumaReturn);

function resta_4(numA, numB) {
  return "El resultado es: " + (numA - numB);
}
const restaReturn = resta_4(numero_5, numero_6);
console.log(restaReturn);

function multiplicar_4(numA, numB) {
  return "El resultado es: " + numA * numB;
}
const multiplicarReturn = multiplicar_4(numero_5, numero_6);
console.log(multiplicarReturn);

function dividir_4(numA, numB) {
  return "El resultado es: " + numA / numB;
}
const dividirReturn = dividir_4(numero_5, numero_6);
console.log(dividirReturn);

////////////////////////////////
console.log("cambio ejercicios");
////////////////////////////////

function enviar_suma(e) {
  e.preventDefault();
  const numA = parseInt(e.target.numA.value);
  const numB = parseInt(e.target.numB.value);
  console.log(numA + numB);
}

function enviar_resta(e) {
  e.preventDefault();
  const numC = parseInt(e.target.numC.value);
  const numD = parseInt(e.target.numD.value);
  console.log(numC - numD);
}

function enviar_multiplicar(e) {
  e.preventDefault();
  const numE = parseInt(e.target.numE.value);
  const numF = parseInt(e.target.numF.value);
  console.log(numE * numF);
}

function enviar_dividir(e) {
  e.preventDefault();
  const numG = parseInt(e.target.numG.value);
  const numH = parseInt(e.target.numH.value);
  console.log(numG / numH);
}