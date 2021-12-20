
function validar() {

    let tipodemensaje, nombre, email, comentario

    tipodemensaje = document.getElementById("tipodemensaje").value
    nombre = document.getElementById("nombre").value
    email = document.getElementById("email").value
    comentario = document.getElementById("comentario").value

    alert(tipodemensaje+ " " + nombre + " " + email + " " + comentario)

}

