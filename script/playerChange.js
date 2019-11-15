// Escolhendo Jogada
changePedra.addEventListener("click", t => {
    if (partida == "off" && start == "off") {
        changePlayer.src = "imagens/pedra.png";
        playerChange = "pedra";
        consoleGame.innerHTML = ""
    } else {
        titleChange.innerHTML = "Clique em \"Outra Partida\" para poder escolher uma jogada"
    }
})
changePapel.addEventListener("click", t => {
    if (partida == "off" && start == "off") {
        changePlayer.src = "imagens/papel.png";
        playerChange = "papel";
        consoleGame.innerHTML = "";
    } else {
        titleChange.innerHTML = "Clique em \"Outra Partida\" para poder escolher uma jogada"
    }
})
changeTesoura.addEventListener("click", t => {
    if (partida == "off" && start == "off") {
        changePlayer.src = "imagens/tesoura.png";
        playerChange = "tesoura";
        consoleGame.innerHTML = "";
    } else {
        titleChange.innerHTML = "Clique em \"Outra Partida\" para poder escolher uma jogada"
    }
})