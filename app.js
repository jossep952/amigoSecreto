let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    if(!nombreAmigo) {
        alert('Debes escribir un nombre');
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    mostrarAmigos();

}
function mostrarAmigos() {
let listaAmigos = document.getElementById('listaAmigos');
listaAmigos.innerHTML = '';
for(let i = 0; i < amigo.length; i++) {
    let item = document.createElement('li');
    item.textContent = amigo[i];
    listaAmigos.appendChild(item);
}
    
}
function sortearAmigo() {
    if (amigo.length ===0) {
        alert('no tienes amigos para sortear');
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  `El amigo sorteado es: ${amigoSorteado}`;
    
    

}