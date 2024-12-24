let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert('O campo está vazio, digite um nome.');
        return;
    } else if (isNaN(amigo.value) === false) { 
        alert('O campo apresenta valores numéricos, digite um nome.');
        return; 
    }

    if (amigos.includes(amigo.value)) {
        alert('A lista vai apresentar nomes repetidos, informe os sobrenomes destes ou apague-os.');
        return;
    }


    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value
    }
   amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('O número mínimo de participantes deve ser 4!');
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        
        if (i == amigos.length -1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->'+ amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->'+ amigos[i + 1] + '<br>';
        }
    }
}    

function embaralha(lista) {
    
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos'). innerHTML = '';
    document.getElementById('lista-sorteio'). innerHTML = '';
}

function numeros() {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
    
}
