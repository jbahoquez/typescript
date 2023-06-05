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
//console.log('-- NUMBERS --');
const countAvengers = '123a';
const villanos = 20;

let avengers = Number(countAvengers);
console.log(avengers);
if (!isNaN(avengers)) {
  if (avengers < villanos) {
    ///console.log('Estamos en problemas');
  } else {
    //console.log('Estamos a salvo');
  }
} else {
  //console.log('Avengers es invalido');
}

//String
//console.log('-- STRING --');
const batman = 'Batman';
const linternaVerde = 'Linterna Verde';
const volcanNegro = `Heroe`;
const poder: String = 'Velocidad';
const edad: Number = 35;

//console.log('Yo soy ' + batman);
//console.log(
//  `Yo soy ${linternaVerde} y mi super poder es ${poder} y tengo ${edad} años`
//);

//any
console.log('-- ANY --');
const nombre: any = 'Jaime';

//console.log(nombre.charAt(0));

//Arreglos
//console.log('-- ARREGLOS --');
const numbers: Number[] = [1, 2, 3, 4, 5, 6];

numbers.push(7);
//console.log(numbers);

//TUPLAS
const hero: [string, number, boolean] = ['Dr Strange', 100, true];

hero[0] = 'Iroman';
hero[1] = 50;
hero[2] = false;
console.log(hero[1]);

// ENUMS
enum AudioLevel {
  min = 10,
  medium,
  max = 100,
}

const currentAudio = AudioLevel.max;
console.log(AudioLevel);
console.log(currentAudio);

//INTERFACES
interface Hero {
  name: string;
  age: number;
  poder: number[];
  func?: () => void;
  address?: Address;
}

interface Address {
  city: string;
}
let flash: Hero = {
  name: 'Barri Allen',
  age: 24,
  poder: [1, 2],
};
let superman: Hero = {
  name: 'Clark Kent',
  age: 30,
  poder: [2],
  func: () => {},
};

//VOID
function callBatman(): void {}

const call = callBatman();
console.log(call);
