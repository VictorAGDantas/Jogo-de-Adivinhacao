
#Inicializar Tailwind
npx tailwindcss -i ./src/css/input.css -o ./src/css/output.css --watch

# Explicação das Funções Utilizadas:

## Função 01 - iniciarPartida

### Assim que clicar no Botão "Iniciar", essa função (Não Precisa de Parametro):
#### - Troca o display none --> flex do Modal (Assim Modal com o Id="js-modal-iniciar-partida" irar aparecer)


## Função 02 - criarJogador

### - Assim que clicar no Botão "Criar Jogador", essa função (Precisa de 3 Parametros):
##### - Parametros:
###### - Nome do Jogador 01
###### - Nome do Jogador 02
###### - Numero Maximo possivel a ser sorteado

#### - A função coloca os Nomes dos Jogadores, do lado do Placar
#### - A função coloca o Numero Maximo dentro do Placar
#### - Ela chama a função geradorNumeroAleatorio e da o Paramento Numero Maximo
#### - Troca o display flex --> none do Modal (Assim Modal com o Id="js-modal-iniciar-partida" não irar aparecer)


## Função 03 - geradorNumeroAleatorio

### - Assim que for chamada, essa função: (Precisa de 1 Parametro):
##### - Parametro:
###### - Numero Maximo possivel a ser sorteado

#### - Essa função gerar um Numero de forma Aleatoria entre 0 ao numero Maximo que foi digitado


## Função 04 - solicitarNumeroJogador

### - Assim que for chamada, essa função: (Precisa de 2 Parametros):
##### - Parametros:
###### - Numero que o Jogador colocou dentro do Input 
###### - E o valor Booleano colocado dentro do Botão abaixo do Input que está no HTML, dentro do atributo onclick

#### - Essa função primeiramente muda o tipo do novoNumeroUsuario para Int = Numero Inteiro. Dessa forma, as comparações que serão feitas, sempre teram o mesmo Tipo.

#### - A 1 comparação é se o valor colocado no Input do Jogador é o Numero Sorteado. Caso for, ele mostrar no console que os Numeros são iguais. E falará qual foi o jogador que Ganhou, verificando qual é o valor do parametro "jogador".

#### - A 2 comparação é se o valor colocado no Input do Jogador é diferente do Numero Sorteado, se isso acontencer, a função verifica se o valor colocado no Input do Jogador é maior que o Numero Sorteado, se for ela atualizará o valor da Let maiorNumero. E se o valor for menor, ela atualizará o valor da Let menorNumero.

#### - A 3 comparação é se o valor Boleano do parametro jogador é True, se isso acontecer, o Botão do jogador 1, ficará verde, indicando que a proxima jogada será dele. Se o valor for False, será a ver do jogador 2.

#### - No final da Função, ela chama a função registroJogadas com os parametros numero colocado no input do jogador e o valor boleano do jogador.


## Função 05 - registroJogadas

### - Assim que for chamada, essa função: (Precisa de 2 Parametros):
##### - Parametros:
###### - Numero que o Jogador colocou dentro do Input 
###### - E o valor Booleano colocado dentro do Botão abaixo do Input que está no HTML, dentro do atributo onclick

#### - A 1 comparação é se o valor colocado no Input do Jogador é menor que 10, se isso acontencer ela adiciona um 0 na frente do valor. Ex: 09

#### - A 2 comparação é se o valor Boleano do parametro jogador é True, se isso acontecer, ela adicionará o valor que o jogador colocou do lado das jogadas passadas do jogador 1. Se o valor for False, será colocado nas jogadas do jogador 2.


## Função 06 - jogarNovamente

### Assim que um jogador acertar o numero sorteado, essa função funcionará (Não Precisa de Parametro):

#### - Ela perguntara para os jogador se eles vão quer jogar novamente, se os 2 jogadores continuarem, jogo inicia novamente.