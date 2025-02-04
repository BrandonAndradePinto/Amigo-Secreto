//------------[EJERCICIO AMIGO SECRETO]------------


const listFriends = document.getElementById('listaAmigos');
const resultElement = document.getElementById('resultado');
const boton = document.getElementById('botonSortear');
let friends = [];

document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();  // Ejecuta la función cuando se presiona Enter
    }
});

function agregarAmigo(){
    let element = capitalizar(document.getElementById('amigo').value);
    if(element.trim() == ""){
        alert('Por favor, ingrese un nombre valido');
    }else if(friends.includes(element)){
        alert(`El nombre ${element}, ya esta en tu lista de amigos`);
    }else{
        friends.push(element);
        const li = document.createElement('li');
        li.textContent = element;
        listFriends.appendChild(li);
        document.getElementById('amigo').value = "";
    }
}

function capitalizar(str) {
    return str.split(' ')
             .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
             .join(' ');
}

function actualizarListaAmigos(){
    listFriends.innerHTML = "";
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        listFriends.appendChild(li);
    }); 
}

function sortearAmigo(){
    if(!Array.isArray(friends) || friends.length === 0){
        resultElement.innerHTML = 'Tu lista de amigos esta vacia';
    }else{
        const indiceAleatorio = Math.floor(Math.random() * friends.length);
        // Selecciona y guarda el amigo sorteado
        resultElement.innerHTML = 'El amigo secreto sorteado es: ' + friends[indiceAleatorio];
        //Elimina de la lista al amigo sorteado
        friends.splice(indiceAleatorio,1);
        actualizarListaAmigos();
    }
}