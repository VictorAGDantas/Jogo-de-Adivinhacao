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
let fundoModalGanhador = document.getElementById("js-modal-ganhador-fundo");
let modalGanhador = document.getElementById("js-modal-ganhador");
let nomeGanhadorPartida = document.getElementById("js-nome-ganhador");
let numeroMaximoSorteado = document.getElementById("js-input-numero-maximo");
let placarVencedor = document.getElementById("js-modal-vencedor");
let placarPerdedor = document.getElementById("js-modal-perdedor");
let nomeVencedorJogo = document.getElementById("js-nome-vencedor-jogo");
let placarVencedorJogo = document.getElementById("js-placar-vencedor-jogo");
let nomePerdedorJogo = document.getElementById("js-nome-perdedor-jogo");
let placarPerdedorJogo = document.getElementById("js-placar-perdedor-jogo");
let botoesModalGanhador = document.getElementById("js-botoes-modal-ganhador");
let fraseGanhador = document.getElementById("js-frase-ganhador");
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

function ganhadorPartida (nomejogador) {
    fundoModalGanhador.style.display = "flex"
    modalGanhador.showModal();
    nomejogador ? nomeGanhadorPartida.innerHTML = nomejogador : " "
}

function fecharModalGanhador () {
    fundoModalGanhador.style.display = "none"
    modalGanhador.close();
    placarVencedor.style.display = "none"
    placarPerdedor.style.display = "none"
    botoesModalGanhador.style.display = "flex"
}


function solicitarNumeroJogador (novoNumeroUsuario, jogador) {
    
    novoNumeroUsuario = parseInt(novoNumeroUsuario);

    if (novoNumeroUsuario === numeroAleatorio) {
        console.log("Numeros Iguais")

        if(jogador) {
            ganhadorPartida(nomeJogador01);
            inserirVitoriaJogador(placarVitoriaJog01);
            console.log("Jogador " + nomeJogador01 + " GANHOUU!!!");

        } else {
            ganhadorPartida(nomeJogador02);
            inserirVitoriaJogador(placarVitoriaJog02);
            console.log("Jogador " + nomeJogador02 + " GANHOUU!!!");
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

function novaPartida () {
    botaoJogarJog01.disabled = false;
    botaoJogarJog02.disabled = true;
    menorNumero = 0
    maiorNumero = 0
    jogadasAnterioresJog01.innerHTML = ""
    jogadasAnterioresJog02.innerHTML = ""
    numeroMaximoSorteado.value = parseInt(numeroMaximoSorteado.value);
    geradorNumeroAleatorio(numeroMaximoSorteado.value);
    fecharModalGanhador();
}

function encerrarJogo() {
    ganhadorPartida(false);
    placarVencedor.style.display = "flex"
    placarPerdedor.style.display = "flex"
    botoesModalGanhador.style.display = "none"

    if (placarVitoriaJog01.value === placarVitoriaJog02.value) {
        fraseGanhador.textContent = "Esse Jogo Está"
        nomeGanhadorPartida.innerHTML = "EMPATADO"

    } else if (placarVitoriaJog01.value > placarVitoriaJog02.value){
        fraseGanhador.textContent = "Você Ganhou!!!"
        nomeGanhadorPartida.innerHTML = nomeJogador01

        nomeVencedorJogo.innerHTML = nomeJogador01
        placarVencedorJogo.innerHTML = placarVitoriaJog01.value

        nomePerdedorJogo.innerHTML = nomeJogador02
        placarPerdedorJogo.innerHTML = placarVitoriaJog02.value

    } else {
        fraseGanhador.textContent = "Você Ganhou!!!"
        nomeGanhadorPartida.innerHTML = nomeJogador02.value

        nomeVencedorJogo.innerHTML = nomeJogador02
        placarVencedorJogo.innerHTML = placarVitoriaJog02.value

        nomePerdedorJogo.textContent = nomeJogador01
        placarPerdedorJogo.innerHTML = placarVitoriaJog01.value
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
