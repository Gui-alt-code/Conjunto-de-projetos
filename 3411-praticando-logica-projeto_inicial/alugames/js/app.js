let quantidade = 0;
function numeroDeJogos() {
    console.log(`Total de jogos alugados: ${quantidade}`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagemOpaca = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    if (imagemOpaca.classList.contains('dashboard__item__img--rented')) {
        imagemOpaca.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alert('Você tem certeza dessa devolução ?');
    } else {
        imagemOpaca.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}
