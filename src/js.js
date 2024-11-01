/*
****Criando o Visual do Jogo de Adivinhar
** Passos:
* Passo 01 - Remover Prompt's



*/

// Função para criar Jogodores

let alterarNomeJogador01 = document.getElementById('js-nome-jogador01');
let alterarNomeJogador02 = document.getElementById('js-nome-jogador02');
let modalPartida = document.getElementById("js-modal-partida"); //Fundo do Dialog
let abrirModal = document.getElementById("js-modal-iniciar-partida"); //Tag Dialog
let numeroMaximo = document.getElementById("js-numero-maximo");
let numeroMinino = document.getElementById("js-numero-minimo");
let botaoJogarJog01 = document.getElementById("js-botao-jog01");
let botaoJogarJog02 = document.getElementById("js-botao-jog02");
let jogadasAnterioresJog01 = document.getElementById("js-numeros-anteriores-01");
let jogadasAnterioresJog02 = document.getElementById("js-numeros-anteriores-02");
let placarVitoriaJog01 = document.getElementById("js-placar-jog01");
let placarVitoriaJog02 = document.getElementById("js-placar-jog02");
let nomeJogador01, nomeJogador02
let numeroAleatorio = 0
let menorNumero = 0
let maiorNumero = 0

function geradorNumeroAleatorio(numeroMaximo) {
    console.log(numeroMaximo)
    numeroAleatorio = Math.floor(Math.random() * parseInt(numeroMaximo)) + 1
    maiorNumero = parseFloat(numeroMaximo);
    console.log(numeroAleatorio);
    return numeroAleatorio
}

function criarJogador (receberNomeJogador01,receberNomeJogador02, receberNumeroMaximo, event) {
    event.preventDefault();
    alterarNomeJogador01.textContent = receberNomeJogador01;
    alterarNomeJogador02.textContent = receberNomeJogador02;
    nomeJogador01 = receberNomeJogador01;
    nomeJogador02 = receberNomeJogador02;
    numeroMaximo.innerHTML = receberNumeroMaximo;
    geradorNumeroAleatorio(receberNumeroMaximo);
    modalPartida.style.display = "none"
    abrirModal.close();
    //solicitarNumeroJogador(receberNomeJogador01,receberNomeJogador02);
}

function iniciarPartida () {
    modalPartida.style.display = "flex"
    abrirModal.showModal();
}

function registroJogadas (numeroJogado, nomeJogador) {
    if (numeroJogado < 10) {
        numeroJogado = "0" + numeroJogado
    }
    if (nomeJogador) {
        const li = document.createElement('li');
        li.textContent = numeroJogado;
        jogadasAnterioresJog01.prepend(li);
    } else {
        const li = document.createElement('li');
        li.textContent = numeroJogado;
        jogadasAnterioresJog02.prepend(li);
    }
}

//let numeroMaximo = 10 //Number(prompt("Digite o maior número que pode ser sorteado: "))


function inserirVitoriaJogador (pontosJogador) {
    pontosJogador.value = parseInt(pontosJogador.value) + 1;
}


function solicitarNumeroJogador (novoNumeroUsuario, jogador) {
    
    novoNumeroUsuario = parseInt(novoNumeroUsuario);

    if (novoNumeroUsuario === numeroAleatorio) {
        console.log("Numeros Iguais")

        if(jogador) {
            inserirVitoriaJogador(placarVitoriaJog01)
            console.log("Jogador " + nomeJogador01 + " GANHOUU!!!")

        } else {
            inserirVitoriaJogador(placarVitoriaJog02)
            console.log("Jogador " + nomeJogador02 + " GANHOUU!!!")
        }

    } else {

        if (novoNumeroUsuario > numeroAleatorio) {
            if (novoNumeroUsuario < maiorNumero) {
                maiorNumero = novoNumeroUsuario
            }
            numeroMaximo.innerHTML = maiorNumero;

        } else {
            if (novoNumeroUsuario > menorNumero) {
                menorNumero = novoNumeroUsuario
                numeroMinino.innerHTML = menorNumero;
            }
        }
        if (jogador) {
            botaoJogarJog01.disabled = true;
            botaoJogarJog02.disabled = false;
        } else {
            botaoJogarJog02.disabled = true;
            botaoJogarJog01.disabled = false;
        }

        
        //solicitarNumeroJogador(receberNomeJogador01, receberNomeJogador02)
    }

    registroJogadas(novoNumeroUsuario, jogador);

}

function jogarNovamente () {

    let respJog01 = prompt("Digite sua resposta Jog01: S/N")
    let respJog02 = prompt("Digite sua resposta Jog02: S/N")

    if(respJog01 == "S" && respJog02 == "S"){
        return true
    } else {
        return false
    }
}

//solicitarNumeroJogador(nameJogador01, nameJogador02)
