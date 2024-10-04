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

function criarJogador (receberNomeJogador01,receberNomeJogador02, event) {
    event.preverDefault();
    alterarNomeJogador01.textContent = receberNomeJogador01;
    alterarNomeJogador02.textContent = receberNomeJogador02;
    modalPartida.style.display = "none"
    abrirModal.close();
    solicitarNumeroJogador(receberNomeJogador01,receberNomeJogador02);
}

function iniciarPartida () {
    modalPartida.style.display = "flex"
    abrirModal.showModal();
}


let jogador01 = true
let jogador02 = false
let vitoriaJog01 = 0
let vitoriaJog02 = 0
let numeroAleatorio = 0

let numeroMaximo = 10 //Number(prompt("Digite o maior número que pode ser sorteado: "))

function geradorNumeroAleatorio(maximo) {
    numeroAleatorio = Math.floor(Math.random() * maximo) + 1
    return numeroAleatorio
}

let menorNumero = 0
let maiorNumero = numeroMaximo

geradorNumeroAleatorio(numeroMaximo)

function solicitarNumeroJogador (receberNomeJogador01, receberNomeJogador02) {
    let novoNumeroUsuario = Number(prompt("Digite um número: "))

    if (novoNumeroUsuario === numeroAleatorio) {
        console.log("Numeros Iguais")

        if(jogador01) {
            console.log("Jogador " + receberNomeJogador01 + " GANHOUU!!!")
            vitoriaJog01 += 1

        } else {
            console.log("Jogador " + receberNomeJogador02 + " GANHOUU!!!")
            vitoriaJog02 += 1
        }
        let proximaJogada = jogarNovamente()

        if (proximaJogada) {
            jogador01 = true
            jogador02 = false
            menorNumero = 0
            numeroMaximo = Number(prompt("Digite o maior número que pode ser sorteado: "))
            maiorNumero = numeroMaximo
            geradorNumeroAleatorio(numeroMaximo)
            solicitarNumeroJogador(receberNomeJogador01, receberNomeJogador02)

        } else {
            console.log("JOGO ENCERRADO!!")

            if (vitoriaJog01 > vitoriaJog02) {
                console.log(receberNomeJogador01 + " GANHOU, por " + vitoriaJog01 + " X " + vitoriaJog02)

            } else if (vitoriaJog01 < vitoriaJog02) {
                console.log(receberNomeJogador02 + " GANHOU, por " + vitoriaJog02 + " X " + vitoriaJog01)

            } else {
                console.log("JOGO EMPATADO, por " + vitoriaJog01 + " X " + vitoriaJog02)
            }
        }

    } else {

        if (novoNumeroUsuario > numeroAleatorio) {
            if (novoNumeroUsuario < maiorNumero) {
                maiorNumero = novoNumeroUsuario
            }
            console.log("Numero sorteado é menor que " + novoNumeroUsuario + ". O Numero sorteado está entre " + menorNumero + " ___ " + maiorNumero )

        } else {
            if (novoNumeroUsuario > menorNumero) {
                menorNumero = novoNumeroUsuario
            }
            console.log("Numero sorteado é maior que " + novoNumeroUsuario + ". O Numero sorteado está entre " + menorNumero + " ___ " + maiorNumero )
        }

        jogador01 = !jogador01
        jogador02 = !jogador02

        solicitarNumeroJogador(receberNomeJogador01, receberNomeJogador02)
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
