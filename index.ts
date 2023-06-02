// Import stylesheets
import './style.css';

// Write TypeScript code!
// const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let a: number | 'Hola';

a = 'Hola';

//Boolean

let isSuperman: boolean = true;

//Ternario
console.log('-- BOOLEAN --');
isSuperman = 1 + 1 == 2 ? false : true;

//Numbers
console.log('-- NUMBERS --');
const countAvengers = '123a';
const villanos = 20;

let avengers = Number(countAvengers);
console.log(avengers);
if (!isNaN(avengers)) {
  if (avengers < villanos) {
    console.log('Estamos en problemas');
  } else {
    console.log('Estamos a salvo');
  }
} else {
  console.log('Avengers es invalido');
}

//String
console.log('-- STRING --');
const batman = 'Batman';
const linternaVerde = 'Linterna Verde';
const volcanNegro = `Heroe`;
const poder: String = 'Velocidad';
const edad: Number = 35;

console.log('Yo soy ' + batman);
console.log(
  `Yo soy ${linternaVerde} y mi super poder es ${poder} y tengo ${edad} años`
);

//any
console.log('-- ANY --');
const nombre: any = 'Jaime';

console.log(nombre.charAt(0));


//Arreglos 
console.log('-- ARREGLOS --');
const numbers: Number[]= [1,2,3,4,5,6];

numbers.push(7);
console.log(numbers);