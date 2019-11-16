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
const playerPlacarFinal = document.querySelector("#scoreFinalPlayer");
const CPUPlacarFinal = document.querySelector("#scoreFinalCPU");
const butBatalhaNivel1 = document.querySelector("#butBatalhaNivel1")
const battleFinishTitle = document.querySelector("#battleFinishTitle")
const menuEXP = document.querySelector("#menuEXP")
const menuNivel = document.querySelector("#menuNivel")
const battleFinishDescri = document.querySelector("#battleFinishDescri")
const nivelUpDescri = document.querySelector("#nivelUpDescri")
const nivelUpSubDescri = document.querySelector("#nivelUpSubDescri")
const helpDisplay = document.querySelector("#helpPaiBg")
// Variaveis de Game Status
let partida = "off";
let playerChange = "";
let CPUChange = 0;
let start = "off"
// Variaveis de Pontuação
let playerScore = 0
let CPUScore = 0
let EXP = 0
let nivel = 1
let placarFinal = 100
// Variaveis de jogadas
let jogadasCPU = ["pedra", "papel", "tesoura"]
// Variavel de Display
let displayBattleFinish = document.querySelector("#displayBattleFinish")
let displayBatalha = document.querySelector("#displayBatalha")
let displayNivelUp = document.querySelector("#displayNivelUp")

//Selecionar botão de batalha Nivel 1
butBatalhaNivel1.addEventListener("click", t => {
    butBatalhaNivel1.style.display = "none"
    displayBatalha.style.display = "block"
})

// Processando Jogada
butJogar.addEventListener("click", t => {
    // Verificar se está na vez da CPU jogar
    if (start == "off") {
        // Verificar se a partida está "ON" ou "OFF"
        if (partida == "off") {
            // Verificar a escolha de jogada do Player
            if (playerChange == 0) {
                consoleGame.innerHTML = "ERRO! Selecione uma jogada primeiro."
            } else {
                butJogar.value = "Aguarde...";
                playButton()
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
                    // Alterando a imagem da Jogada da CPU de acordo com o resultado
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
                    // Verificando se a partida ja chegou no final
                    if (playerScore >= 50 || CPUScore >= 50) {
                        playerPlacar.innerHTML = `${playerScore}`
                        CPUPlacar.innerHTML = `${CPUScore}`
                        butJogar.value = "Acabou!"
                        // Verificar se deu empate
                        if (playerScore == CPUScore) {
                            battleFinishTitle.innerHTML = "Empatou!"
                            battleFinishDescri.innerHTML = "Exp + 50"
                            playButton()
                            window.setTimeout(function () {
                                playButton()
                                EXP = EXP + 50
                                battleFinish()
                            }, 5000);
                        } else {
                            if (playerScore >= 50) {
                                battleFinishTitle.innerHTML = "Parabens! Você ganhou!"
                                battleFinishDescri.innerHTML = "Exp + 100"
                                playButton()
                                window.setTimeout(function () {
                                    playButton()
                                    EXP = EXP + 100
                                    battleFinish()
                                }, 5000);
                            }
                            if (CPUScore >= 50) {
                                battleFinishTitle.innerHTML = "Você Perdeu!"
                                battleFinishDescri.innerHTML = "Exp + 20"
                                playButton()
                                window.setTimeout(function () {
                                    playButton()
                                    EXP = EXP + 20
                                    battleFinish()
                                }, 5000);
                            }
                        }
                    } else {
                        playerPlacar.innerHTML = `${playerScore}`
                        CPUPlacar.innerHTML = `${CPUScore}`
                        partida = "on";
                        butJogar.value = "Outra Partida";
                    }
                    playButton()
                }, 2000); // <---- Tempo para pausar evento      
            }
        } else {
            resumo()
        }
    } else {
        titleChange.innerHTML = "Jogada em andamento. Por favor aguarde."
    }
})


// Resetando os status da batalha após cada partida
function resumo() {
    titleChange.innerHTML = "Escolha uma dessas jogadas";
    butJogar.value = "Jogar!";
    changePlayer.src = "imagens/noChange.png";
    playerChange = "";
    imgCPU.src = "imagens/noChange.png";
    CPUChange = 0;
    consoleGame.innerHTML = "";
    consoleGameDescri.innerHTML = "";
    partida = "off";
}

// Display Battle Finish
function battleFinish() {

    //Verificar Nivel Up
    if (EXP >= 300 && nivel == 1) {
        nivel = 2
        displayNivelUp.style.display = "block"
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`
        nivelUpSubDescri.innerHTML = `Batalha Nivel 2 Desbloqueado`
    }
    playerChange = "";
    titleChange.innerHTML = "Escolha uma dessas jogadas";
    butJogar.value = "Jogar!";
    partida = "off";
    displayBatalha.style.display = "none"
    displayBattleFinish.style.display = "block"
    menuEXP.innerHTML = EXP
    menuNivel.innerHTML = `${nivel}`
    playerPlacarFinal.innerHTML = `${playerScore}`
    CPUPlacarFinal.innerHTML = `${CPUScore}`
    imgCPU.src = "imagens/noChange.png"
    changePlayer.src = "imagens/noChange.png"
}
// Display Battle Finish (botão de nova batalha)
butBattleChange.addEventListener("click", t => {
    playerScore = 0
    CPUScore = 0
    playerPlacar.innerHTML = `${playerScore}`
    CPUPlacar.innerHTML = `${CPUScore}`
    consoleGame.innerHTML = ""
    consoleGameDescri.innerHTML = ""
    displayNivelUp.style.display = "none"
    displayBattleFinish.style.display = "none"
    butBatalhaNivel1.style.display = "block"
    nivelUpDescri.innerHTML = ``
    nivelUpSubDescri.innerHTML = ``
})
function playButton() {
    if (start == "on") {
        start = "off"
    } else {
        start = "on"
    }
}