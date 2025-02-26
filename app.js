// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar nombres de amigos
let amigos = [];

// Función para ingresar nombre en el campo de texto y añadirlo al array
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim(); // Cambiado 'nombre' por 'amigo'

    // Validar que el nombre no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    // Validar que el nombre no se repita
    if (amigos.includes(nombre)) {
        alert('Ese nombre ya está en la lista.');
        return;
    }
    amigos.push(nombre);
    
    // Limpiar el campo de texto
    document.getElementById('amigo').value = '';
    // Actualizar la lista en pantalla
    mostrarAmigos();
}

// Función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML
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
        li.textContent = amigo; // Asigna el nombre del amigo como contenido del <li>.
        lista.appendChild(li); // Agrega el <li> a la lista en el documento HTML.
    }
}

// Función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos
function sortearAmigo() {
    // Validar que haya amigos en la lista antes de sortear
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    // Generar un índice aleatorio dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre del amigo en la posición aleatoria
    let amigoSorteado = amigos[indiceAleatorio];
    // Mostrar el nombre sorteado en el elemento HTML con id 'resultado'
    document.getElementById('resultado').innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`; // Lo envuelve en <li> para mantener la estructura de la lista
}