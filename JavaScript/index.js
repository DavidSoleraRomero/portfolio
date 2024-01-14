console.log("Hello World!");

// Constante en JavaScript

const miPrimeraConstante = 'David';

// Declarando objetos en JavaScript

let person = { // Ahora, la variable "person" contiene todos estos parámetros, como si de una clase de Java hablásemos
    name: 'David',
    age: 18,
    numberOfBrothers: 1,
    favoriteFood: 'Cheese'
}
console.log(person); // Se muestran todos sus atributos

// Para mostrarlo individualmente podemos:

    // 1. Usar la "Dot Notation" --> Pone después del punto el nombre de la variable a acceder | Menos dinámico
    console.log("Esta persona se llama " + person.name);
    console.log("Tiene " + person.age + " años\n");

    // 2. Usar la "Bracket Notation" --> Pone entre los corchetes el nombre de la variable a acceder | Más dinámico
    console.log("Esta persona se llama " + person['name']);
    console.log("Tiene " + person['age'] + " años\n");

// Por lo tanto, en tiempo de ejecución, podemos almacenar variables con el nombre de la propiedad
let selection = 'name';
console.log(person[selection] + "\n");

// Arrays (en JS son dinámicos) --> Se recorren igual que en Java --> Por índice
let arrayVacio = [];
let arrayLleno = ['red', 'blue'];
arrayLleno[2] = 'green';

// Función
function saludo(nombre) {
    console.log("Hola, " + nombre + "\n");
}

saludo('David');

// Función con return
function cuadrado(numero) {
    return numero * numero;
}

console.log(cuadrado(10));