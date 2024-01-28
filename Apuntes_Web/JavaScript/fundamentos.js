/* VARIABLES */
let variable = 1;
let presentYear = "2024";
const minAge = 18; // Variable INMUTABLE --> NO PUEDE CAMBIARSE TRAS LA DECLARACIÓN
// minAge = 12; // --> Al probar esto, se mostrará un error


// Ejemplo Hoisting ⬇
console.log(variableHoisting1);

var variableHoisting1; // Estas variables tienen reservadas un espacio en memoria al ejecutar
                      // el código y, si las leemos antes de llegar a su inicialización, se mostrará
                      // un "undefined" en vez de un error. Se debe evitar el uso de variables "var"

// console.log(variableHoisting2); --> Al probar esto, se soltará un error debido a que variableHoisting2 está con "let"

let variableHoisting2; // A diferencia de con "var", con "let" el intérprete suelta un error
                       // ya que no ha encontrado esa variable previamente declarada

/* ÁMBITOS */

/*  Tenemos varios motores que interpretan JavaScript:
    - V8 (Google)
    - Chakra (Microsoft)
    - Spider Monkey (Mozilla)
    - Core Webkit (Apple) 
    
    JavaScript se aplica en estas situaciones:
    - Web (Cliente o Servidor)
    - Escritorio (Frameworks)
    - Movilidad (Frameworks que transpilan)
    - Videojuegos (Frameworks y librerías) 
    
    Diferencia entre undefined (tipo de dato) y null (objeto):
    
    - undefined: La variable está declarada pero no se le ha asignado un valor
    - null: Se usa para indicar que la variable no tiene / deja de tener un valor */

/* TIPADO DINÁMICO */

/*  Las variables pueden cambiar de tipo; 
    se determina en tiempo de ejecución

    Podemos saber el tipo haciendo uso de "typeof"
    
    Se pueden hacer castings de esta forma:
    Number(variable) --> Transforma a número o a NaN
    Boolean(variable) --> Si hay contenido true / Sino, false (hay cadena o hay un nº diferente a 0)
    String(variable) --> Transforma el contenido a cadena
    variable = null --> Deja de haber valor
    variable = undefined
*/

let address = "Carril de las Castañetas, 36";
let price = 2.33; 
let active = false;
let sample;
let sampleNull = null;

/*
console.log(typeof address);
console.log(typeof price);
console.log(typeof active);
console.log(typeof sample);
console.log(typeof sampleNull); */

let booleanAddress = Boolean(address);
let numberAddress = Number(address);

console.log(booleanAddress);
console.log(numberAddress);




