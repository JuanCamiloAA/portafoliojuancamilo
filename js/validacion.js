var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var nombre = document.getElementById('nombre');
var error = document.getElementById('error');
error.style.color = red;


function enviarFormulario() {
    console.log("enviando formulario...");

    var MensajesError = [];
    if (nombre.value === null || nombre.value === '') {
        MensajesError.push('Ingresar un nombre')
    }
    if (email.value === null || email.value === '') {
        MensajesError.push('Ingresar un email')
    }
    if (mensaje.value === null || mensaje.value === '') {
        MensajesError.push('Ingresar un mensaje')
    }
    error.innerHTML = MensajesError.join(', ');

    return false;
}