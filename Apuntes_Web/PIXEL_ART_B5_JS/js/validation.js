/* Validación de JS para formulario de Contacto
   Para el archivo index.html en PIXEL_ART_B5_JS */

function estaRelleno(id) {
    if ((id == "" | id == null | id.replace(/\s/g, "") == "")) {
        return false;
    }
    return true;
}

function validaComments() {
    let id = document.getElementById("floatingTextarea").value
    if (id == "" | id == null | id.replace(/\s/g, "") == "") {
        document.getElementById("commentsHelp").style.visibility="visible";
        return false;
    }
    document.getElementById("commentsHelp").style.visibility="hidden";
    return true;
}

function validaCheckbox() {
    let id = document.getElementById("exampleCheck1"); 
    if (id.checked) {
        document.getElementById("checkHelp").style.visibility="visible";
        return true;
    }
    document.getElementById("checkHelp").style.visibility="visible";
    return false;
}

function validaSelect() {
    let id = document.getElementById("motivo").value;
    if (id == 0) {
        document.getElementById("motivoHelp").style.visibility="visible";
        return false;
    }
    document.getElementById("motivoHelp").style.visibility="hidden";
    return true;
}

function validaEmail() {
    let id = document.getElementById("exampleInputEmail1").value;
    if (id == "" | id == null | id.replace(/\s/g, "") == "") {
        document.getElementById("emailHelp").style.visibility="visible";
        return false;
    }
    document.getElementById("emailHelp").style.visibility="hidden";
    return true;
}

function validaApellidos() {
    let id = document.getElementById("surnames").value;
    if (id == "" | id == null | id.replace(/\s/g, "") == "") {
        document.getElementById("surnamesHelp").style.visibility="visible";
        return false;
    }
    document.getElementById("surnamesHelp").style.visibility="hidden";
    return true;
}

function validaPassword() {
    let id = document.getElementById('exampleInputpassword1').value;
    if (id = "" | id == null | id.replace(/\s/g, "") == "") {
        document.getElementById("passwordHelp").style.visibility="visible";
        return false;
    }
    if (id.length < 8 || id.length > 15 || ! /[a-zñ]/.test(id) || ! /[A-ZÑ]/.test(id) || ! /[^a-zA-ZñÑ0-9]/.test(id)) {
        document.getElementById("passwordHelp").style.visibility="visible";
        return false;
    }
    document.getElementById("passwordHelp").style.visibility="hidden";
    return true;
}

function validaNombre() {
    let id = document.getElementById("name").value;
    if (id == "" | id == null | id.replace(/\s/g, "") == "")  {
        document.getElementById("nameHelp").style.visibility="visible";
        return false;
    }
    document.getElementById("nameHelp").style.visibility="hidden";
    return true;
}

function validacion() {
    if (validaNombre() && validaApellidos() && validaEmail()&& validaPassword() && validaComments() && validaSelect() && validaCheckbox()) {
        return true;
    } else {
        alert("Rellene todos los campos indicados.");
        return false;
    }
}