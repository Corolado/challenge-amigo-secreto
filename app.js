// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar nombres de amigos
let amigos = [];

//Funcion para ingresar nombre en el campo de texto y añardirlo al array
function agregarAmigo() {
    let nombre = document.getElementById('nombre').value;
    // validar que el nombre no este vacio
    if (nombre.trim() === '') {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(nombre);
    }
    // limpiar el campo de texto
    document.getElementById('nombre').value = '';
}