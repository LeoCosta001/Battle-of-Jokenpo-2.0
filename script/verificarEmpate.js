/*
ValMax = Valor Maximo de Pontos para acabar a partida
expVit = EXP Recebido pela vitória
expEmp = EXP Recebido pelo empate
expDer = EXP Recebido pela derrota
*/
function verificarFinish(valMax, expVit, expEmp, expDer) {
    if (playerScore >= valMax || CPUScore >= valMax) {
        playerPlacar.innerHTML = `${playerScore}`;
        CPUPlacar.innerHTML = `${CPUScore}`;
        butJogar.value = "Acabou!";
        // Verificar se deu empate
        if (playerScore == CPUScore) {
            battleFinishTitle.innerHTML = "Empatou!";
            battleFinishDescri1.innerHTML = `Exp + ${expEmp}`;
            playButton();
            window.setTimeout(function () {
                playButton();
                EXP = EXP + expEmp;
                battleFinish();
            }, 5000);
        } else {
            if (playerScore >= valMax) {
                battleFinishTitle.innerHTML = "Parabens! Você ganhou!";
                battleFinishDescri1.innerHTML = `Exp + ${expVit}`;
                playButton();
                window.setTimeout(function () {
                    playButton();
                    EXP = EXP + expVit;
                    battleFinish();
                }, 5000);
            };
            if (CPUScore >= valMax) {
                battleFinishTitle.innerHTML = "Você Perdeu!";
                battleFinishDescri1.innerHTML = `Exp + ${expDer}`;
                playButton();
                window.setTimeout(function () {
                    playButton();
                    EXP = EXP + expDer;
                    battleFinish();
                }, 5000);
            };
        };
    } else {
        playerPlacar.innerHTML = `${playerScore}`;
        CPUPlacar.innerHTML = `${CPUScore}`;
        partida = "on";
        butJogar.value = "Outra Partida";
    };
};