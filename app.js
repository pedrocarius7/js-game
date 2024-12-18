
let listaNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10...');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let mensagemTentativa = `Vc achou o numero secreto com ${tentativas} tentativas!`
        exibirTextoNaTela('h1', (mensagemTentativa));
        exibirTextoNaTela('p', 'Muito bem!');
        document.getElementById('reiniciar').removeAttribute
        ('disabled');
    
    } else if(chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'é menor que esse!');
    } else if(chute < numeroSecreto) {
        exibirTextoNaTela('h1', 'é maior que esse!');
    }
    tentativas++;
    limparCampo();
}

function alerta() {
    alert('eu amo js!!!');
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random() * 10 + 1);
    let quantidadeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeElementosNaLista == 10) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}