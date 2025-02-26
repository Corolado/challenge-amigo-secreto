// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar nombres de amigos
let amigos = [];

//Funcion para ingresar nombre en el campo de texto y añardirlo al array
function agregarAmigo() {
    let nombre = document.getElementById('nombre').value.trim();
    // validar que el nombre no este vacio
    if (nombre === '') {
        alert('Por favor, inserte un nombre');
        return;
    }
    // validar que el nombre no se repita
    if (amigos.includes(nombre)) {
        alert('Ese nombre ya está en la lista.');
        return;
    }
    amigos.push(nombre);

    // Limpiar el campo de texto
    document.getElementById('nombre').value = '';
    // Actualizar la lista en pantalla
    mostrarAmigos();
}

function mostrarAmigos() {
    // Obtiene el elemento HTML con el id 'listaAmigos', que es la lista donde se mostrarán los amigos.
    let lista = document.getElementById('listaAmigos');
    // Limpia la lista antes de agregar nuevos elementos, evitando que se dupliquen.
    lista.innerHTML = '';
    
    // Recorre el array 'amigos' para agregar cada nombre a la lista.
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i]; // Obtiene el nombre del amigo en la posición actual del array.
        // Crea un nuevo elemento <li> para agregarlo a la lista.
        let li = document.createElement('li');
        // Asigna el nombre del amigo como contenido del <li>.
        li.textContent = amigo;
        // Agrega el <li> a la lista en el documento HTML.
        lista.appendChild(li);
    }
}