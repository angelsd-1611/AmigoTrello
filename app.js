let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.onclick = () => eliminarAmigo(index);
        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para realizar el sorteo.");
        return;
    }
    let sorteados = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let candidato;
        do {
            candidato = sorteados[Math.floor(Math.random() * sorteados.length)];
        } while (candidato === amigos[i] && sorteados.length > 1);
        
        resultado.push(`${amigos[i]} -> ${candidato}`);
        sorteados = sorteados.filter(nombre => nombre !== candidato);
    }
    
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    resultado.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listaResultado.appendChild(li);
    });
}

function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}
