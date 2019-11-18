// Usuário escolhe Pedra
function pedraXpedra() {
    imgCPU.src = "imagens/jogadas/pedra.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "Infelizmente as duas Pedras se quebraram.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
}
function pedraXpapel() {
    imgCPU.src = "imagens/jogadas/papel.png";
    consoleGame.innerHTML = "DERROTA!";
    consoleGameDescri.innerHTML = "A sua Pedra foi embrulhada pelo Papel.";
    CPUScore = CPUScore + 10;
}
function pedraXtesoura() {
    imgCPU.src = "imagens/jogadas/tesoura.png";
    consoleGame.innerHTML = "VITÓRIA!";
    consoleGameDescri.innerHTML = "A sua Pedra quebrou a Tesoura.";
    playerScore = playerScore + 10;
}
function pedraXesponja() {
    imgCPU.src = "imagens/jogadas/esponja.png";
    consoleGame.innerHTML = "DERROTA!";
    consoleGameDescri.innerHTML = "A Esponja absorveu o impacto da sua Pedra.";
    CPUScore = CPUScore + 10;
}
function pedraXar() {
    imgCPU.src = "imagens/jogadas/ar.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "A sua Pedra não causa dano no Ar e nem recebe.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
}
function pedraXagua() {
    imgCPU.src = "imagens/jogadas/agua.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "A sua Pedra não causa dano na Água e nem recebe.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
}
function pedraXfogo() {
    imgCPU.src = "imagens/jogadas/fogo.png";
    consoleGame.innerHTML = "VITÓRIA!";
    consoleGameDescri.innerHTML = "A sua Pedra apagou o Fogo.";
    playerScore = playerScore + 10;
}

// Usuário escolhe papel
function papelXpedra() {
    imgCPU.src = "imagens/jogadas/pedra.png";
    consoleGame.innerHTML = "VITÓRIA!";
    consoleGameDescri.innerHTML = "O seu Papel embrulhou a Pedra.";
    playerScore = playerScore + 10;
}
function papelXpapel() {
    imgCPU.src = "imagens/jogadas/papel.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "Os dois Papeis se rasgaram.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
}
function papelXtesoura() {
    imgCPU.src = "imagens/jogadas/tesoura.png";
    consoleGame.innerHTML = "DERROTA!";
    consoleGameDescri.innerHTML = "O seu Papel foi cortado pela Tesoura.";
    CPUScore = CPUScore + 10;
}
function papelXesponja() {
    imgCPU.src = "imagens/jogadas/esponja.png";
    consoleGame.innerHTML = "VITÓRIA!";
    consoleGameDescri.innerHTML = "O seu Papel embrulhou a Esponja.";
    playerScore = playerScore + 10;
}
function papelXar() {
    imgCPU.src = "imagens/jogadas/ar.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "O seu Papel não causa dano no Ar e nem recebe.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
}
function papelXagua() {
    imgCPU.src = "imagens/jogadas/agua.png";
    consoleGame.innerHTML = "DERROTA!";
    consoleGameDescri.innerHTML = "O seu Papel foi molhado pela Água e se rasgou.";
    CPUScore = CPUScore + 10;
}
function papelXfogo() {
    imgCPU.src = "imagens/jogadas/fogo.png";
    consoleGame.innerHTML = "DERROTA!!!!";
    consoleGameDescri.innerHTML = "Critíco! O seu Papel foi queimado com facilidade. Seu inimigo ganhou + 5 Pontos de Bônus.";
    CPUScore = CPUScore + 15;
}

// Usuário escolhe tesoura
function tesouraXpedra() {
    imgCPU.src = "imagens/jogadas/pedra.png";
    consoleGame.innerHTML = "DERROTA!";
    consoleGameDescri.innerHTML = "A sua Tesoura foi quebrada pela Pedra.";
    CPUScore = CPUScore + 10;
}
function tesouraXpapel() {
    imgCPU.src = "imagens/jogadas/papel.png";
    consoleGame.innerHTML = "VITÓRIA!";
    consoleGameDescri.innerHTML = "A sua Tesoura cortou o Papel.";
    playerScore = playerScore + 10;
}
function tesouraXtesoura() {
    imgCPU.src = "imagens/jogadas/tesoura.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "As duas Tesouras se cortaram.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
}
function tesouraXesponja() {
    imgCPU.src = "imagens/jogadas/esponja.png";
    consoleGame.innerHTML = "VITÓRIA!";
    consoleGameDescri.innerHTML = "A sua Tesoura cortou a Esponja.";
    playerScore = playerScore + 10;
}
function tesouraXar() {
    imgCPU.src = "imagens/jogadas/ar.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "O sua Tesoura não causa dano no Ar e nem recebe.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function tesouraXagua() {
    imgCPU.src = "imagens/jogadas/agua.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "O sua Tesoura não causa dano na Água e nem recebe.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function tesouraXfogo() {
    imgCPU.src = "imagens/jogadas/fogo.png";
    consoleGame.innerHTML = "DERROTA!";
    consoleGameDescri.innerHTML = "A sua Tesoura foi derretida pelo Fogo.";
    CPUScore = CPUScore + 10;
};

// Usuário escolhe esponja
function esponjaXpedra() {
    imgCPU.src = "imagens/jogadas/pedra.png";
    consoleGame.innerHTML = "VITÓRIA!";
    consoleGameDescri.innerHTML = "A sua Esponja absorveu o impacto da Pedra.";
    playerScore = playerScore + 10;
};
function esponjaXpapel() {
    imgCPU.src = "imagens/jogadas/papel.png";
    consoleGame.innerHTML = "DERROTA!";
    consoleGameDescri.innerHTML = "A sua Esponja foi embrulhada pelo Papel.";
    CPUScore = CPUScore + 10; 
};
function esponjaXtesoura() {
    imgCPU.src = "imagens/jogadas/tesoura.png";
    consoleGame.innerHTML = "DERROTA!";
    consoleGameDescri.innerHTML = "A sua Esponja foi cortada pela Tesoura.";
    CPUScore = CPUScore + 10;
};
function esponjaXesponja() {
    imgCPU.src = "imagens/jogadas/esponja.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "As duas esponjas não causam e nem recebe dano.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function esponjaXar() {
    imgCPU.src = "imagens/jogadas/ar.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "O sua Esponja não causa dano no Ar e nem recebe.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function esponjaXagua() {
    imgCPU.src = "imagens/jogadas/agua.png";
    consoleGame.innerHTML = "VITÓRIA!";
    consoleGameDescri.innerHTML = "A sua Esponja absorveu a Água.";
    playerScore = playerScore + 10;
};
function esponjaXfogo() {
    imgCPU.src = "imagens/jogadas/fogo.png";
    consoleGame.innerHTML = "VIDERROTATÓRIA!";
    consoleGameDescri.innerHTML = "A sua Esponja foi queimada pelo Fogo.";
    CPUScore = CPUScore + 10;
};

// Usuário escolhe ar
function arXpedra() {
    imgCPU.src = "imagens/jogadas/pedra.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "O seu Ar não causa e nem recebe dano da Pedra.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function arXpapel() {
    imgCPU.src = "imagens/jogadas/papel.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "O seu Ar não causa e nem recebe dano do Papel.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function arXtesoura() {
    imgCPU.src = "imagens/jogadas/tesoura.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "O seu Ar não causa e nem recebe dano da Tesoura.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function arXesponja() {
    imgCPU.src = "imagens/jogadas/esponja.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "O seu Ar não causam e nem recebe dano da Esponja.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function arXar() {
    imgCPU.src = "imagens/jogadas/ar.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "O seu Ar não causam e nem recebe dano de outro Ar.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function arXagua() {
    imgCPU.src = "imagens/jogadas/agua.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "O seu Ar não causam e nem recebe dano da Água.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function arXfogo() {
    imgCPU.src = "imagens/jogadas/fogo.png";
    consoleGame.innerHTML = "VITÓRIA!";
    consoleGameDescri.innerHTML = "O seu Ar apagou o Fogo.";
    playerScore = playerScore + 10;
};

// Usuário escolhe agua
function aguaXpedra() {
    imgCPU.src = "imagens/jogadas/pedra.png"
    consoleGame.innerHTML = "VITÓRIA!"
    consoleGameDescri.innerHTML = "Água mole em Pedra dura tanto bate até que fura.";
    playerScore = playerScore + 10
};
function aguaXpapel() {
    imgCPU.src = "imagens/jogadas/papel.png";
    consoleGame.innerHTML = "VITÓRIA!";
    consoleGameDescri.innerHTML = "A sua Água molhou o Papel, e o Papel se rasgou.";
    playerScore = playerScore + 10;
};
function aguaXtesoura() {
    imgCPU.src = "imagens/jogadas/tesoura.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "A sua Água não causa e nem recebe dano da Tesoura.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function aguaXesponja() {
    imgCPU.src = "imagens/jogadas/esponja.png";
    consoleGame.innerHTML = "DERROTA!";
    consoleGameDescri.innerHTML = "A sua Água foi absorvida pela Esponja.";
    CPUScore = CPUScore + 10;
};
function aguaXar() {
    imgCPU.src = "imagens/jogadas/ar.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "A sua Água não causam e nem recebe dano no Ar.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function aguaXagua() {
    imgCPU.src = "imagens/jogadas/agua.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "A sua Água não causam e nem recebe dano em outra Água.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;
};
function aguaXfogo() {
    imgCPU.src = "imagens/jogadas/fogo.png";
    consoleGame.innerHTML = "VITÓRIA!!!";
    consoleGameDescri.innerHTML = "Critíco! A sua Água apagou o fogo com facilidade. Você ganhou + 5 Pontos de Bônus.";
    playerScore = playerScore + 15;
};

// Usuário escolhe fogo
function fogoXpedra() {
    imgCPU.src = "imagens/jogadas/pedra.png";
    consoleGame.innerHTML = "DERROTA!";
    consoleGameDescri.innerHTML = "A Pedra é grande e apagou o seu Fogo.";
    CPUScore = CPUScore + 10;
};
function fogoXpapel() {
    imgCPU.src = "imagens/jogadas/papel.png";
    consoleGame.innerHTML = "VITÓRIA!!!";
    consoleGameDescri.innerHTML = "Critíco! O seu Fogo Queimou o Papel com facilidade. Você ganhou + 5 Pontos de Bônus.";
    playerScore = playerScore + 15;
};
function fogoXtesoura() {
    imgCPU.src = "imagens/jogadas/tesoura.png";
    consoleGame.innerHTML = "VITÓRIA!";
    consoleGameDescri.innerHTML = "O seu Fogo derreteu a Tesoura.";
    playerScore = playerScore + 10;
};
function fogoXesponja() {
    imgCPU.src = "imagens/jogadas/esponja.png";
    consoleGame.innerHTML = "VITÓRIA!";
    consoleGameDescri.innerHTML = "O seu Fogo queimou a Esponja.";
    playerScore = playerScore + 10;
};
function fogoXar() {
    imgCPU.src = "imagens/jogadas/ar.png";
    consoleGame.innerHTML = "DERROTA!";
    consoleGameDescri.innerHTML = "O seu Fogo foi apagado pelo Ar.";
    CPUScore = CPUScore + 10;
};
function fogoXagua() {
    imgCPU.src = "imagens/jogadas/agua.png";
    consoleGame.innerHTML = "DERROTA!";
    consoleGameDescri.innerHTML = "Critíco! O seu Fogo foi apagado pela Água com facilidade. Seu inimigo ganhou + 5 Pontos de Bônus.";
    CPUScore = CPUScore + 15;
};
function fogoXfogo() {
    imgCPU.src = "imagens/jogadas/fogo.png";
    consoleGame.innerHTML = "EMPATE!";
    consoleGameDescri.innerHTML = "O seu Fogo não causam e nem recebe dano em outro Fogo.";
    playerScore = playerScore + 5;
    CPUScore = CPUScore + 5;    
};