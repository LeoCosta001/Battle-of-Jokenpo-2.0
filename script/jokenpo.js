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
const battleFinishTitle = document.querySelector("#battleFinishTitle");
const battleFinishDescri1 = document.querySelector("#battleFinishDescri1");
const battleFinishDescri2 = document.querySelector("#battleFinishDescri2");
const nivelUpDescri = document.querySelector("#nivelUpDescri");
// Botão de Escolha de Batalha
const nivelUpSubDescri = document.querySelector("#nivelUpSubDescri");
const butBatalhaNivel1 = document.querySelector("#butBatalhaNivel1");
const butBatalhaNivel2 = document.querySelector("#butBatalhaNivel2");
const butBatalhaNivel3 = document.querySelector("#butBatalhaNivel3");
const butBatalhaNivel4 = document.querySelector("#butBatalhaNivel4");
const butBatalhaNivel5 = document.querySelector("#butBatalhaNivel5");
const butBatalhaNivel6 = document.querySelector("#butBatalhaNivel6");
const butBatalhaNivel7 = document.querySelector("#butBatalhaNivel7");
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
let jogadasCPUNv1 = ["pedra", "papel", "tesoura"];
let jogadasCPUNv2 = ["pedra", "papel", "tesoura", "esponja"];
let jogadasCPUNv3 = ["pedra", "papel", "tesoura", "papel", "tesoura"];
let jogadasCPUNv4 = ["pedra", "papel", "tesoura", "pedra", "papel", "tesoura", "agua", "ar"];
let jogadasCPUNv5 = ["pedra", "papel", "tesoura", "pedra", "papel", "tesoura", "agua", "fogo"];
let jogadasCPUNv6 = ["pedra", "papel", "tesoura", ,"esponja", "fogo"];
let jogadasCPUNv7 = ["pedra", "papel", "tesoura", "esponja", "fogo", "fogo", "agua", "ar"];
let jogadasPlayerEsponja = "comprar";
let jogadasPlayerAr = "comprar";
let jogadasPlayerAgua = "comprar";
let jogadasPlayerFogo = "comprar";
let jogArEspecial = 2;
let jogAguaEspecial = 2;
// ####### Variaveis de Game Status #######
let playerChange = false;
let CPUChange = 0;
let partida = "off";
let start = "off";
let batalha = false;
let totalJogadas = 0;
let totalJogadasMax = 0;
let slot1 = false;
let slot2 = false;
let slot3 = false;
let slot4 = false;
let batalhaNivel = 0;
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

// ####### Escolher Botão de Nivel de Batalhas #######
//  Botão de batalha Nivel 1
butBatalhaNivel1.addEventListener("click", t => {
    batalhaNivel = 1;
    iniciarBatalha();
})
//  Botão de batalha Nivel 2
butBatalhaNivel2.addEventListener("click", t => {
    batalhaNivel = 2;
    iniciarBatalha();
})
//  Botão de batalha Nivel 3
butBatalhaNivel3.addEventListener("click", t => {
    batalhaNivel = 3;
    iniciarBatalha();
})
//  Botão de batalha Nivel 4
butBatalhaNivel4.addEventListener("click", t => {
    batalhaNivel = 4;
    iniciarBatalha();
})
//  Botão de batalha Nivel 5
butBatalhaNivel5.addEventListener("click", t => {
    batalhaNivel = 5;
    iniciarBatalha();
})
//  Botão de batalha Nivel 6
butBatalhaNivel6.addEventListener("click", t => {
    batalhaNivel = 6;
    iniciarBatalha();
})
//  Botão de batalha Nivel 7
butBatalhaNivel7.addEventListener("click", t => {
    batalhaNivel = 7;
    iniciarBatalha();
})
// ####### Processando Jogada Batalha #######
butJogar.addEventListener("click", t => {
    // ####### Batalha Nivel 1 #######
    if (batalhaNivel == 1) {
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
                        if (i > jogadasCPUNv1.length) {
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
                        // Calcular um número de jogada randômico para CPU baseado na quantidade de escolhas da array "jogadasCPUNv1"
                        CPUChange = Math.round(Math.random() * (jogadasCPUNv1.length - 1)) + 1;
                        // Usuario escolhe Pedra
                        if (playerChange == "pedra" && CPUChange == 1) {
                            pedraXpedra();
                        };
                        if (playerChange == "pedra" && CPUChange == 2) {
                            pedraXpapel();
                        };
                        if (playerChange == "pedra" && CPUChange == 3) {
                            pedraXtesoura();
                        };
                        // Usuario escolhe Papel
                        if (playerChange == "papel" && CPUChange == 1) {
                            papelXpedra();
                        };
                        if (playerChange == "papel" && CPUChange == 2) {
                            papelXpapel();
                        };
                        if (playerChange == "papel" && CPUChange == 3) {
                            papelXtesoura();
                        };

                        // Usuario escolhe Tesoura
                        if (playerChange == "tesoura" && CPUChange == 1) {
                            tesouraXpedra();
                        };
                        if (playerChange == "tesoura" && CPUChange == 2) {
                            tesouraXpapel();
                        };
                        if (playerChange == "tesoura" && CPUChange == 3) {
                            tesouraXtesoura();
                        };

                        // Usuario escolhe Esponja
                        if (playerChange == "esponja" && CPUChange == 1) {
                            esponjaXpedra();
                        };
                        if (playerChange == "esponja" && CPUChange == 2) {
                            esponjaXpapel();
                        };
                        if (playerChange == "esponja" && CPUChange == 3) {
                            esponjaXtesoura();
                        };

                        // Usuario escolhe Ar
                        if (playerChange == "ar" && CPUChange == 1) {
                            arXpedra();
                        };
                        if (playerChange == "ar" && CPUChange == 2) {
                            arXpapel();
                        };
                        if (playerChange == "ar" && CPUChange == 3) {
                            arXtesoura();
                        };

                        // Usuario escolhe Água
                        if (playerChange == "agua" && CPUChange == 1) {
                            aguaXpedra();
                        };
                        if (playerChange == "agua" && CPUChange == 2) {
                            aguaXpapel();
                        };
                        if (playerChange == "agua" && CPUChange == 3) {
                            aguaXtesoura();
                        };

                        // Usuario escolhe Fogo
                        if (playerChange == "fogo" && CPUChange == 1) {
                            fogoXpedra();
                        };
                        if (playerChange == "fogo" && CPUChange == 2) {
                            fogoXpapel();
                        };
                        if (playerChange == "fogo" && CPUChange == 3) {
                            fogoXtesoura();
                        };

                        // ####### Verificando se a partida ja chegou no final #######
                        verificarFinish(50, 100, 50, 20);
                        playButton();
                    }, 2000); // <---- Tempo para pausar evento      
                };
            } else {
                resumo();
            };
        } else {
            titleChange.innerHTML = "Jogada em andamento. Por favor aguarde.";
        };
    };
    // ####### Batalha Nivel 2 #######
    if (batalhaNivel == 2) {
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
                        jogAguaEspecial = jogAguaEspecial - 1;
                        if (jogAguaEspecial == 1) {
                            changeAgua.src = "imagens/jogadas/agua1.png";
                        };
                        if (jogAguaEspecial == 0) {
                            changeAgua.src = "imagens/jogadas/agua0.png";
                        };
                    };
                    // ####### Efeito de rotação #######
                    let i = 1;
                    let CPURotation = window.setInterval(function () {
                        // Resetar rotação quando chegar na ultima opção
                        if (i > jogadasCPUNv2.length) {
                            i = 1;
                        };
                        // Alterando imagem da CPU
                        if (i == 1) { imgCPU.src = "imagens/jogadas/pedra.png" };
                        if (i == 2) { imgCPU.src = "imagens/jogadas/papel.png" };
                        if (i == 3) { imgCPU.src = "imagens/jogadas/tesoura.png" };
                        if (i == 4) { imgCPU.src = "imagens/jogadas/esponja.png" };
                        i = i + 1;
                    }, 100); // <---- Velocidade de Rotação

                    // ####### Pausando rotação #######
                    window.setTimeout(function () {
                        clearInterval(CPURotation);
                        // Calcular um número de jogada randômico para CPU baseado na quantidade de escolhas da array "jogadasCPUNv2"
                        CPUChange = Math.round(Math.random() * (jogadasCPUNv2.length - 1)) + 1;
                        // Usuario escolhe Pedra
                        if (playerChange == "pedra" && CPUChange == 1) {
                            pedraXpedra();
                        };
                        if (playerChange == "pedra" && CPUChange == 2) {
                            pedraXpapel();
                        };
                        if (playerChange == "pedra" && CPUChange == 3) {
                            pedraXtesoura();
                        };
                        if (playerChange == "pedra" && CPUChange == 4) {
                            pedraXesponja();
                        };
                        // Usuario escolhe Papel
                        if (playerChange == "papel" && CPUChange == 1) {
                            papelXpedra();
                        };
                        if (playerChange == "papel" && CPUChange == 2) {
                            papelXpapel();
                        };
                        if (playerChange == "papel" && CPUChange == 3) {
                            papelXtesoura();
                        };
                        if (playerChange == "papel" && CPUChange == 4) {
                            papelXesponja();
                        };

                        // Usuario escolhe Tesoura
                        if (playerChange == "tesoura" && CPUChange == 1) {
                            tesouraXpedra();
                        };
                        if (playerChange == "tesoura" && CPUChange == 2) {
                            tesouraXpapel();
                        };
                        if (playerChange == "tesoura" && CPUChange == 3) {
                            tesouraXtesoura();
                        };
                        if (playerChange == "tesoura" && CPUChange == 4) {
                            tesouraXesponja();
                        };

                        // Usuario escolhe Esponja
                        if (playerChange == "esponja" && CPUChange == 1) {
                            esponjaXpedra();
                        };
                        if (playerChange == "esponja" && CPUChange == 2) {
                            esponjaXpapel();
                        };
                        if (playerChange == "esponja" && CPUChange == 3) {
                            esponjaXtesoura();
                        };
                        if (playerChange == "esponja" && CPUChange == 4) {
                            esponjaXesponja();
                        };

                        // Usuario escolhe Ar
                        if (playerChange == "ar" && CPUChange == 1) {
                            arXpedra();
                        };
                        if (playerChange == "ar" && CPUChange == 2) {
                            arXpapel();
                        };
                        if (playerChange == "ar" && CPUChange == 3) {
                            arXtesoura();
                        };
                        if (playerChange == "ar" && CPUChange == 4) {
                            arXesponja();
                        };

                        // Usuario escolhe Água
                        if (playerChange == "agua" && CPUChange == 1) {
                            aguaXpedra();
                        };
                        if (playerChange == "agua" && CPUChange == 2) {
                            aguaXpapel();
                        };
                        if (playerChange == "agua" && CPUChange == 3) {
                            aguaXtesoura();
                        };
                        if (playerChange == "agua" && CPUChange == 4) {
                            aguaXesponja();
                        };

                        // Usuario escolhe Fogo
                        if (playerChange == "fogo" && CPUChange == 1) {
                            fogoXpedra();
                        };
                        if (playerChange == "fogo" && CPUChange == 2) {
                            fogoXpapel();
                        };
                        if (playerChange == "fogo" && CPUChange == 3) {
                            fogoXtesoura();
                        };
                        if (playerChange == "fogo" && CPUChange == 4) {
                            fogoXesponja();
                        };

                        // ####### Verificando se a partida ja chegou no final #######
                        verificarFinish(60, 130, 65, 26);
                        playButton();
                    }, 2000); // <---- Tempo para pausar evento      
                };
            } else {
                resumo();
            };
        } else {
            titleChange.innerHTML = "Jogada em andamento. Por favor aguarde.";
        };
    };
    // ####### Batalha Nivel 3 #######
    if (batalhaNivel == 3) {
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
                        jogAguaEspecial = jogAguaEspecial - 1;
                        if (jogAguaEspecial == 1) {
                            changeAgua.src = "imagens/jogadas/agua1.png";
                        };
                        if (jogAguaEspecial == 0) {
                            changeAgua.src = "imagens/jogadas/agua0.png";
                        };
                    };
                    // ####### Efeito de rotação #######
                    let i = 1;
                    let CPURotation = window.setInterval(function () {
                        // Resetar rotação quando chegar na ultima opção
                        if (i > 3) {
                            i = 1;
                        };
                        // Alterando imagem da CPU
                        if (i == 1) { imgCPU.src = "imagens/jogadas/pedra.png" };
                        if (i == 2) { imgCPU.src = "imagens/jogadas/papel.png" };
                        if (i == 3) { imgCPU.src = "imagens/jogadas/tesoura.png" };
                        i = i + 1;
                    }, 100); // <---- Velocidade de Rotação

                    // ####### Pausando rotação #######
                    window.setTimeout(function () {
                        clearInterval(CPURotation);
                        // Calcular um número de jogada randômico para CPU baseado na quantidade de escolhas da array "jogadasCPUNv3"
                        CPUChange = Math.round(Math.random() * (jogadasCPUNv3.length - 1)) + 1;
                        // Usuario escolhe Pedra
                        if (playerChange == "pedra" && CPUChange == 1) {
                            pedraXpedra();
                        };
                        if (playerChange == "pedra" && CPUChange == 2) {
                            pedraXpapel();
                        };
                        if (playerChange == "pedra" && CPUChange == 3) {
                            pedraXtesoura();
                        };
                        if (playerChange == "pedra" && CPUChange == 4) {
                            pedraXpapel();
                        };
                        if (playerChange == "pedra" && CPUChange == 5) {
                            pedraXtesoura();
                        };
                        // Usuario escolhe Papel
                        if (playerChange == "papel" && CPUChange == 1) {
                            papelXpedra();
                        };
                        if (playerChange == "papel" && CPUChange == 2) {
                            papelXpapel();
                        };
                        if (playerChange == "papel" && CPUChange == 3) {
                            papelXtesoura();
                        };
                        if (playerChange == "papel" && CPUChange == 4) {
                            papelXpapel();
                        };
                        if (playerChange == "papel" && CPUChange == 5) {
                            papelXtesoura();
                        };

                        // Usuario escolhe Tesoura
                        if (playerChange == "tesoura" && CPUChange == 1) {
                            tesouraXpedra();
                        };
                        if (playerChange == "tesoura" && CPUChange == 2) {
                            tesouraXpapel();
                        };
                        if (playerChange == "tesoura" && CPUChange == 3) {
                            tesouraXtesoura();
                        };
                        if (playerChange == "tesoura" && CPUChange == 4) {
                            tesouraXpapel();
                        };
                        if (playerChange == "tesoura" && CPUChange == 5) {
                            tesouraXtesoura();
                        };

                        // Usuario escolhe Esponja
                        if (playerChange == "esponja" && CPUChange == 1) {
                            esponjaXpedra();
                        };
                        if (playerChange == "esponja" && CPUChange == 2) {
                            esponjaXpapel();
                        };
                        if (playerChange == "esponja" && CPUChange == 3) {
                            esponjaXtesoura();
                        };
                        if (playerChange == "esponja" && CPUChange == 4) {
                            esponjaXpapel();
                        };
                        if (playerChange == "esponja" && CPUChange == 5) {
                            esponjaXtesoura();
                        };

                        // Usuario escolhe Ar
                        if (playerChange == "ar" && CPUChange == 1) {
                            arXpedra();
                        };
                        if (playerChange == "ar" && CPUChange == 2) {
                            arXpapel();
                        };
                        if (playerChange == "ar" && CPUChange == 3) {
                            arXtesoura();
                        };
                        if (playerChange == "ar" && CPUChange == 4) {
                            arXpapel();
                        };
                        if (playerChange == "ar" && CPUChange == 5) {
                            arXtesoura();
                        };

                        // Usuario escolhe Água
                        if (playerChange == "agua" && CPUChange == 1) {
                            aguaXpedra();
                        };
                        if (playerChange == "agua" && CPUChange == 2) {
                            aguaXpapel();
                        };
                        if (playerChange == "agua" && CPUChange == 3) {
                            aguaXtesoura();
                        };
                        if (playerChange == "agua" && CPUChange == 4) {
                            aguaXpapel();
                        };
                        if (playerChange == "agua" && CPUChange == 5) {
                            aguaXtesoura();
                        };

                        // Usuario escolhe Fogo
                        if (playerChange == "fogo" && CPUChange == 1) {
                            fogoXpedra();
                        };
                        if (playerChange == "fogo" && CPUChange == 2) {
                            fogoXpapel();
                        };
                        if (playerChange == "fogo" && CPUChange == 3) {
                            fogoXtesoura();
                        };
                        if (playerChange == "fogo" && CPUChange == 4) {
                            fogoXpapel();
                        };
                        if (playerChange == "fogo" && CPUChange == 5) {
                            fogoXtesoura();
                        };

                        // ####### Verificando se a partida ja chegou no final #######
                        verificarFinish(65, 160, 80, 32);
                        playButton();
                    }, 2000); // <---- Tempo para pausar evento      
                };
            } else {
                resumo();
            };
        } else {
            titleChange.innerHTML = "Jogada em andamento. Por favor aguarde.";
        };
    };
    // ####### Batalha Nivel 4 #######
    if (batalhaNivel == 4) {
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
                        jogAguaEspecial = jogAguaEspecial - 1;
                        if (jogAguaEspecial == 1) {
                            changeAgua.src = "imagens/jogadas/agua1.png";
                        };
                        if (jogAguaEspecial == 0) {
                            changeAgua.src = "imagens/jogadas/agua0.png";
                        };
                    };
                    // ####### Efeito de rotação #######
                    let i = 1;
                    let CPURotation = window.setInterval(function () {
                        // Resetar rotação quando chegar na ultima opção
                        if (i > 5) {
                            i = 1;
                        };
                        // Alterando imagem da CPU
                        if (i == 1) { imgCPU.src = "imagens/jogadas/pedra.png" };
                        if (i == 2) { imgCPU.src = "imagens/jogadas/papel.png" };
                        if (i == 3) { imgCPU.src = "imagens/jogadas/tesoura.png" };
                        if (i == 4) { imgCPU.src = "imagens/jogadas/ar.png" };
                        if (i == 5) { imgCPU.src = "imagens/jogadas/agua.png" };
                        i = i + 1;
                    }, 100); // <---- Velocidade de Rotação

                    // ####### Pausando rotação #######
                    window.setTimeout(function () {
                        clearInterval(CPURotation);
                        // Calcular um número de jogada randômico para CPU baseado na quantidade de escolhas da array "jogadasCPUNv4"
                        CPUChange = Math.round(Math.random() * (jogadasCPUNv4.length - 1)) + 1;
                        // Usuario escolhe Pedra
                        if (playerChange == "pedra" && CPUChange == 1) {
                            pedraXpedra();
                        };
                        if (playerChange == "pedra" && CPUChange == 2) {
                            pedraXpapel();
                        };
                        if (playerChange == "pedra" && CPUChange == 3) {
                            pedraXtesoura();
                        };
                        if (playerChange == "pedra" && CPUChange == 4) {
                            pedraXpedra();
                        };
                        if (playerChange == "pedra" && CPUChange == 5) {
                            pedraXpapel();
                        };
                        if (playerChange == "pedra" && CPUChange == 6) {
                            pedraXtesoura();
                        };
                        if (playerChange == "pedra" && CPUChange == 7) {
                            pedraXar();
                        };
                        if (playerChange == "pedra" && CPUChange == 8) {
                            pedraXagua();
                        };
                        
                        // Usuario escolhe Papel
                        if (playerChange == "papel" && CPUChange == 1) {
                            papelXpedra();
                        };
                        if (playerChange == "papel" && CPUChange == 2) {
                            papelXpapel();
                        };
                        if (playerChange == "papel" && CPUChange == 3) {
                            papelXtesoura();
                        };
                        if (playerChange == "papel" && CPUChange == 4) {
                            papelXpedra();
                        };
                        if (playerChange == "papel" && CPUChange == 5) {
                            papelXpapel();
                        };
                        if (playerChange == "papel" && CPUChange == 6) {
                            papelXtesoura();
                        };
                        if (playerChange == "papel" && CPUChange == 7) {
                            papelXar();
                        };
                        if (playerChange == "papel" && CPUChange == 8) {
                            papelXagua();
                        };

                        // Usuario escolhe Tesoura
                        if (playerChange == "tesoura" && CPUChange == 1) {
                            tesouraXpedra();
                        };
                        if (playerChange == "tesoura" && CPUChange == 2) {
                            tesouraXpapel();
                        };
                        if (playerChange == "tesoura" && CPUChange == 3) {
                            tesouraXtesoura();
                        };
                        if (playerChange == "tesoura" && CPUChange == 4) {
                            tesouraXpedra();
                        };
                        if (playerChange == "tesoura" && CPUChange == 5) {
                            tesouraXpapel();
                        };
                        if (playerChange == "tesoura" && CPUChange == 6) {
                            tesouraXtesoura();
                        };
                        if (playerChange == "tesoura" && CPUChange == 7) {
                            tesouraXar();
                        };
                        if (playerChange == "tesoura" && CPUChange == 8) {
                            tesouraXagua();
                        };

                        // Usuario escolhe Esponja
                        if (playerChange == "esponja" && CPUChange == 1) {
                            esponjaXpedra();
                        };
                        if (playerChange == "esponja" && CPUChange == 2) {
                            esponjaXpapel();
                        };
                        if (playerChange == "esponja" && CPUChange == 3) {
                            esponjaXtesoura();
                        };
                        if (playerChange == "esponja" && CPUChange == 4) {
                            esponjaXpedra();
                        };
                        if (playerChange == "esponja" && CPUChange == 5) {
                            esponjaXpapel();
                        };
                        if (playerChange == "esponja" && CPUChange == 6) {
                            esponjaXtesoura();
                        };
                        if (playerChange == "esponja" && CPUChange == 7) {
                            esponjaXar();
                        };
                        if (playerChange == "esponja" && CPUChange == 8) {
                            esponjaXagua();
                        };

                        // Usuario escolhe Ar
                        if (playerChange == "ar" && CPUChange == 1) {
                            arXpedra();
                        };
                        if (playerChange == "ar" && CPUChange == 2) {
                            arXpapel();
                        };
                        if (playerChange == "ar" && CPUChange == 3) {
                            arXtesoura();
                        };
                        if (playerChange == "ar" && CPUChange == 4) {
                            arXpedra();
                        };
                        if (playerChange == "ar" && CPUChange == 5) {
                            arXpapel();
                        };
                        if (playerChange == "ar" && CPUChange == 6) {
                            arXtesoura();
                        };
                        if (playerChange == "ar" && CPUChange == 7) {
                            arXar();
                        };
                        if (playerChange == "ar" && CPUChange == 8) {
                            arXagua();
                        };

                        // Usuario escolhe Água
                        if (playerChange == "agua" && CPUChange == 1) {
                            aguaXpedra();
                        };
                        if (playerChange == "agua" && CPUChange == 2) {
                            aguaXpapel();
                        };
                        if (playerChange == "agua" && CPUChange == 3) {
                            aguaXtesoura();
                        };
                        if (playerChange == "agua" && CPUChange == 4) {
                            aguaXpedra();
                        };
                        if (playerChange == "agua" && CPUChange == 5) {
                            aguaXpapel();
                        };
                        if (playerChange == "agua" && CPUChange == 6) {
                            aguaXtesoura();
                        };
                        if (playerChange == "agua" && CPUChange == 7) {
                            aguaXar();
                        };
                        if (playerChange == "agua" && CPUChange == 8) {
                            aguaXagua();
                        };

                        // Usuario escolhe Fogo
                        if (playerChange == "fogo" && CPUChange == 1) {
                            fogoXpedra();
                        };
                        if (playerChange == "fogo" && CPUChange == 2) {
                            fogoXpapel();
                        };
                        if (playerChange == "fogo" && CPUChange == 3) {
                            fogoXtesoura();
                        };
                        if (playerChange == "fogo" && CPUChange == 4) {
                            fogoXpedra();
                        };
                        if (playerChange == "fogo" && CPUChange == 5) {
                            fogoXpapel();
                        };
                        if (playerChange == "fogo" && CPUChange == 6) {
                            fogoXtesoura();
                        };
                        if (playerChange == "fogo" && CPUChange == 7) {
                            fogoXar();
                        };
                        if (playerChange == "fogo" && CPUChange == 8) {
                            fogoXagua();
                        };

                        // ####### Verificando se a partida ja chegou no final #######
                        verificarFinish(70, 190, 95, 38);
                        playButton();
                    }, 2000); // <---- Tempo para pausar evento      
                };
            } else {
                resumo();
            };
        } else {
            titleChange.innerHTML = "Jogada em andamento. Por favor aguarde.";
        };
    };
    // ####### Batalha Nivel 5 #######
    if (batalhaNivel == 5) {
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
                        jogAguaEspecial = jogAguaEspecial - 1;
                        if (jogAguaEspecial == 1) {
                            changeAgua.src = "imagens/jogadas/agua1.png";
                        };
                        if (jogAguaEspecial == 0) {
                            changeAgua.src = "imagens/jogadas/agua0.png";
                        };
                    };
                    // ####### Efeito de rotação #######
                    let i = 1;
                    let CPURotation = window.setInterval(function () {
                        // Resetar rotação quando chegar na ultima opção
                        if (i > 5) {
                            i = 1;
                        };
                        // Alterando imagem da CPU
                        if (i == 1) { imgCPU.src = "imagens/jogadas/pedra.png" };
                        if (i == 2) { imgCPU.src = "imagens/jogadas/papel.png" };
                        if (i == 3) { imgCPU.src = "imagens/jogadas/tesoura.png" };
                        if (i == 4) { imgCPU.src = "imagens/jogadas/fogo.png" };
                        if (i == 5) { imgCPU.src = "imagens/jogadas/agua.png" };
                        i = i + 1;
                    }, 100); // <---- Velocidade de Rotação

                    // ####### Pausando rotação #######
                    window.setTimeout(function () {
                        clearInterval(CPURotation);
                        // Calcular um número de jogada randômico para CPU baseado na quantidade de escolhas da array "jogadasCPUNv5"
                        CPUChange = Math.round(Math.random() * (jogadasCPUNv5.length - 1)) + 1;
                        // Usuario escolhe Pedra
                        if (playerChange == "pedra" && CPUChange == 1) {
                            pedraXpedra();
                        };
                        if (playerChange == "pedra" && CPUChange == 2) {
                            pedraXpapel();
                        };
                        if (playerChange == "pedra" && CPUChange == 3) {
                            pedraXtesoura();
                        };
                        if (playerChange == "pedra" && CPUChange == 4) {
                            pedraXpedra();
                        };
                        if (playerChange == "pedra" && CPUChange == 5) {
                            pedraXpapel();
                        };
                        if (playerChange == "pedra" && CPUChange == 6) {
                            pedraXtesoura();
                        };
                        if (playerChange == "pedra" && CPUChange == 7) {
                            pedraXfogo();
                        };
                        if (playerChange == "pedra" && CPUChange == 8) {
                            pedraXagua();
                        };
                        
                        // Usuario escolhe Papel
                        if (playerChange == "papel" && CPUChange == 1) {
                            papelXpedra();
                        };
                        if (playerChange == "papel" && CPUChange == 2) {
                            papelXpapel();
                        };
                        if (playerChange == "papel" && CPUChange == 3) {
                            papelXtesoura();
                        };
                        if (playerChange == "papel" && CPUChange == 4) {
                            papelXpedra();
                        };
                        if (playerChange == "papel" && CPUChange == 5) {
                            papelXpapel();
                        };
                        if (playerChange == "papel" && CPUChange == 6) {
                            papelXtesoura();
                        };
                        if (playerChange == "papel" && CPUChange == 7) {
                            papelXfogo();
                        };
                        if (playerChange == "papel" && CPUChange == 8) {
                            papelXagua();
                        };

                        // Usuario escolhe Tesoura
                        if (playerChange == "tesoura" && CPUChange == 1) {
                            tesouraXpedra();
                        };
                        if (playerChange == "tesoura" && CPUChange == 2) {
                            tesouraXpapel();
                        };
                        if (playerChange == "tesoura" && CPUChange == 3) {
                            tesouraXtesoura();
                        };
                        if (playerChange == "tesoura" && CPUChange == 4) {
                            tesouraXpedra();
                        };
                        if (playerChange == "tesoura" && CPUChange == 5) {
                            tesouraXpapel();
                        };
                        if (playerChange == "tesoura" && CPUChange == 6) {
                            tesouraXtesoura();
                        };
                        if (playerChange == "tesoura" && CPUChange == 7) {
                            tesouraXfogo();
                        };
                        if (playerChange == "tesoura" && CPUChange == 8) {
                            tesouraXagua();
                        };

                        // Usuario escolhe Esponja
                        if (playerChange == "esponja" && CPUChange == 1) {
                            esponjaXpedra();
                        };
                        if (playerChange == "esponja" && CPUChange == 2) {
                            esponjaXpapel();
                        };
                        if (playerChange == "esponja" && CPUChange == 3) {
                            esponjaXtesoura();
                        };
                        if (playerChange == "esponja" && CPUChange == 4) {
                            esponjaXpedra();
                        };
                        if (playerChange == "esponja" && CPUChange == 5) {
                            esponjaXpapel();
                        };
                        if (playerChange == "esponja" && CPUChange == 6) {
                            esponjaXtesoura();
                        };
                        if (playerChange == "esponja" && CPUChange == 7) {
                            esponjaXfogo();
                        };
                        if (playerChange == "esponja" && CPUChange == 8) {
                            esponjaXagua();
                        };

                        // Usuario escolhe Ar
                        if (playerChange == "ar" && CPUChange == 1) {
                            arXpedra();
                        };
                        if (playerChange == "ar" && CPUChange == 2) {
                            arXpapel();
                        };
                        if (playerChange == "ar" && CPUChange == 3) {
                            arXtesoura();
                        };
                        if (playerChange == "ar" && CPUChange == 4) {
                            arXpedra();
                        };
                        if (playerChange == "ar" && CPUChange == 5) {
                            arXpapel();
                        };
                        if (playerChange == "ar" && CPUChange == 6) {
                            arXtesoura();
                        };
                        if (playerChange == "ar" && CPUChange == 7) {
                            arXfogo();
                        };
                        if (playerChange == "ar" && CPUChange == 8) {
                            arXagua();
                        };

                        // Usuario escolhe Água
                        if (playerChange == "agua" && CPUChange == 1) {
                            aguaXpedra();
                        };
                        if (playerChange == "agua" && CPUChange == 2) {
                            aguaXpapel();
                        };
                        if (playerChange == "agua" && CPUChange == 3) {
                            aguaXtesoura();
                        };
                        if (playerChange == "agua" && CPUChange == 4) {
                            aguaXpedra();
                        };
                        if (playerChange == "agua" && CPUChange == 5) {
                            aguaXpapel();
                        };
                        if (playerChange == "agua" && CPUChange == 6) {
                            aguaXtesoura();
                        };
                        if (playerChange == "agua" && CPUChange == 7) {
                            aguaXfogo();
                        };
                        if (playerChange == "agua" && CPUChange == 8) {
                            aguaXagua();
                        };

                        // Usuario escolhe Fogo
                        if (playerChange == "fogo" && CPUChange == 1) {
                            fogoXpedra();
                        };
                        if (playerChange == "fogo" && CPUChange == 2) {
                            fogoXpapel();
                        };
                        if (playerChange == "fogo" && CPUChange == 3) {
                            fogoXtesoura();
                        };
                        if (playerChange == "fogo" && CPUChange == 4) {
                            fogoXpedra();
                        };
                        if (playerChange == "fogo" && CPUChange == 5) {
                            fogoXpapel();
                        };
                        if (playerChange == "fogo" && CPUChange == 6) {
                            fogoXtesoura();
                        };
                        if (playerChange == "fogo" && CPUChange == 7) {
                            fogoXfogo();
                        };
                        if (playerChange == "fogo" && CPUChange == 8) {
                            fogoXagua();
                        };

                        // ####### Verificando se a partida ja chegou no final #######
                        verificarFinish(75, 220, 110, 44);
                        playButton();
                    }, 2000); // <---- Tempo para pausar evento      
                };
            } else {
                resumo();
            };
        } else {
            titleChange.innerHTML = "Jogada em andamento. Por favor aguarde.";
        };
    };
    // ####### Batalha Nivel 6 #######
    if (batalhaNivel == 6) {
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
                        jogAguaEspecial = jogAguaEspecial - 1;
                        if (jogAguaEspecial == 1) {
                            changeAgua.src = "imagens/jogadas/agua1.png";
                        };
                        if (jogAguaEspecial == 0) {
                            changeAgua.src = "imagens/jogadas/agua0.png";
                        };
                    };
                    // ####### Efeito de rotação #######
                    let i = 1;
                    let CPURotation = window.setInterval(function () {
                        // Resetar rotação quando chegar na ultima opção
                        if (i > jogadasCPUNv6.length) {
                            i = 1;
                        };
                        // Alterando imagem da CPU
                        if (i == 1) { imgCPU.src = "imagens/jogadas/pedra.png" };
                        if (i == 2) { imgCPU.src = "imagens/jogadas/papel.png" };
                        if (i == 3) { imgCPU.src = "imagens/jogadas/tesoura.png" };
                        if (i == 4) { imgCPU.src = "imagens/jogadas/esponja.png" };
                        if (i == 5) { imgCPU.src = "imagens/jogadas/fogo.png" };
                        i = i + 1;
                    }, 100); // <---- Velocidade de Rotação

                    // ####### Pausando rotação #######
                    window.setTimeout(function () {
                        clearInterval(CPURotation);
                        // Calcular um número de jogada randômico para CPU baseado na quantidade de escolhas da array "jogadasCPUNv8"
                        CPUChange = Math.round(Math.random() * (jogadasCPUNv6.length - 1)) + 1;
                        // Usuario escolhe Pedra
                        if (playerChange == "pedra" && CPUChange == 1) {
                            pedraXpedra();
                        };
                        if (playerChange == "pedra" && CPUChange == 2) {
                            pedraXpapel();
                        };
                        if (playerChange == "pedra" && CPUChange == 3) {
                            pedraXtesoura();
                        };
                        if (playerChange == "pedra" && CPUChange == 4) {
                            pedraXesponja();
                        };
                        if (playerChange == "pedra" && CPUChange == 5) {
                            pedraXfogo();
                        };
                        // Usuario escolhe Papel
                        if (playerChange == "papel" && CPUChange == 1) {
                            papelXpedra();
                        };
                        if (playerChange == "papel" && CPUChange == 2) {
                            papelXpapel();
                        };
                        if (playerChange == "papel" && CPUChange == 3) {
                            papelXtesoura();
                        };
                        if (playerChange == "papel" && CPUChange == 4) {
                            papelXesponja();
                        };
                        if (playerChange == "papel" && CPUChange == 5) {
                            papelXfogo();
                        };

                        // Usuario escolhe Tesoura
                        if (playerChange == "tesoura" && CPUChange == 1) {
                            tesouraXpedra();
                        };
                        if (playerChange == "tesoura" && CPUChange == 2) {
                            tesouraXpapel();
                        };
                        if (playerChange == "tesoura" && CPUChange == 3) {
                            tesouraXtesoura();
                        };
                        if (playerChange == "tesoura" && CPUChange == 4) {
                            tesouraXesponja();
                        };
                        if (playerChange == "tesoura" && CPUChange == 5) {
                            tesouraXfogo();
                        };

                        // Usuario escolhe Esponja
                        if (playerChange == "esponja" && CPUChange == 1) {
                            esponjaXpedra();
                        };
                        if (playerChange == "esponja" && CPUChange == 2) {
                            esponjaXpapel();
                        };
                        if (playerChange == "esponja" && CPUChange == 3) {
                            esponjaXtesoura();
                        };
                        if (playerChange == "esponja" && CPUChange == 4) {
                            esponjaXesponja();
                        };
                        if (playerChange == "esponja" && CPUChange == 5) {
                            esponjaXfogo();
                        };

                        // Usuario escolhe Ar
                        if (playerChange == "ar" && CPUChange == 1) {
                            arXpedra();
                        };
                        if (playerChange == "ar" && CPUChange == 2) {
                            arXpapel();
                        };
                        if (playerChange == "ar" && CPUChange == 3) {
                            arXtesoura();
                        };
                        if (playerChange == "ar" && CPUChange == 4) {
                            arXesponja();
                        };
                        if (playerChange == "pedra" && CPUChange == 5) {
                            pedraXfogo();
                        };

                        // Usuario escolhe Água
                        if (playerChange == "agua" && CPUChange == 1) {
                            aguaXpedra();
                        };
                        if (playerChange == "agua" && CPUChange == 2) {
                            aguaXpapel();
                        };
                        if (playerChange == "agua" && CPUChange == 3) {
                            aguaXtesoura();
                        };
                        if (playerChange == "agua" && CPUChange == 4) {
                            aguaXesponja();
                        };
                        if (playerChange == "agua" && CPUChange == 5) {
                            aguaXfogo();
                        };

                        // Usuario escolhe Fogo
                        if (playerChange == "fogo" && CPUChange == 1) {
                            fogoXpedra();
                        };
                        if (playerChange == "fogo" && CPUChange == 2) {
                            fogoXpapel();
                        };
                        if (playerChange == "fogo" && CPUChange == 3) {
                            fogoXtesoura();
                        };
                        if (playerChange == "fogo" && CPUChange == 4) {
                            fogoXesponja();
                        };
                        if (playerChange == "fogo" && CPUChange == 5) {
                            fogoXfogo();
                        };

                        // ####### Verificando se a partida ja chegou no final #######
                        verificarFinish(80, 250, 125, 50);
                        playButton();
                    }, 2000); // <---- Tempo para pausar evento      
                };
            } else {
                resumo();
            };
        } else {
            titleChange.innerHTML = "Jogada em andamento. Por favor aguarde.";
        };
    };
    // ####### Batalha Nivel 7 #######
    if (batalhaNivel == 7) {
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
                        jogAguaEspecial = jogAguaEspecial - 1;
                        if (jogAguaEspecial == 1) {
                            changeAgua.src = "imagens/jogadas/agua1.png";
                        };
                        if (jogAguaEspecial == 0) {
                            changeAgua.src = "imagens/jogadas/agua0.png";
                        };
                    };
                    // ####### Efeito de rotação #######
                    let i = 1;
                    let CPURotation = window.setInterval(function () {
                        // Resetar rotação quando chegar na ultima opção
                        if (i > 8) {
                            i = 1;
                        };
                        // Alterando imagem da CPU
                        if (i == 1) { imgCPU.src = "imagens/jogadas/pedra.png" };
                        if (i == 2) { imgCPU.src = "imagens/jogadas/papel.png" };
                        if (i == 3) { imgCPU.src = "imagens/jogadas/tesoura.png" };
                        if (i == 4) { imgCPU.src = "imagens/jogadas/esponja.png" };
                        if (i == 5) { imgCPU.src = "imagens/jogadas/ar.png" };
                        if (i == 6) { imgCPU.src = "imagens/jogadas/agua.png" };
                        if (i == 7) { imgCPU.src = "imagens/jogadas/fogo.png" };
                        i = i + 1;
                    }, 100); // <---- Velocidade de Rotação

                    // ####### Pausando rotação #######
                    window.setTimeout(function () {
                        clearInterval(CPURotation);
                        // Calcular um número de jogada randômico para CPU baseado na quantidade de escolhas da array "jogadasCPUNv7"
                        CPUChange = Math.round(Math.random() * (jogadasCPUNv7.length - 1)) + 1;
                        // Usuario escolhe Pedra
                        if (playerChange == "pedra" && CPUChange == 1) {
                            pedraXpedra();
                        };
                        if (playerChange == "pedra" && CPUChange == 2) {
                            pedraXpapel();
                        };
                        if (playerChange == "pedra" && CPUChange == 3) {
                            pedraXtesoura();
                        };
                        if (playerChange == "pedra" && CPUChange == 4) {
                            pedraXesponja();
                        };
                        if (playerChange == "pedra" && CPUChange == 5) {
                            pedraXar();
                        };
                        if (playerChange == "pedra" && CPUChange == 6) {
                            pedraXagua();
                        };
                        if (playerChange == "pedra" && CPUChange == 7) {
                            pedraXfogo();
                        };
                        if (playerChange == "pedra" && CPUChange == 8) {
                            pedraXfogo();
                        };
                        
                        // Usuario escolhe Papel
                        if (playerChange == "papel" && CPUChange == 1) {
                            papelXpedra();
                        };
                        if (playerChange == "papel" && CPUChange == 2) {
                            papelXpapel();
                        };
                        if (playerChange == "papel" && CPUChange == 3) {
                            papelXtesoura();
                        };
                        if (playerChange == "papel" && CPUChange == 4) {
                            papelXesponja();
                        };
                        if (playerChange == "papel" && CPUChange == 5) {
                            papelXar();
                        };
                        if (playerChange == "papel" && CPUChange == 6) {
                            papelXagua();
                        };
                        if (playerChange == "papel" && CPUChange == 7) {
                            papelXfogo();
                        };
                        if (playerChange == "papel" && CPUChange == 8) {
                            papelXfogo();
                        };

                        // Usuario escolhe Tesoura
                        if (playerChange == "tesoura" && CPUChange == 1) {
                            tesouraXpedra();
                        };
                        if (playerChange == "tesoura" && CPUChange == 2) {
                            tesouraXpapel();
                        };
                        if (playerChange == "tesoura" && CPUChange == 3) {
                            tesouraXtesoura();
                        };
                        if (playerChange == "tesoura" && CPUChange == 4) {
                            tesouraXesponja();
                        };
                        if (playerChange == "tesoura" && CPUChange == 5) {
                            tesouraXar();
                        };
                        if (playerChange == "tesoura" && CPUChange == 6) {
                            tesouraXagua();
                        };
                        if (playerChange == "tesoura" && CPUChange == 7) {
                            tesouraXfogo();
                        };
                        if (playerChange == "tesoura" && CPUChange == 8) {
                            tesouraXfogo();
                        };

                        // Usuario escolhe Esponja
                        if (playerChange == "esponja" && CPUChange == 1) {
                            esponjaXpedra();
                        };
                        if (playerChange == "esponja" && CPUChange == 2) {
                            esponjaXpapel();
                        };
                        if (playerChange == "esponja" && CPUChange == 3) {
                            esponjaXtesoura();
                        };
                        if (playerChange == "esponja" && CPUChange == 4) {
                            esponjaXesponja();
                        };
                        if (playerChange == "esponja" && CPUChange == 5) {
                            esponjaXar();
                        };
                        if (playerChange == "esponja" && CPUChange == 6) {
                            esponjaXagua();
                        };
                        if (playerChange == "esponja" && CPUChange == 7) {
                            esponjaXfogo();
                        };
                        if (playerChange == "esponja" && CPUChange == 8) {
                            esponjaXfogo();
                        };

                        // Usuario escolhe Ar
                        if (playerChange == "ar" && CPUChange == 1) {
                            arXpedra();
                        };
                        if (playerChange == "ar" && CPUChange == 2) {
                            arXpapel();
                        };
                        if (playerChange == "ar" && CPUChange == 3) {
                            arXtesoura();
                        };
                        if (playerChange == "ar" && CPUChange == 4) {
                            arXesponja();
                        };
                        if (playerChange == "ar" && CPUChange == 5) {
                            arXar();
                        };
                        if (playerChange == "ar" && CPUChange == 6) {
                            arXagua();
                        };
                        if (playerChange == "ar" && CPUChange == 7) {
                            arXfogo();
                        };
                        if (playerChange == "ar" && CPUChange == 8) {
                            arXfogo();
                        };

                        // Usuario escolhe Água
                        if (playerChange == "agua" && CPUChange == 1) {
                            aguaXpedra();
                        };
                        if (playerChange == "agua" && CPUChange == 2) {
                            aguaXpapel();
                        };
                        if (playerChange == "agua" && CPUChange == 3) {
                            aguaXtesoura();
                        };
                        if (playerChange == "agua" && CPUChange == 4) {
                            aguaXesponja();
                        };
                        if (playerChange == "agua" && CPUChange == 5) {
                            aguaXar();
                        };
                        if (playerChange == "agua" && CPUChange == 6) {
                            aguaXagua();
                        };
                        if (playerChange == "agua" && CPUChange == 7) {
                            aguaXfogo();
                        };
                        if (playerChange == "agua" && CPUChange == 8) {
                            aguaXfogo();
                        };

                        // Usuario escolhe Fogo
                        if (playerChange == "fogo" && CPUChange == 1) {
                            fogoXpedra();
                        };
                        if (playerChange == "fogo" && CPUChange == 2) {
                            fogoXpapel();
                        };
                        if (playerChange == "fogo" && CPUChange == 3) {
                            fogoXtesoura();
                        };
                        if (playerChange == "fogo" && CPUChange == 4) {
                            fogoXesponja();
                        };
                        if (playerChange == "fogo" && CPUChange == 5) {
                            fogoXar();
                        };
                        if (playerChange == "fogo" && CPUChange == 6) {
                            fogoXagua();
                        };
                        if (playerChange == "fogo" && CPUChange == 7) {
                            fogoXfogo();
                        };
                        if (playerChange == "fogo" && CPUChange == 8) {
                            fogoXfogo();
                        };

                        // ####### Verificando se a partida ja chegou no final #######
                        verificarFinish(300, 300, 150, 60);
                        playButton();
                    }, 2000); // <---- Tempo para pausar evento      
                };
            } else {
                resumo();
            };
        } else {
            titleChange.innerHTML = "Jogada em andamento. Por favor aguarde.";
        };
    };
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
    if (EXP >= 300 && nivel == 1) {
        nivel = 2;
        PJ = PJ + 1;
        menuPJ.innerHTML = PJ;
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`;
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`;
        nivelUpSubDescri.innerHTML = `+ 1 Slot de Jogada liberado.`;
        displayNivelUp.style.display = "block";
        totalJogadasMax = totalJogadasMax + 1;
        jogSlot1.style.display = "inline-block";
    }
    //Verificar Nivel Up (Nivel 3)
    if (EXP >= 800 && nivel == 2) {
        nivel = 3;
        PJ = PJ + 1;
        menuPJ.innerHTML = PJ;
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`;
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`;
        nivelUpSubDescri.innerHTML = `Batalha Nivel 2 Desbloqueado`;
        displayNivelUp.style.display = "block";
        butBatalhaNivel2style.display = "inline-block"
    }
    //Verificar Nivel Up (Nivel 4)
    if (EXP >= 1500 && nivel == 3) {
        nivel = 4;
        PJ = PJ + 1;
        menuPJ.innerHTML = PJ;
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`;
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`;
        nivelUpSubDescri.innerHTML = `Batalha Nivel 3 Desbloqueado`;
        displayNivelUp.style.display = "block";
        butBatalhaNivel3style.display = "inline-block"
    }
    //Verificar Nivel Up (Nivel 5)
    if (EXP >= 2400 && nivel == 4) {
        nivel = 5;
        PJ = PJ + 1;
        menuPJ.innerHTML = PJ;
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`;
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`;
        nivelUpSubDescri.innerHTML = `+ 1 Slot de Jogada liberado.`;
        displayNivelUp.style.display = "block";
        totalJogadasMax = totalJogadasMax + 1;
        jogSlot2.style.display = "inline-block";
    }
    //Verificar Nivel Up (Nivel 6)
    if (EXP >= 3500 && nivel == 5) {
        nivel = 6;
        PJ = PJ + 1;
        menuPJ.innerHTML = PJ;
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`;
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`;
        nivelUpSubDescri.innerHTML = `Batalha Nivel 4 Desbloqueado`;
        displayNivelUp.style.display = "block";
        butBatalhaNivel4style.display = "inline-block"
    }
    //Verificar Nivel Up (Nivel 7)
    if (EXP >= 4800 && nivel == 6) {
        nivel = 7;
        PJ = PJ + 1;
        menuPJ.innerHTML = PJ;
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`;
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`;
        nivelUpSubDescri.innerHTML = `Batalha Nivel 5 Desbloqueado`;
        displayNivelUp.style.display = "block";
        butBatalhaNivel5style.display = "inline-block"
    }
    //Verificar Nivel Up (Nivel 8)
    if (EXP >= 6300 && nivel == 7) {
        nivel = 8;
        PJ = PJ + 1;
        menuPJ.innerHTML = PJ;
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`;
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`;
        nivelUpSubDescri.innerHTML = `+ 1 Slot de Jogada liberado.`;
        displayNivelUp.style.display = "block";
        totalJogadasMax = totalJogadasMax + 1;
        jogSlot3.style.display = "inline-block";
    }
    //Verificar Nivel Up (Nivel 9)
    if (EXP >= 8000 && nivel == 8) {
        nivel = 9
        PJ = PJ + 1
        menuPJ.innerHTML = PJ;
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`;
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`;
        nivelUpSubDescri.innerHTML = `Batalha Nivel 6 e + 1 Slot de Jogada liberado.`;
        jogSlot4.style.display = "inline-block";
        butBatalhaNivel6style.display = "inline-block"
    }
    //Verificar Nivel Up (Nivel 10)
    if (EXP >= 9900 && nivel == 9) {
        nivel = 10;
        PJ = PJ + 1;
        menuPJ.innerHTML = PJ;
        battleFinishDescri2.innerHTML = `Pontos de Jogada + 1`;
        nivelUpDescri.innerHTML = `Parabens! Você agora está no Nivel ${nivel}`;
        nivelUpSubDescri.innerHTML = `Batalha Final Desbloqueado`;
        displayNivelUp.style.display = "block";
        totalJogadasMax = totalJogadasMax + 1;
        butBatalhaNivel7style.display = "inline-block"
    }

    // Resetando Batalha
    batalha = false;
    playerChange = false;
    titleChange.innerHTML = "Escolha uma dessas jogadas";
    butJogar.value = "Jogar!";
    partida = "off";
    displayBatalha.style.display = "none";
    displayBattleFinish.style.display = "block";
    menuEXP.innerHTML = EXP;
    menuNivel.innerHTML = `${nivel}`;
    playerPlacarFinal.innerHTML = `${playerScore}`;
    CPUPlacarFinal.innerHTML = `${CPUScore}`;
    imgCPU.src = "imagens/noChange.png";
    changePlayer.src = "imagens/noChange.png";
    jogArEspecial = 2;
    jogAguaEspecial = 2;
    changeAr.src = "imagens/jogadas/ar2.png";
    changeAgua.src = "imagens/jogadas/agua2.png";
}
// Display Battle Finish (botão de nova batalha)
butBattleChange.addEventListener("click", t => {
    playerScore = 0;
    CPUScore = 0;
    batalhaNivel = 0;
    playerPlacar.innerHTML = `${playerScore}`;
    CPUPlacar.innerHTML = `${CPUScore}`;
    consoleGame.innerHTML = "";
    consoleGameDescri.innerHTML = "";
    displayNivelUp.style.display = "none";
    displayBattleFinish.style.display = "none";
    butBatalhaNivel1.style.display = "inline-block";
    butBatalhaNivel2.style.display = "inline-block";
    butBatalhaNivel3.style.display = "inline-block";
    butBatalhaNivel4.style.display = "inline-block";
    butBatalhaNivel5.style.display = "inline-block";
    butBatalhaNivel6.style.display = "inline-block";
    butBatalhaNivel7.style.display = "inline-block";
    nivelUpDescri.innerHTML = ``;
    nivelUpSubDescri.innerHTML = ``;
    battleFinishDescri2.innerHTML = ``;
})

// ####### Funções Chamadas #######
function playButton() {
    if (start == "on") {
        start = "off";
    } else {
        start = "on";
    };
}
function iniciarBatalha() {
    batalha = true;
    displayBatalha.style.display = "block";
    butBatalhaNivel1.style.display = "none";
    butBatalhaNivel2.style.display = "none";
    butBatalhaNivel3.style.display = "none";
    butBatalhaNivel4.style.display = "none";
    butBatalhaNivel5.style.display = "none";
    butBatalhaNivel6.style.display = "none";
    butBatalhaNivel7.style.display = "none";
}