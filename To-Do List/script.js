/* JavaScript del To-Do List de David Solera Romero */

/* Obteniendo la fecha actual en español */
function obtenerFechaActual() {
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    const fecha = new Date();
    var fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
    fechaFormateada = fechaFormateada[0].toUpperCase() + fechaFormateada.substring(1);
    
    return `${fechaFormateada}`;
}

document.addEventListener("DOMContentLoaded", function() { 

    /* Validamos que el campo no se encuentre vacío */
    var entradaTarea = document.querySelector('input[name="entrada_tarea"]');
    function validaTarea() {
        var valorTarea = entradaTarea.value.trim(); // Elimina espacios en blanco por la Izq. y la Der.

        if (valorTarea === "") {
            return false; // Si está vacío devuelve falso
        }

        return true;
    }

    /* Incorporando la fecha en el HTML */
    var fecha = document.getElementById("fecha");
    fecha.innerHTML = obtenerFechaActual();

    /* Elegimos el botón */
    var boton = document.getElementById("boton");
    /* Añadimos un evento al botón de "Agregar una tarea" */
    boton.addEventListener("click", function() {
        if (validaTarea() === true) {
            alert("Campo relleno")
        } else {
            alert("Campo NO relleno")
        }
    });

});
