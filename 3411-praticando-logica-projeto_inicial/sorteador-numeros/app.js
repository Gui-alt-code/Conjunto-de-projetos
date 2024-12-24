function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    if (de >= ate ) {
      alert('O Campo "Do número" deve ser inferior ao campo "Até o número". Verifique e digite novamente!');
      return;
    }
    let impedindoRepeticoes = ate - de;
    if (quantidade > impedindoRepeticoes) {
      alert('Os campos "Do número" e "Até o número" devem ter um intervalo que tolere o valor digitado no campo "Quantidade de Números". Tente novamente! ');
      return;
    }

    }

    let sorteados = []
    let numero;

    for (let i = 0; i < quantidade; i++) {
       numero = obterNumeroAleatório(de, ate);
      
      while (sorteados.includes(numero)) {
        numero = obterNumeroAleatório(de, ate);
        alert('Tentando obter número inédito');
      }
      
       sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
    

function obterNumeroAleatório(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');
  }
}

function reiniciar(params) {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarStatusBotao();
}