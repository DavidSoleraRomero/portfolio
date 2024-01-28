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
