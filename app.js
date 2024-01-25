// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero de 1 a 10';
let listaNumeroSorteado = [];
let qtdNumerosSorteados = 10;
let numeroSecreto = GerarNumeroAletatorio();
let tentativas = 1;



function exibirTextoTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});

}
exibirMensagemInicial()

function exibirMensagemInicial(){
    exibirTextoTela('h1', 'Jogo do número Secreto');
    exibirTextoTela('p', `Escolha um número de 1 a ${qtdNumerosSorteados}` );
}


function GerarNumeroAletatorio(){
    let qtdDeElementosNaLista = listaNumeroSorteado.length
   let numeroEscolhido = parseInt(Math.random() * qtdNumerosSorteados + 1);

   if(qtdNumerosSorteados == qtdDeElementosNaLista){
    listaNumeroSorteado = [];
   }

   if (listaNumeroSorteado.includes(numeroEscolhido)){;
    return GerarNumeroAletatorio();
   }

    else{
        listaNumeroSorteado.push(numeroEscolhido);
        console.log(listaNumeroSorteado);
        return numeroEscolhido;
    }
}





function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `você acertou em ${tentativas} ${palavraTentativa}`;
    if ( chute == numeroSecreto){
        exibirTextoTela('h1', 'Parabéns! você acertou! ');
        exibirTextoTela('p', mensagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled');

    }

    else {
        if(chute > numeroSecreto){
            exibirTextoTela('p', 'O número secreto é menor');
        }
        else{
            exibirTextoTela('p', 'O número secreto é maior');
        }
    tentativas++;
    limparCampo();
    }
  

}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = GerarNumeroAletatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
