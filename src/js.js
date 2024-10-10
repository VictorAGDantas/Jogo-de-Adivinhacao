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

function jogar (value, jogador) {

}

let vitoriaJog01 = 0
let vitoriaJog02 = 0

//let numeroMaximo = 10 //Number(prompt("Digite o maior número que pode ser sorteado: "))


function solicitarNumeroJogador (novoNumeroUsuario, jogador) {
    
    novoNumeroUsuario = parseInt(novoNumeroUsuario);

    if (novoNumeroUsuario === numeroAleatorio) {
        console.log("Numeros Iguais")

        if(jogador) {
            console.log("Jogador " + nomeJogador01 + " GANHOUU!!!")
            vitoriaJog01 += 1

        } else {
            console.log("Jogador " + nomeJogador02 + " GANHOUU!!!")
            vitoriaJog02 += 1
        }

        //let proximaJogada = jogarNovamente()

        // if (proximaJogada) {
        //     jogador01 = true
        //     jogador02 = false
        //     menorNumero = 0
        //     numeroMaximo = Number(prompt("Digite o maior número que pode ser sorteado: "))
        //     maiorNumero = numeroMaximo
        //     geradorNumeroAleatorio(numeroMaximo)
        //     solicitarNumeroJogador(receberNomeJogador01, receberNomeJogador02)

        // } else {
        //     console.log("JOGO ENCERRADO!!")

        //     if (vitoriaJog01 > vitoriaJog02) {
        //         console.log(receberNomeJogador01 + " GANHOU, por " + vitoriaJog01 + " X " + vitoriaJog02)

        //     } else if (vitoriaJog01 < vitoriaJog02) {
        //         console.log(receberNomeJogador02 + " GANHOU, por " + vitoriaJog02 + " X " + vitoriaJog01)

        //     } else {
        //         console.log("JOGO EMPATADO, por " + vitoriaJog01 + " X " + vitoriaJog02)
        //     }
        // }

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
