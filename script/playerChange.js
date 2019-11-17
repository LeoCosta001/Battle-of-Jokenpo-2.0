// ####### Escolhendo Jogada #######
// Pedra
imgPedra.addEventListener("click", t => {
    if (partida == "off" && start == "off") {
        changePlayer.src = "imagens/jogadas/pedra.png";
        playerChange = "pedra";
        consoleGame.innerHTML = "";
    } else {
        titleChange.innerHTML = "Clique em \"Outra Partida\" para poder escolher uma jogada";
    }
})
// Papel
imgPapel.addEventListener("click", t => {
    if (partida == "off" && start == "off") {
        changePlayer.src = "imagens/jogadas/papel.png";
        playerChange = "papel";
        consoleGame.innerHTML = "";
    } else {
        titleChange.innerHTML = "Clique em \"Outra Partida\" para poder escolher uma jogada";
    }
})
// Tesoura
imgTesoura.addEventListener("click", t => {
    if (partida == "off" && start == "off") {
        changePlayer.src = "imagens/jogadas/tesoura.png";
        playerChange = "tesoura";
        consoleGame.innerHTML = "";
    } else {
        titleChange.innerHTML = "Clique em \"Outra Partida\" para poder escolher uma jogada"
    }
})
// Esponja
imgEsponja.addEventListener("click", t => {
    if (partida == "off" && start == "off") {
        changePlayer.src = "imagens/jogadas/esponja.png";
        playerChange = "esponja";
        consoleGame.innerHTML = "";
    } else {
        titleChange.innerHTML = "Clique em \"Outra Partida\" para poder escolher uma jogada";
    }
})
// Ar
imgAr.addEventListener("click", t => {
    if (partida == "off" && start == "off") {
        // Verificar se aindatem Esta jogada disponivel
        if (jogArEspecial > 0) {
            changePlayer.src = "imagens/jogadas/ar.png";
            playerChange = "ar";
            consoleGame.innerHTML = "";
        } else {
            alert('Invelizmente você ja usou todas as jogadas de "Ar" disponiveis.')
        }
    } else {
        titleChange.innerHTML = "Clique em \"Outra Partida\" para poder escolher uma jogada";
    }
})
// Agua
imgAgua.addEventListener("click", t => {
    if (partida == "off" && start == "off") {
        // Verificar se aindatem Esta jogada disponivel
        if (jogAguaEspecial > 0) {
            changePlayer.src = "imagens/jogadas/agua.png";
            playerChange = "agua";
            consoleGame.innerHTML = "";
        } else {
            alert('Invelizmente você ja usou todas as jogadas de "Água" disponiveis.')
        }
    } else {
        titleChange.innerHTML = "Clique em \"Outra Partida\" para poder escolher uma jogada";
    }
})
// Fogo
imgFogo.addEventListener("click", t => {
    if (partida == "off" && start == "off") {
        changePlayer.src = "imagens/jogadas/fogo.png";
        playerChange = "fogo";
        consoleGame.innerHTML = "";
    } else {
        titleChange.innerHTML = "Clique em \"Outra Partida\" para poder escolher uma jogada";
    }
})