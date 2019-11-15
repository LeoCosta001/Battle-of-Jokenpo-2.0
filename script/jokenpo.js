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
let playerChange = "";
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
            // Verificar a escolha de jogada da CPU
            //Efeito de rotação
            let i = 1;
            let CPURotation = window.setInterval(function () {
                // Resetar rotação quando chegar na ultima opção
                if (i > jogadasCPU.length) {
                    i = 1;
                }
                // Alterando imagem da CPU
                if (i == 1) { imgCPU.src = "imagens/pedra.png" }
                if (i == 2) { imgCPU.src = "imagens/papel.png" }
                if (i == 3) { imgCPU.src = "imagens/tesoura.png" }
                i = i + 1;
            }, 100); // <---- Velocidade de Rotação

            // Pausando rotação
            window.setTimeout(function () {
                clearInterval(CPURotation);
                // Calcular um número de jogada randômico para CPU baseado na quantidade de escolhas da array "jogadasCPU"
                CPUChange = Math.round(Math.random() * (jogadasCPU.length - 1)) + 1;
                if (CPUChange == 1) { imgCPU.src = "imagens/pedra.png" }
                if (CPUChange == 2) { imgCPU.src = "imagens/papel.png" }
                if (CPUChange == 3) { imgCPU.src = "imagens/tesoura.png" }
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
                    consoleGame.innerHTML = "VITÓRIA!"
                    consoleGameDescri.innerHTML = "O seu Papel embrulhou a Pedra."
                    playerScore = playerScore + 10
                }
                if (playerChange == "papel" && CPUChange == 2) {
                    imgCPU.src = "imagens/papel.png"
                    consoleGame.innerHTML = "EMPATE!"
                    consoleGameDescri.innerHTML = "Os dois Papeis se rasgaram."
                    playerScore = playerScore + 5
                    CPUScore = CPUScore + 5
                }
                if (playerChange == "papel" && CPUChange == 3) {
                    imgCPU.src = "imagens/tesoura.png"
                    consoleGame.innerHTML = "DERROTA!"
                    consoleGameDescri.innerHTML = "O seu Papel foi cortado pela Tesoura."
                    CPUScore = CPUScore + 10
                }
                // Usuario escolhe Tesoura
                if (playerChange == "tesoura" && CPUChange == 1) {
                    imgCPU.src = "imagens/pedra.png"
                    consoleGame.innerHTML = "DERROTA!"
                    consoleGameDescri.innerHTML = "A sua Tesoura foi quebrada pela Pedra."
                    CPUScore = CPUScore + 10
                }
                if (playerChange == "tesoura" && CPUChange == 2) {
                    imgCPU.src = "imagens/papel.png";
                    consoleGame.innerHTML = "VITÓRIA!"
                    consoleGameDescri.innerHTML = "A sua Tesoura cortou o Papel."
                    playerScore = playerScore + 10
                }
                if (playerChange == "tesoura" && CPUChange == 3) {
                    imgCPU.src = "imagens/tesoura.png";
                    consoleGame.innerHTML = "EMPATE!"
                    consoleGameDescri.innerHTML = "As duas Tesouras se cortaram."
                    playerScore = playerScore + 5
                    CPUScore = CPUScore + 5
                }
            }, 2000); // <---- Tempo para pausar evento      

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
