// Variaveis de seleção HTML
const titleChange = document.querySelector(".tituloEscolher")
const butJogar = document.querySelector("#butJogar");
const changePedra = document.querySelector("#imgPedra");
const changePapel = document.querySelector("#imgPapel");
const changeTesoura = document.querySelector("#imgTesoura");
const changePlayer = document.querySelector("#selectPlayer");
const imgCPU = document.querySelector("#selectCPU");
const consoleGame = document.querySelector("#consoleGame");
const consoleGameDescri = document.querySelector("#consoleGameDescri");
const playerPlacar = document.querySelector("#scorePlayer");
const CPUPlacar = document.querySelector("#scoreCPU");
// Variaveis de Status
let partida = "off";
let playerChange = 0;
let CPUChange = 0;
// Variaveis de Pontuação
let playerScore = 0
let CPUScore = 0
// Variaveis de jogadas
let jogadasCPU = ["pedra", "papel", "tesoura"]

// Processando Jogada
butJogar.addEventListener("click", t => {
    // Verificar se a partida está "ON" ou "OFF"
    if (partida == "off") {
        // Verificar a escolha de jogada do Player
        if (playerChange == 0) {
            consoleGame.innerHTML = "ERRO! Selecione uma jogada primeiro."
        } else {
            // Calcular um número randômico para CPU de 1 até 3
            CPUChange = Math.round(Math.random() * (jogadasCPU.length -1))+1

            // Usuario escolhe Pedra
            if (playerChange == "pedra" && CPUChange == 1) {
                imgCPU.src = "imagens/pedra.png"
                consoleGame.innerHTML = "EMPATE!"
                consoleGameDescri.innerHTML = "Infelizmente as duas Pedras se quebraram."
                playerScore = playerScore + 5
                CPUScore = CPUScore + 5
            }
            if (playerChange == "pedra" && CPUChange == 2) {
                imgCPU.src = "imagens/papel.png"
                consoleGame.innerHTML = "DERROTA!"
                consoleGameDescri.innerHTML = "A sua Pedra foi embrulhada pelo Papel."
                CPUScore = CPUScore + 10
            }
            if (playerChange == "pedra" && CPUChange == 3) {
                imgCPU.src = "imagens/tesoura.png"
                consoleGame.innerHTML = "VITÓRIA!"
                consoleGameDescri.innerHTML = "A sua Pedra quebrou a Tesoura."
                playerScore = playerScore + 10

            }
            // Usuario escolhe Papel
            if (playerChange == "papel" && CPUChange == 1) {
                imgCPU.src = "imagens/pedra.png"
                consoleGame.innerHTML = "VITÓRIA! O seu Papel embrulhou a Pedra."
                playerScore = playerScore + 10
            }
            if (playerChange == "papel" && CPUChange == 2) {
                imgCPU.src = "imagens/papel.png"
                consoleGame.innerHTML = "EMPATE! Os dois Papeis se rasgaram."
                playerScore = playerScore + 5
                CPUScore = CPUScore + 5
            }
            if (playerChange == "papel" && CPUChange == 3) {
                imgCPU.src = "imagens/tesoura.png"
                consoleGame.innerHTML = "DERROTA! O seu Papel foi cortado pela Tesoura."
                CPUScore = CPUScore + 10
            }
            // Usuario escolhe Tesoura
            if (playerChange == "tesoura" && CPUChange == 1) {
                imgCPU.src = "imagens/pedra.png"
                consoleGame.innerHTML = "DERROTA! A sua Tesoura foi quebrada pela Pedra.."
                CPUScore = CPUScore + 10
            }
            if (playerChange == "tesoura" && CPUChange == 2) {
                imgCPU.src = "imagens/papel.png";
                consoleGame.innerHTML = "VITÓRIA! A sua Tesoura cortou o Papel."
                playerScore = playerScore + 10
            }
            if (playerChange == "tesoura" && CPUChange == 3) {
                imgCPU.src = "imagens/tesoura.png";
                consoleGame.innerHTML = "EMPATE! As duas Tesouras se cortaram."
                playerScore = playerScore + 5
                CPUScore = CPUScore + 5
            }
            partida = "on";
            butJogar.value = "Outra Partida";
            playerPlacar.innerHTML = `${playerScore}`
            CPUPlacar.innerHTML = `${CPUScore}`
        }
    } else {
        // Resetando os status do jogo
        titleChange.innerHTML = "Escolha uma dessas jogadas";
        butJogar.value = "Jogar!";
        changePlayer.src = "imagens/noChange.png";
        playerChange = 0;
        imgCPU.src = "imagens/noChange.png";
        CPUChange = 0;
        consoleGame.innerHTML = "";
        consoleGameDescri.innerHTML = "";
        partida = "off";
    }
})
