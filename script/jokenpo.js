// ####### Variaveis de seleção HTML #######
const titleChange = document.querySelector(".tituloEscolher");
const butJogar = document.querySelector("#butJogar");
const imgCPU = document.querySelector("#selectCPU");
const consoleGame = document.querySelector("#consoleGame");
const consoleGameDescri = document.querySelector("#consoleGameDescri");
const playerPlacar = document.querySelector("#scorePlayer");
const CPUPlacar = document.querySelector("#scoreCPU");
const playerPlacarFinal = document.querySelector("#scoreFinalPlayer");
const CPUPlacarFinal = document.querySelector("#scoreFinalCPU");
const butBatalhaNivel1 = document.querySelector("#butBatalhaNivel1");
const battleFinishTitle = document.querySelector("#battleFinishTitle");
const battleFinishDescri1 = document.querySelector("#battleFinishDescri1");
const battleFinishDescri2 = document.querySelector("#battleFinishDescri2");
const nivelUpDescri = document.querySelector("#nivelUpDescri");
const nivelUpSubDescri = document.querySelector("#nivelUpSubDescri");
// ####### Menu ######
const menuEXP = document.querySelector("#menuEXP");
const menuNivel = document.querySelector("#menuNivel");
const menuPJ = document.querySelector("#menuPJ");
// ####### Botão de Change #######
const changePedra = document.querySelector("#imgPedra");
const changePapel = document.querySelector("#imgPapel");
const changeTesoura = document.querySelector("#imgTesoura");
const changeEsponja = document.querySelector("#imgEsponja");
const changeAr = document.querySelector("#imgAr");
const changeAgua = document.querySelector("#imgAgua");
const changeFogo = document.querySelector("#imgFogo");
const changePlayer = document.querySelector("#selectPlayer");
// ####### Variavel de Display (popup) #######
const helpDisplay = document.querySelector("#helpPaiBg");
const menuJogadasDisplay = document.querySelector("#menuJogadasPaiBg");
// ####### Variavel de Menu de Jogadas(popup) #######
// True
const jogPedraTrue = document.querySelector("#imgJogPedraTrue");
const jogPapelTrue = document.querySelector("#imgJogPapelTrue");
const jogTesouraTrue = document.querySelector("#imgJogTesouraTrue");
const jogEsponjaTrue = document.querySelector("#imgJogEsponjaTrue");
const jogArTrue = document.querySelector("#imgJogArTrue");
const jogAguaTrue = document.querySelector("#imgJogAguaTrue");
const jogFogoTrue = document.querySelector("#imgJogFogoTrue");
// False
const jogEsponjaFalse = document.querySelector("#imgJogEsponjaFalse");
const jogArFalse = document.querySelector("#imgJogArFalse");
const jogAguaFalse = document.querySelector("#imgJogAguaFalse");
const jogFogoFalse = document.querySelector("#imgJogFogoFalse");
// Descrição de Jogadas
const jogDescriTitulo = document.querySelector("#menuJogadasDescriTitulo");
const jogDescri1 = document.querySelector("#menuJogadasDescri1");
const jogDescri2 = document.querySelector("#menuJogadasDescri2");
const jogDescri3 = document.querySelector("#menuJogadasDescri3");
const jogDescri4 = document.querySelector("#menuJogadasDescri4");
// Slots Vazios
const jogSlot1 = document.querySelector("#imgJogSlot1");
const jogSlot2 = document.querySelector("#imgJogSlot2");
const jogSlot3 = document.querySelector("#imgJogSlot3");
const jogSlot4 = document.querySelector("#imgJogSlot4");
// ####### Variaveis de jogadas #######
let jogadasCPU = ["pedra", "papel", "tesoura"];
let jogadasPlayerEsponja = "comprar";
let jogadasPlayerAr = "comprar";
let jogadasPlayerAgua = "comprar";
let jogadasPlayerFogo = "comprar";
let jogArEspecial = 2
let jogAguaEspecial = 2
// ####### Variaveis de Game Status #######
let playerChange = false;
let CPUChange = 0;
let partida = "off";
let start = "off";
let batalha = false;
let totalJogadas = 0;
let totalJogadasMax = 0;
let slot1 = false
let slot2 = false
let slot3 = false
let slot4 = false
// ####### Variaveis de Pontuação #######
let playerScore = 0;
let CPUScore = 0;
let placarFinal = 100;
let EXP = 0;
let nivel = 1;
let PJ = 0;
// ####### Variavel de Display (batalhas) #######
let displayBattleFinish = document.querySelector("#displayBattleFinish");
let displayBatalha = document.querySelector("#displayBatalha");
let displayNivelUp = document.querySelector("#displayNivelUp");

// ####### Selecionar botão de batalha Nivel 1 #######
butBatalhaNivel1.addEventListener("click", t => {
    batalha = true;
    butBatalhaNivel1.style.display = "none";
    displayBatalha.style.display = "block";
})

// ####### Processando Jogada Batalha Nivel 1 #######
butJogar.addEventListener("click", t => {
    // Verificar se está na vez da CPU jogar
    if (start == "off") {
        // Verificar se a partida está "ON" ou "OFF"
        if (partida == "off") {
            // Verificar a escolha de jogada do Player
            if (playerChange == false) {
                consoleGame.innerHTML = "ERRO! Selecione uma jogada primeiro."
            } else {
                butJogar.value = "Aguarde...";
                playButton()
                // ####### Verificar se Jogadas Especiais foi usada #######
                // Quantidade de Jogadas de Ar
                if (playerChange == "ar") {
                    jogArEspecial = jogArEspecial - 1
                    if (jogArEspecial == 1) {
                        changeAr.src = "imagens/jogadas/ar1.png"
                    }
                    if (jogArEspecial == 0) {
                        changeAr.src = "imagens/jogadas/ar0.png"
                    }
                }

                // Quantidade de Jogadas de Água
                if (playerChange == "agua") {
                    jogAguaEspecial = jogAguaEspecial - 1
                    if (jogAguaEspecial == 1) {
                        changeAgua.src = "imagens/jogadas/agua1.png"
                    }
                    if (jogAguaEspecial == 0) {
                        changeAgua.src = "imagens/jogadas/agua0.png"
                    }
                }
                // ####### Efeito de rotação #######
                let i = 1;
                let CPURotation = window.setInterval(function () {
                    // Resetar rotação quando chegar na ultima opção
                    if (i > jogadasCPU.length) {
                        i = 1;
                    }
                    // Alterando imagem da CPU
                    if (i == 1) { imgCPU.src = "imagens/jogadas/pedra.png" }
                    if (i == 2) { imgCPU.src = "imagens/jogadas/papel.png" }
                    if (i == 3) { imgCPU.src = "imagens/jogadas/tesoura.png" }
                    i = i + 1;
                }, 100); // <---- Velocidade de Rotação

                // ####### Pausando rotação #######
                window.setTimeout(function () {
                    clearInterval(CPURotation);
                    // Calcular um número de jogada randômico para CPU baseado na quantidade de escolhas da array "jogadasCPU"
                    CPUChange = Math.round(Math.random() * (jogadasCPU.length - 1)) + 1;
                    // Usuario escolhe Pedra
                    if (playerChange == "pedra" && CPUChange == 1) {
                        imgCPU.src = "imagens/jogadas/pedra.png"
                        consoleGame.innerHTML = "EMPATE!"
                        consoleGameDescri.innerHTML = "Infelizmente as duas Pedras se quebraram."
                        playerScore = playerScore + 5
                        CPUScore = CPUScore + 5
                    }
                    if (playerChange == "pedra" && CPUChange == 2) {
                        imgCPU.src = "imagens/jogadas/papel.png"
                        consoleGame.innerHTML = "DERROTA!"
                        consoleGameDescri.innerHTML = "A sua Pedra foi embrulhada pelo Papel."
                        CPUScore = CPUScore + 10
                    }
                    if (playerChange == "pedra" && CPUChange == 3) {
                        imgCPU.src = "imagens/jogadas/tesoura.png"
                        consoleGame.innerHTML = "VITÓRIA!"
                        consoleGameDescri.innerHTML = "A sua Pedra quebrou a Tesoura."
                        playerScore = playerScore + 10
                    }
                    // Usuario escolhe Papel
                    if (playerChange == "papel" && CPUChange == 1) {
                        imgCPU.src = "imagens/jogadas/pedra.png"
                        consoleGame.innerHTML = "VITÓRIA!"
                        consoleGameDescri.innerHTML = "O seu Papel embrulhou a Pedra."
                        playerScore = playerScore + 10
                    }
                    if (playerChange == "papel" && CPUChange == 2) {
                        imgCPU.src = "imagens/jogadas/papel.png"
                        consoleGame.innerHTML = "EMPATE!"
                        consoleGameDescri.innerHTML = "Os dois Papeis se rasgaram."
                        playerScore = playerScore + 5
                        CPUScore = CPUScore + 5
                    }
                    if (playerChange == "papel" && CPUChange == 3) {
                        imgCPU.src = "imagens/jogadas/tesoura.png"
                        consoleGame.innerHTML = "DERROTA!"
                        consoleGameDescri.innerHTML = "O seu Papel foi cortado pela Tesoura."
                        CPUScore = CPUScore + 10
                    }

                    // Usuario escolhe Tesoura
                    if (playerChange == "tesoura" && CPUChange == 1) {
                        imgCPU.src = "imagens/jogadas/pedra.png"
                        consoleGame.innerHTML = "DERROTA!"
                        consoleGameDescri.innerHTML = "A sua Tesoura foi quebrada pela Pedra."
                        CPUScore = CPUScore + 10
                    }
                    if (playerChange == "tesoura" && CPUChange == 2) {
                        imgCPU.src = "imagens/jogadas/papel.png";
                        consoleGame.innerHTML = "VITÓRIA!"
                        consoleGameDescri.innerHTML = "A sua Tesoura cortou o Papel."
                        playerScore = playerScore + 10
                    }
                    if (playerChange == "tesoura" && CPUChange == 3) {
                        imgCPU.src = "imagens/jogadas/tesoura.png";
                        consoleGame.innerHTML = "EMPATE!"
                        consoleGameDescri.innerHTML = "As duas Tesouras se cortaram."
                        playerScore = playerScore + 5
                        CPUScore = CPUScore + 5
                    }

                    // Usuario escolhe Esponja
                    if (playerChange == "esponja" && CPUChange == 1) {
                        imgCPU.src = "imagens/jogadas/pedra.png"
                        consoleGame.innerHTML = "VITÓRIA!"
                        consoleGameDescri.innerHTML = "A sua Esponja absorveu o impacto da Pedra."
                        playerScore = playerScore + 10
                    }
                    if (playerChange == "esponja" && CPUChange == 2) {
                        imgCPU.src = "imagens/jogadas/papel.png";
                        consoleGame.innerHTML = "DERROTA!"
                        consoleGameDescri.innerHTML = "A sua Esponja foi embrulhada pelo Papel."
                        CPUScore = CPUScore + 10
                    }
                    if (playerChange == "esponja" && CPUChange == 3) {
                        imgCPU.src = "imagens/jogadas/tesoura.png";
                        consoleGame.innerHTML = "DERROTA!"
                        consoleGameDescri.innerHTML = "A sua Esponja foi cortada pela Tesoura."
                        CPUScore = CPUScore + 10
                    }
                    // Usuario escolhe Ar
                    if (playerChange == "ar" && CPUChange == 1) {
                        imgCPU.src = "imagens/jogadas/pedra.png"
                        consoleGame.innerHTML = "EMPATE!"
                        consoleGameDescri.innerHTML = "O seu Ar não causa e nem recebe dano da Pedra."
                        playerScore = playerScore + 5
                        CPUScore = CPUScore + 5
                    }
                    if (playerChange == "ar" && CPUChange == 2) {
                        imgCPU.src = "imagens/jogadas/papel.png";
                        consoleGame.innerHTML = "EMPATE!"
                        consoleGameDescri.innerHTML = "O seu Ar não causa e nem recebe dano do Papel."
                        playerScore = playerScore + 5
                        CPUScore = CPUScore + 5
                    }
                    if (playerChange == "ar" && CPUChange == 3) {
                        imgCPU.src = "imagens/jogadas/tesoura.png";
                        consoleGame.innerHTML = "EMPATE!"
                        consoleGameDescri.innerHTML = "O seu Ar não causa e nem recebe dano da Tesoura."
                        playerScore = playerScore + 5
                        CPUScore = CPUScore + 5
                    }
                    // Usuario escolhe Água
                    if (playerChange == "agua" && CPUChange == 1) {
                        imgCPU.src = "imagens/jogadas/pedra.png"
                        consoleGame.innerHTML = "VITÓRIA!"
                        consoleGameDescri.innerHTML = "Água mole em Pedra dura tanto bate até que fura."
                        playerScore = playerScore + 10
                    }
                    if (playerChange == "agua" && CPUChange == 2) {
                        imgCPU.src = "imagens/jogadas/papel.png";
                        consoleGame.innerHTML = "VITÓRIA!"
                        consoleGameDescri.innerHTML = "A sua Água molhou o Papel, e o Papel se rasgou."
                        playerScore = playerScore + 10
                    }
                    if (playerChange == "agua" && CPUChange == 3) {
                        imgCPU.src = "imagens/jogadas/tesoura.png";
                        consoleGame.innerHTML = "EMPATE!"
                        consoleGameDescri.innerHTML = "A sua Água não causa e nem recebe dano da Tesoura."
                        playerScore = playerScore + 5
                        CPUScore = CPUScore + 5
                    }
                    // Usuario escolhe Fogo
                    if (playerChange == "fogo" && CPUChange == 1) {
                        imgCPU.src = "imagens/jogadas/pedra.png"
                        consoleGame.innerHTML = "DERROTA!"
                        consoleGameDescri.innerHTML = "A Pedra é grande e apagou o seu Fogo."
                        CPUScore = CPUScore + 10
                    }
                    if (playerChange == "fogo" && CPUChange == 2) {
                        imgCPU.src = "imagens/jogadas/papel.png";
                        consoleGame.innerHTML = "VITÓRIA!"
                        consoleGameDescri.innerHTML = "Critíco! O seu Fogo Queimou o Papel com facilidade. Você ganhou + 5 Pontos de Bônus"
                        playerScore = playerScore + 15
                    }
                    if (playerChange == "fogo" && CPUChange == 3) {
                        imgCPU.src = "imagens/jogadas/tesoura.png";
                        consoleGame.innerHTML = "Vitória!"
                        consoleGameDescri.innerHTML = "O seu Fogo derreteu a Tesoura."
                        playerScore = playerScore + 10
                    }

                    // ####### Verificando se a partida ja chegou no final #######
                    if (playerScore >= 10 || CPUScore >= 10) {
                        playerPlacar.innerHTML = `${playerScore}`
                        CPUPlacar.innerHTML = `${CPUScore}`
                        butJogar.value = "Acabou!"
                        // Verificar se deu empate
                        if (playerScore == CPUScore) {
                            battleFinishTitle.innerHTML = "Empatou!"
                            battleFinishDescri1.innerHTML = "Exp + 50"
                            playButton()
                            window.setTimeout(function () {
                                playButton()
                                EXP = EXP + 100 //50
                                battleFinish()
                            }, 5000);
                        } else {
                            if (playerScore >= 10) {
                                battleFinishTitle.innerHTML = "Parabens! Você ganhou!"
                                battleFinishDescri1.innerHTML = "Exp + 100"
                                playButton()
                                window.setTimeout(function () {
                                    playButton()
                                    EXP = EXP + 100
                                    battleFinish()
                                }, 5000);
                            }
                            if (CPUScore >= 10) {
                                battleFinishTitle.innerHTML = "Você Perdeu!"
                                battleFinishDescri1.innerHTML = "Exp + 20"
                                playButton()
                                window.setTimeout(function () {
                                    playButton()
                                    EXP = EXP + 100 //20
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

// ####### Resetando os status da batalha após cada partida #######
function resumo() {
    titleChange.innerHTML = "Escolha uma dessas jogadas";
    butJogar.value = "Jogar!";
    changePlayer.src = "imagens/noChange.png";
    playerChange = false;
    imgCPU.src = "imagens/noChange.png";
    CPUChange = 0;
    consoleGame.innerHTML = "";
    consoleGameDescri.innerHTML = "";
    partida = "off";
}

// ####### Display Battle Finish #######
function battleFinish() {

    //Verificar Nivel Up (Nivel 2)
    if (EXP >= 20 && nivel == 1) {
        nivel = 2
        PJ = PJ + 1
        menuPJ.innerHTML = PJ
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`
        nivelUpSubDescri.innerHTML = `+ 1 Slot de Jogada liberado.`
        displayNivelUp.style.display = "block"
        totalJogadasMax = totalJogadasMax + 1
        jogSlot1.style.display = "inline-block"
    }
    //Verificar Nivel Up (Nivel 3)
    if (EXP >= 101 && nivel == 2) {
        nivel = 3
        PJ = PJ + 1
        menuPJ.innerHTML = PJ
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`
        nivelUpSubDescri.innerHTML = `Batalha Nivel 2 Desbloqueado`
        displayNivelUp.style.display = "block"
    }
    //Verificar Nivel Up (Nivel 4)
    if (EXP >= 201 && nivel == 3) {
        nivel = 4
        PJ = PJ + 1
        menuPJ.innerHTML = PJ
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`
        nivelUpSubDescri.innerHTML = `Batalha Nivel 3 Desbloqueado`
        displayNivelUp.style.display = "block"
    }
    //Verificar Nivel Up (Nivel 5)
    if (EXP >= 301 && nivel == 4) {
        nivel = 5
        PJ = PJ + 1
        menuPJ.innerHTML = PJ
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`
        nivelUpSubDescri.innerHTML = `+ 1 Slot de Jogada liberado.`
        displayNivelUp.style.display = "block"
        totalJogadasMax = totalJogadasMax + 1
        jogSlot2.style.display = "inline-block"
    }
    //Verificar Nivel Up (Nivel 6)
    if (EXP >= 401 && nivel == 5) {
        nivel = 6
        PJ = PJ + 1
        menuPJ.innerHTML = PJ
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`
        nivelUpSubDescri.innerHTML = `Batalha Nivel 4 Desbloqueado`
        displayNivelUp.style.display = "block"
    }
    //Verificar Nivel Up (Nivel 7)
    if (EXP >= 501 && nivel == 6) {
        nivel = 7
        PJ = PJ + 1
        menuPJ.innerHTML = PJ
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`
        nivelUpSubDescri.innerHTML = `Batalha Nivel 5 Desbloqueado`
        displayNivelUp.style.display = "block"
    }
    //Verificar Nivel Up (Nivel 8)
    if (EXP >= 601 && nivel == 7) {
        nivel = 8
        PJ = PJ + 1
        menuPJ.innerHTML = PJ
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`
        nivelUpSubDescri.innerHTML = `+ 1 Slot de Jogada liberado.`
        displayNivelUp.style.display = "block"
        totalJogadasMax = totalJogadasMax + 1
        jogSlot3.style.display = "inline-block"
    }
    //Verificar Nivel Up (Nivel 9)
    if (EXP >= 701 && nivel == 8) {
        nivel = 9
        PJ = PJ + 1
        menuPJ.innerHTML = PJ
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`
        nivelUpSubDescri.innerHTML = `Batalha Nivel 6 e Final Desbloqueado`
    }
    //Verificar Nivel Up (Nivel 10)
    if (EXP >= 801 && nivel == 9) {
        nivel = 10
        PJ = PJ + 1
        menuPJ.innerHTML = PJ
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`
        nivelUpSubDescri.innerHTML = `+ 1 Slot de Jogada liberado.`
        displayNivelUp.style.display = "block"
        totalJogadasMax = totalJogadasMax + 1
        jogSlot4.style.display = "inline-block"
    }

    // Resetando Batalha
    batalha = false
    playerChange = false;
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
    jogArEspecial = 2
    jogAguaEspecial = 2
    changeAr.src = "imagens/jogadas/ar2.png"
    changeAgua.src = "imagens/jogadas/agua2.png"
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
    battleFinishDescri2.innerHTML = ``
})

// ####### Funções Chamadas #######
function playButton() {
    if (start == "on") {
        start = "off"
    } else {
        start = "on"
    }
}