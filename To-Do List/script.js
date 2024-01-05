/* JavaScript del To-Do List de David Solera Romero */

/* Obteniendo la fecha actual en español */
function obtenerFechaActual() {
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    const fecha = new Date();
    var fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
    fechaFormateada = fechaFormateada[0].toUpperCase() + fechaFormateada.substring(1);
    
    return `${fechaFormateada}`;
}

/* Incorporando la fecha en el HTML */
var fecha = document.getElementById("fecha");
fecha.innerHTML = obtenerFechaActual();

document.addEventListener("DOMContentLoaded", function() {
    
    var contadorId = 0;

    /* Eliminamos la tarea correspondiente 
    Utiliza el contenedor común de tareas (ID "tareas"). Es decir, el UL que agrupa todos los LI */
    var contenedorTareas = document.getElementById("tareas");

    contenedorTareas.addEventListener("click", function(event) {
        // Verifica si el clic ocurrió en la clase "fa-trash"
        if (event.target.classList.contains("fa-trash")) {
            var tarea = event.target.closest("li");
            tarea.remove();
        }
        // Verifica si el clic ocurrió en la clase "fa-square"
        else if (event.target.classList.contains("fa-square"))  {
            var checked = event.target;
            checked.classList.remove("fa-square");
            checked.classList.add("fa-check-square");
        }
        // Verifica si el clic ocurrió en la clase "fa-check-square"
        else if (event.target.classList.contains("fa-check-square"))  {
            var checked = event.target;
            checked.classList.remove("fa-check-square");
            checked.classList.add("fa-square");
        }
    });

    /* Validamos que el campo no se encuentre vacío */
    function validaTarea() {
        var entradaTarea = document.querySelector('input[name="entrada_tarea"]');
        var valorTarea = entradaTarea.value.trim(); // Elimina espacios en blanco por la Izq. y la Der.

        return valorTarea !== "";
    }

    /* Si valida correctamente, llamamos a creaTarea */
    function creaTarea() {
        var listElement = document.createElement("li");
        listElement.id = "tarea" + contadorId++;
        listElement.classList.add("tarea");

        var iconoCheck = document.createElement("i");
        iconoCheck.classList.add("fa", "fa-square");
        listElement.appendChild(iconoCheck);

        var entradaTarea = document.querySelector('input');
        var etiquetaSpan = document.createElement("span");
        etiquetaSpan.textContent = entradaTarea.value;
        listElement.appendChild(etiquetaSpan);
        entradaTarea.value = "";

        var iconoBorrar = document.createElement("i");
        iconoBorrar.classList.add("fa", "fa-trash");
        listElement.appendChild(iconoBorrar);

        var unorderderList = document.querySelector("#tareas");
        unorderderList.appendChild(listElement);
    }

    /* Elegimos el botón */
    var boton = document.getElementById("boton");
    /* Añadimos un evento al botón de "Agregar una tarea" */
    boton.addEventListener("click", function() {
        if (validaTarea() === true) {
            creaTarea();
        } else {
            alert("Ingrese una tarea, por favor");
        }
    });

});
