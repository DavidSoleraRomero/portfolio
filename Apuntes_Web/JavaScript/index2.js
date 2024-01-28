// Zona de mensajes

//alert('¡Esto es una "alert" de JavaScript!')
console.log('Mensaje de log de la consola (console.log)')
console.info('Mensaje de información (console.info)')
console.error('Mensaje de error (console.error)')
console.warn('Mensaje de warning (console.warn)')

// Zona de depuración
//---------------------------------------------------------------------------------------------------
// debugger // El debugger es utilizado para hacer una depuración de código en la página web
// console.log('Log después de hacer uso de debugger')
//---------------------------------------------------------------------------------------------------
// Zona de variables
//---------------------------------------------------------------------------------------------------
// const // Variables que durante la ejecución de nuestra página no van a cambiar de valor
//---------------------------------------------------------------------------------------------------
// let // Variables que pueden cambiar de valor durante la ejecución
//     // pero deben ser leídas para poder ser utilizadas
// var // Variables que pueden cambiar de valor durante la ejecución
//     // y pueden no haber sido leídas antes para ser utilizadas, pero saldrán como "undefined"
//---------------------------------------------------------------------------------------------------
// Variable global (se puede utilizar en cualquier momento)

const NOMBRE = 'David';
let primerapellido = 'Solera';
var segundoapellido = 'Romero';

// En este caso 'NOMBRE' daría fallo y no cambiaría el nombre al ser
// una variable const, que no puede ser modificada en la ejecución
// NOMBRE = 'Juan';
primerapellido = 'Sanchez';
segundoapellido = 'Carricondo';

// Variables locales (se define dentro de una condición)
if (true) {
    var condicion = "Hello World!"
    console.log(condicion)
}    

function juan()  {
    let condicion = "Bye World!"
    console.log(condicion)
}
//---------------------------------------------------------------------------------------------------

// Operaciones
// + Suma
console.log(2 + 2)
// - Resta
console.log(4 - 2)
// / División
console.log(6 / 2)
// * Multiplicación
console.log(3 * 2)
// < Menor que
console.log(10 < 20)
// > Mayor que
console.log(40 > 20)
// <= Menor o igual que
console.log(20 <= 21)
// >= Mayor o igual que
console.log (41 >= 40)
// == o === Igual que (el triple igual también identifica que sean del mismo tipo de variable mientras que el doble no lo hace)
console.log(20 === '20')
console.log(20 == 20)
// != No es igual que
console.log(30 != 20) 

// typeof / Tipo de variable que se está utilizando
 let num = 20
console.log(typeof num)
// NaN / Variable con número y texto
const notnum = 2 + 'pepe';
console.log(typeof notnum)
// isNaN() / Comprobación de que la variable no es un número
console.log(isNaN(NaN))
console.log(isNaN(num))
console.log(isNaN(notnum))
console.log(isNaN('pepe'))
// toString() / Cambiar variable a string
let numero = 100.1676
console.log(typeof numero)
console.log(typeof numero.toString())
// .toFixed() / Mostrar o redondear decimales de una variable
console.log(numero.toFixed(3)) 

// Ejercicio práctico 1
// Una cena en la que hay que pagar 102€ y se reparten entre 6 personas

const TOTALL = 102
let PERSONAS = 6
let TOTAL_PERSONA = TOTALL / PERSONAS
console.log(TOTAL_PERSONA)

// Ejercicio práctico 2
// Carrito de la compra donde hay varios productos que sumar
// Aplicar 10% de descuento por ser su primera compra

const MOVIL = 300;
const CASCOS = 30;
const FUNDA = 10;
let DESCUENTO = 0.1;
let TOTALLL = (MOVIL + CASCOS + FUNDA);
let SUBTOTAL = (TOTALLL * DESCUENTO);
let TOTAL_COMPRA = (TOTALLL - SUBTOTAL);
console.log(TOTAL_COMPRA);

// Strings
// Concatenar texto // Con '+'
console.log('Hello ' + 'World')
// template literals // Para no concatenar con el más utilizar ${variable}
const name = 'Juana'
console.log(`Hello ${name}`)
// typeof // Tipo de variable
console.log(typeof name)
// .length // Longitud
console.log(name.length)
// .includes() // Comprobar si incluye el texto indicado
console.log(name.includes('Ju'))
console.log(name.includes('Cr'))
// .slice(start, end) // Cortar el texto en los caracteres indicados
console.log(name.slice(0,3))
// .replace('este texto', 'por este otro') // 
console.log(name.replace('ana', 'an'))
console.log(name.replace('Ju', 'Jinc'))
// .trim() // Limpia los valores de espacio y extraños que se encuentren
// ------- // al principio y final de la entrada de texto (no limpia los de por medio)
const prueba = '     Pero     esto no sé  por qué   ocurre   '
console.log(prueba.trim())
// .split(´,´) // Nos separa el texto según el separador que le indiquemos
// ----------- // (como si fuese un cut de Linux) y nos otorga un Array
const separacion = 'Calle Gallón, 3, 2ª planta'
console.log(separacion.split(','))

// Ejercicio práctico 1
// Texto de una newsletter donde dan unas variables dinámicas que vienen del usuario
// Usamos comillas invertidas "`" para introducir variables en un texto
const Nombre = 'David'
const Juego = 'Red Dead Redemption 2'
const Descuento = 20
const newsletter = `Hola ${Nombre}
Como regalo de bienvenida te vamos a
ofrecer un descuento del ${Descuento}%
en el videojuego ${Juego}
Disfrútalo, un saludo.`
// Con querySelector accedemos a todos los nodos, y seleccionamos la clase <p></p> que hemos
// creado al inicio del HTML y le ponemos como .innerHTML la variable con el contenido deseado
document.querySelector('.newsletter-text').innerHTML = newsletter

// Booleanos
// Admite "true" y "false"
// Nos ayuda a detectar estados dentro de la aplicación, básicamente hace comprobaciones
// Aclaración: "Boolean()" es un objeto
// Para crear simplemente un booleano, podemos hacer esto:
let ejemplobooleano = true;
let booleanoejemplo = false;

// Valores que nos devuelven "true"
console.log(Boolean(1))
console.log(Boolean('Juan'))
console.log(Boolean(3.14))
console.log(Boolean(100 > 5))
console.log(Boolean(1 < 100))
console.log(Boolean('1' == 1))

// Valores que nos devuelven "false"
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(""))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean('1' === 1))

// Ejercicio práctico 1
// Mostrar una información al usuario dependiendo si está logeado o no
// Si está conectado: "Haz click aquí para ver el artículo"
// Si no está conectado: "Debes registrate para leer este artículo"

const USER_LOGGED = false;
let TEXTO = document.querySelector('.bloque-texto')
if (USER_LOGGED == true) {
    TEXTO.innerHTML = "Haz click aquí para ver el contenido."
} else {
    TEXTO.innerHTML = "Debes registrate para leer este artículo."
}

// Lo que hacemos con lo de arriba es crear una variable diciendo que no está logeado (o que lo está)
// para luego utilizar un bloque de texto creado arriba en un <p></p> (bloque-texto) con el selector document.querySelector
// Dentro de un if indicamos que si está logeado, cambie la variable (que se hace así: variable.innerHTML) y hacemos
// que muestre lo que queremos que se vea por pantalla
// Hacemos lo mismo con el else, ponemos lo que se muestre en caso de que no esté logeado
// Tenemos una solución más fácil aquí |
var usuarioLogueado = false;

if (usuarioLogueado == true) {
    document.write('<p>Haz clic aquí para ver el contenido.</p>');
} else {
    document.write('<p>Debes registrarte para leer este artículo.</p>');
}

// Creamos una variable igual que antes y directamente en el if, si es true, crea el <p></p>
// y si es el caso de que no es true, lo crea en el else
// document.write sirve para escribir en el documento. Ambas soluciones son válidas.

// Null y Undefined

// undefined es de tipo undefined
// undefined quiere decir que hay una ausencia de valor (aún así puede que la variable esté definida)
console.log(a)
var a = 'Variable de prueba' // También sirven las variables let (solo que nos soltará un error directamente si trata de leerla antes)  
console.log(a)

// null es de tipo objeto
// null quiere decir que la variable está definida pero que su valor es nulo
console.log(c)
var c = null
console.log(c)

// Funciones
// Las funciones son tareas que tienen cumplen 1 o más objetivos y en ellas se crea un nuevo entorno
// Podemos utilizar variables globales aquí y las locales que definamos que este entorno
function sayHello() {
    document.write('<p>¡Sean todos bienvenidos!</p>')
}
sayHello()

var num1 = 30;
var num2 = 21;
function suma() {
    document.write(num1 + num2)
}
suma()
// Definimos la función y luego la ejecutamos así: nombreFuncion()

// Parámetros
// Pueden ser recibidos aunque no es obligatorio
// Puedes poner todos los parámetros que quieras
// Puedes usarlo tantas veces como quieras para obtener diferentes resultados
function sum(a, b, c, d) {
    console.log(a + b)
}
sum(num1, num2)
sum(7, 9)

// Podemos hacer que diga algo por defecto y si se le introduce un parámetro lo reemplaza como en este caso
function hola(name = 'World') {
    console.log('Hello ' + name)
}
hola('Juan')
hola()

// Retorno de valor
function retorno(name = 'World') {
    return `Hello ${name}`;
}
console.log(retorno('David'))
console.log(retorno())

// Funciones anónimas
// No tienen nombre y pueden ser asociadas a una variable
var sayhello = function(name = 'World') {
    return `Hello ${name}`
}
console.log(sayhello('Pepe'))
console.log(sayhello())

// Funciones flechas / arrow
// No tienen nombre con una sintaxis reducida. También se asocian a variables
const masaje = 'Texto de ejemplo';
var anonima = (name) => `Hello ${name}` // De esta forma ya hemos creado la función arrow
var anonymous = (name) => {
    
    return `Bye ${name}`
} // Función arrow usando el return y corchetes (si se necesitan más líneas de código)

console.log(anonima('Pedro'))
console.log(anonymous('Rubén'))

// Aplicar lógica con JavaScript (visto de varias formas) (podemos utilizar diagramas para entender la lógica mejor)
// Quiero irme de viaje - ¿Puedo? + Sí, lo hago - No, ahorraré más
// Condicionales (if, else if, else)
// Comparar con ==, ===, &&, ||
const VUELO = 200;
const HOTEL = 50;
const TOUR = 40;
let TOTAL = VUELO + HOTEL + TOUR;
let PRESUPUESTO = 190;

if (PRESUPUESTO > TOTAL) {
    console.log('Puedo irme de viaje')
} else if (PRESUPUESTO === TOTAL) {
    console.log('Voy justo de dinero, tengo un presupuesto ajustado')
} else {
    console.log('No puedo irme de viaje, tengo que ahorrar')
}

// Operadores ternarios (podemos usarlo cuando tenemos 2 posibles soluciones)
// Comprueban una condición y dan una respuesta o bien positiva o bien negativa
// (Reutilizo variables anteriores)
const TERNARIO = PRESUPUESTO >= TOTAL 
    ? console.log('Sí, me voy de viaje') // ? Respuesta positiva
    : console.log('No, no me voy de viaje') // Respuesta negativa
