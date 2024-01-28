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
    
    // Obtener el contadorId actual desde localStorage o establecerlo en 0 si no existe
    var contadorId = parseInt(localStorage.getItem('contadorId')) || 0;

    // Función para pintar las tareas almacenadas al cargar la página
    function pintarTareasAlCargar() {
        var tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || {};
    
        // Obtener el contenedor de tareas
        var unorderderList = document.querySelector("#tareas");
    
        // Limpiar el contenedor antes de agregar las tareas
        unorderderList.innerHTML = "";

        // Iterar sobre las tareas y agregarlas al contenedor
        Object.keys(tareasGuardadas).forEach(function (tareaId) {
            var listElement = document.createElement("li");
            listElement.id = tareaId;

             // Parsear el HTML de la tarea
            var parser = new DOMParser();
            var doc = parser.parseFromString(tareasGuardadas[tareaId], "text/html");

            // Acceder a la clase
            var claseTarea = doc.body.firstChild.classList[0]; // Solo hay una clase
            listElement.classList.add(claseTarea); // Añadir la clase al nuevo elemento li
            
            // Agregar ícono fa-square
            var iconoCheck = document.createElement("i");
            if (claseTarea === 'tarea') {
                iconoCheck.classList.add("fa", "fa-square");
            } else {
                iconoCheck.classList.add("fa", "fa-check-square");
            }
            listElement.appendChild(iconoCheck);
        
            // Obtener y agregar el texto de la tarea
            var spanElement = document.createElement("span");
            spanElement.innerHTML = tareasGuardadas[tareaId];
            spanElement.textContent = spanElement.textContent;
            listElement.appendChild(spanElement);
        
            // Agregar ícono fa-trash
            var iconoBorrar = document.createElement("i");
            iconoBorrar.classList.add("fa", "fa-trash");
            listElement.appendChild(iconoBorrar);
        
            unorderderList.appendChild(listElement);
        });
    }

    function limpiarTareasDelDOM() {
        var contenedorTareas = document.querySelector("#tareas");
        contenedorTareas.innerHTML = "";
    }

    // Llamar a la función al cargar la página
    pintarTareasAlCargar();

    // Función para eliminar una tarea de localStorage
    function eliminarTareaDeLocalStorage(tareaId) {
        var tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || {};

        // Verificar si la tarea existe en localStorage
        if (tareasGuardadas.hasOwnProperty(tareaId)) {
            // Eliminar la tarea del objeto
            delete tareasGuardadas[tareaId];

            // Actualizar localStorage
            localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
        }
    }

    /* Eliminamos la tarea correspondiente 
    Utiliza el contenedor común de tareas (ID "tareas"). Es decir, el UL que agrupa todos los LI */
    var contenedorTareas = document.getElementById("tareas");

    contenedorTareas.addEventListener("click", function(event) {
        // Verifica si el clic ocurrió en la clase "fa-trash"
        var tarea = event.target.closest("li");
        if (event.target.classList.contains("fa-trash")) {
            tarea.remove();
            // Eliminar la tarea de localStorage
            eliminarTareaDeLocalStorage(tarea.id);
            // Limpiar todas las tareas actuales del DOM
            limpiarTareasDelDOM();
            pintarTareasAlCargar();
        }
        // Verifica si el clic ocurrió en la clase "fa-square"
        else if (event.target.classList.contains("fa-square"))  {
            var checked = event.target;
            checked.classList.remove("fa-square");
            checked.classList.add("fa-check-square");
            tarea.classList.remove("tarea");
            tarea.classList.add("tareachecked");
            eliminarTareaDeLocalStorage(tarea.id);
            almacenarTareaEnLocalStorage(tarea.id, tarea.outerHTML);
        }
        // Verifica si el clic ocurrió en la clase "fa-check-square"
        else if (event.target.classList.contains("fa-check-square"))  {
            var checked = event.target;
            checked.classList.remove("fa-check-square");
            checked.classList.add("fa-square");
            tarea.classList.remove("tareachecked");
            tarea.classList.add("tarea");
            almacenarTareaEnLocalStorage(tarea.id, tarea.outerHTML);
        }
    });

    /* Validamos que el campo no se encuentre vacío */
    function validaTarea() {
        var entradaTarea = document.querySelector('input[name="entrada_tarea"]');
        var valorTarea = entradaTarea.value.trim(); // Elimina espacios en blanco por la Izq. y la Der.

        return valorTarea !== "";
    }

    // Función para almacenar una tarea completa en localStorage
    function almacenarTareaEnLocalStorage(id, tareaHTML) {
        var tareasGuardadas = JSON.parse(localStorage.getItem('tareas'))  || {};
        tareasGuardadas[id] = tareaHTML;
        localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
    }

    /* Si valida correctamente, llamamos a creaTarea */
    function creaTarea() {
        var listElement = document.createElement("li");
        listElement.id = "tarea" + contadorId++;
        // Almacenar el contadorId actualizado en localStorage
        localStorage.setItem('contadorId', contadorId.toString());
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

         // Almacena la tarea completa en localStorage
        almacenarTareaEnLocalStorage(listElement.id, listElement.outerHTML);
    }

    /* Elegimos el botón */
    var boton = document.getElementById("boton");
    /* Añadimos un evento al botón de "Agregar una tarea" */
    boton.addEventListener("click", function() {
        var tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || {};
        var idsTareas = Object.keys(tareasGuardadas);
        if (validaTarea() === true && idsTareas.length < 9) {
            creaTarea();
        } else if (validaTarea() === true) {
            alert("Complete alguna tarea, por favor");
        } else {
            alert("Ingrese alguna tarea, por favor");
        }
    });

});
