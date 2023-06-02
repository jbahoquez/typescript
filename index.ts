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
isSuperman = 1 + 1 == 2 ? false : true;

//Numbers
const countAvengers = '123a';
const villanos = 20;

let avengers = Number(countAvengers);
console.log(avengers);
if (avengers < villanos) {
  console.log('Estamos en problemas');
} else {
  console.log('Estamos a salvo');
}
