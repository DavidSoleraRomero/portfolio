
function saluda() {
    let nombre = document.getElementById("name").value;
    let apellidos = document.getElementById("surname").value;
    if (nombre.trim() == "" || apellidos.trim() == "") {
        alert("Introduzca un nombre y apellidos válidos");
    } else {
        alert("Hola, " + nombre + " " + apellidos);
    }
}

document.querySelector("input[type=submit]").addEventListener("click", function(event) {
    saluda();
});
