// Abrir e Fechar popup de Menu Jogadas
divMenuJogadas.addEventListener("click", t => menuJogadasDisplay.style.display = "flex");
popupclose.addEventListener("click", t => menuJogadasDisplay.style.display = "none");

/* Mostrar descrição na popup ao passar mouse nas jogadas */
imgJogPedraTrue.addEventListener("mousemove", menuJogadasDescriChange("Pedra", "Vitória: Tesoura, Fogo", "Empate: Pedra, Esponja, Água, Ar", "Derrota: Papel", ""));
imgJogPapelTrue.addEventListener("mousemove", menuJogadasDescriChange("Papel", "Vitória: Esponja, Papel", "Empate: Tesoura , Ar, Água", "Derrota: Pedra, Fogo", ""));
imgJogTesouraTrue.addEventListener("mousemove", menuJogadasDescriChange("Tesoura", "Vitória: Pedra, Esponja", "Empate: Papel, Ar", "Derrota: Tesoura, Fogo, Água", ""));
imgJogEsponjaTrue.addEventListener("mousemove", menuJogadasDescriChange("Esponja", "Vitória: Água,", "Empate:  Esponja,  Pedra,  Ar", "Derrota:  Fogo, Tesoura, Papel", ""));
imgJogArTrue.addEventListener("mousemove", menuJogadasDescriChange("Ar", "Vitória:  Fogo", "Empate:  Ar,  Papel,  Pedra,  Água,  Esponja,  Tesoura", "Derrota: ", "Observação: Só pode usar 2 vezes"));
imgJogAguaTrue.addEventListener("mousemove", menuJogadasDescriChange("Água", "Vitória:  Papel,  Fogo", "Empate: Água, Pedra,  Ar,  Tesoura", "Derrota:  Esponja", "Observação: Só pode usar 2 vezes"));
imgJogFogoTrue.addEventListener("mousemove", menuJogadasDescriChange("Fogo", "Vitória: Tesoura, Esponja, Papel", "Empate: Fogo, Água", "Derrota: Ar, Pedra", "Crítico: Papel (+5 Pontos)"));
imgJogEsponjaFalse.addEventListener("mousemove", menuJogadasDescriChange("Esponja", "Vitória: Água,", "Empate:  Esponja,  Pedra,  Ar", "Derrota:  Fogo, Tesoura, Papel", ""));
imgJogArFalse.addEventListener("mousemove", menuJogadasDescriChange("Ar", "Vitória:  Fogo", "Empate:  Ar,  Papel,  Pedra,  Água,  Esponja,  Tesoura", "Derrota: ", "Observação: Só pode usar 2 vezes"));
imgJogAguaFalse.addEventListener("mousemove", menuJogadasDescriChange("Água", "Vitória:  Papel,  Fogo", "Empate: Água, Pedra,  Ar,  Tesoura", "Derrota:  Esponja", "Observação: Só pode usar 2 vezes"));
imgJogFogoFalse.addEventListener("mousemove", menuJogadasDescriChange("Fogo", "Vitória: Tesoura, Esponja, Papel", "Empate: Fogo, Água", "Derrota: Ar, Pedra", "Crítico: Papel (+5 Pontos)"));

// ####### Adicionar novas Jogadas #######
// Esponja
imgJogEsponjaFalse.addEventListener("click", t => {
        if (batalha == false) {
                if (jogadasPlayerEsponja == "comprar") {
                        if (PJ >= 1) {
                                alert('Parabens! Você comprou a Jogada "Esponja"')
                                PJ = PJ - 1
                                menuPJ.innerHTML = PJ
                                jogEsponjaFalse.style.opacity = "90%"
                                jogadasPlayerEsponja = false;
                                jogEsponjaFalse.style.display = "inline-block";
                        } else {
                                alert(`ERRO! Você tem ${PJ} PJ, e você precisa de 1 PJ para comprar esta Jogada`)
                        }
                } else {
                        if (totalJogadas < totalJogadasMax) {
                                if (slot1 == false) {
                                        jogSlot1.style.display = "none"
                                        slot1 = true
                                } else if (slot2 == false){
                                        jogSlot2.style.display = "none"
                                        slot2 = true
                                } else if (slot3 == false){
                                        jogSlot3.style.display = "none"
                                        slot3 = true
                                } else if (slot4 == false){
                                        jogSlot4.style.display = "none"
                                        slot4 = true
                                }
                                jogadasPlayerEsponja = true;
                                jogEsponjaFalse.style.display = "none";
                                jogEsponjaTrue.style.display = "inline-block";
                                changeEsponja.style.display = "inline-block";
                                totalJogadas = totalJogadas + 1
                        } else {
                                alert(`O número maximo de Jogadas para cada Batalha é ${totalJogadasMax}.`)
                        }
                }
        } else {
                alert("ERRO! Batalha em andamento. Por favor, termine a Batalha antes de mudar as suas jogadas.")
        }
})
imgJogEsponjaTrue.addEventListener("click", t => {
        if (batalha == false) {
                if (slot1 == true) {
                        jogSlot1.style.display = "inline-block"
                        slot1 = false
                } else if (slot2 == true){
                        jogSlot2.style.display = "inline-block"
                        slot2 = false
                } else if (slot3 == true){
                        jogSlot3.style.display = "inline-block"
                        slot3 = false
                } else if (slot4 == true){
                        jogSlot4.style.display = "inline-block"
                        slot4 = false
                }
                totalJogadas = totalJogadas - 1
                jogadasPlayerEsponja = false;
                jogEsponjaFalse.style.display = "inline-block";
                jogEsponjaTrue.style.display = "none";
                changeEsponja.style.display = "none"
        } else {
                alert("ERRO! Batalha em andamento. Por favor, termine a Batalha antes de mudar as suas jogadas.")
        }
})

// Ar
imgJogArFalse.addEventListener("click", t => {
        if (batalha == false) {
                if (jogadasPlayerAr == "comprar") {
                        if (PJ >= 2) {
                                alert('Parabens! Você comprou a Jogada "Ar"')
                                PJ = PJ - 2
                                menuPJ.innerHTML = PJ
                                jogArFalse.style.opacity = "90%"
                                jogadasPlayerAr = false;
                                jogArFalse.style.display = "inline-block";
                        } else {
                                alert(`ERRO! Você tem ${PJ} PJ, e você precisa de 2 PJ para comprar esta Jogada`)
                        }
                } else {
                        if (totalJogadas < totalJogadasMax) {
                                if (slot1 == false) {
                                        jogSlot1.style.display = "none"
                                        slot1 = true
                                } else if (slot2 == false){
                                        jogSlot2.style.display = "none"
                                        slot2 = true
                                } else if (slot3 == false){
                                        jogSlot3.style.display = "none"
                                        slot3 = true
                                } else if (slot4 == false){
                                        jogSlot4.style.display = "none"
                                        slot4 = true
                                }
                                jogadasPlayerAr = true;
                                jogArFalse.style.display = "none";
                                jogArTrue.style.display = "inline-block";
                                changeAr.style.display = "inline-block";
                        } else {
                                alert(`O número maximo de Jogadas para cada Batalha é ${totalJogadasMax}.`)
                        }
                }
        } else {
                alert("ERRO! Batalha em andamento. Por favor, termine a Batalha antes de mudar as suas jogadas.")
        }
})
imgJogArTrue.addEventListener("click", t => {
        if (slot1 == true) {
                jogSlot1.style.display = "inline-block"
                slot1 = false
        } else if (slot2 == true){
                jogSlot2.style.display = "inline-block"
                slot2 = false
        } else if (slot3 == true){
                jogSlot3.style.display = "inline-block"
                slot3 = false
        } else if (slot4 == true){
                jogSlot4.style.display = "inline-block"
                slot4 = false
        }
        if (batalha == false) {
                jogadasPlayerAr = false;
                jogArFalse.style.display = "inline-block";
                jogArTrue.style.display = "none";
                changeAr.style.display = "none"
        } else {
                alert("ERRO! Batalha em andamento. Por favor, termine a Batalha antes de mudar as suas jogadas.")
        }
})

// Agua
imgJogAguaFalse.addEventListener("click", t => {
        if (batalha == false) {
                if (jogadasPlayerAgua == "comprar") {
                        if (PJ >= 2) {
                                alert('Parabens! Você comprou a Jogada "Agua"')
                                PJ = PJ - 2
                                menuPJ.innerHTML = PJ
                                jogAguaFalse.style.opacity = "90%"
                                jogadasPlayerAgua = false;
                                jogAguaFalse.style.display = "inline-block";
                        } else {
                                alert(`ERRO! Você tem ${PJ} PJ, e você precisa de 2 PJ para comprar esta Jogada`)
                        }
                } else {
                        if (totalJogadas < totalJogadasMax) {
                                if (slot1 == false) {
                                        jogSlot1.style.display = "none"
                                        slot1 = true
                                } else if (slot2 == false){
                                        jogSlot2.style.display = "none"
                                        slot2 = true
                                } else if (slot3 == false){
                                        jogSlot3.style.display = "none"
                                        slot3 = true
                                } else if (slot4 == false){
                                        jogSlot4.style.display = "none"
                                        slot4 = true
                                }
                                jogadasPlayerAgua = true;
                                jogAguaFalse.style.display = "none";
                                jogAguaTrue.style.display = "inline-block";
                                changeAgua.style.display = "inline-block";
                        } else {
                                alert(`O número maximo de Jogadas para cada Batalha é ${totalJogadasMax}.`)
                        }
                }
        } else {
                alert("ERRO! Batalha em andamento. Por favor, termine a Batalha antes de mudar as suas jogadas.")
        }
})
imgJogAguaTrue.addEventListener("click", t => {
        if (slot1 == true) {
                jogSlot1.style.display = "inline-block"
                slot1 = false
        } else if (slot2 == true){
                jogSlot2.style.display = "inline-block"
                slot2 = false
        } else if (slot3 == true){
                jogSlot3.style.display = "inline-block"
                slot3 = false
        } else if (slot4 == true){
                jogSlot4.style.display = "inline-block"
                slot4 = false
        }
        if (batalha == false) {
                jogadasPlayerAgua = false;
                jogAguaFalse.style.display = "inline-block";
                jogAguaTrue.style.display = "none";
                changeAgua.style.display = "none"
        } else {
                alert("ERRO! Batalha em andamento. Por favor, termine a Batalha antes de mudar as suas jogadas.")
        }
})

// Fogo
imgJogFogoFalse.addEventListener("click", t => {
        if (batalha == false) {
                if (jogadasPlayerFogo == "comprar") {
                        if (PJ >= 2) {
                                alert('Parabens! Você comprou a Jogada "Fogo"')
                                PJ = PJ - 2
                                menuPJ.innerHTML = PJ
                                jogFogoFalse.style.opacity = "90%"
                                jogadasPlayerFogo = false;
                                jogFogoFalse.style.display = "inline-block";
                        } else {
                                alert(`ERRO! Você tem ${PJ} PJ, e você precisa de 3 PJ para comprar esta Jogada`)
                        }
                } else {
                        if (totalJogadas < totalJogadasMax) {
                                if (slot1 == false) {
                                        jogSlot1.style.display = "none"
                                        slot1 = true
                                } else if (slot2 == false){
                                        jogSlot2.style.display = "none"
                                        slot2 = true
                                } else if (slot3 == false){
                                        jogSlot3.style.display = "none"
                                        slot3 = true
                                } else if (slot4 == false){
                                        jogSlot4.style.display = "none"
                                        slot4 = true
                                }
                                jogadasPlayerFogo = true;
                                jogFogoFalse.style.display = "none";
                                jogFogoTrue.style.display = "inline-block";
                                changeFogo.style.display = "inline-block";
                        } else {
                                alert(`O número maximo de Jogadas para cada Batalha é ${totalJogadasMax}.`)
                        }
                }
        } else {
                alert("ERRO! Batalha em andamento. Por favor, termine a Batalha antes de mudar as suas jogadas.")
        }
})
imgJogFogoTrue.addEventListener("click", t => {
        if (slot1 == true) {
                jogSlot1.style.display = "inline-block"
                slot1 = false
        } else if (slot2 == true){
                jogSlot2.style.display = "inline-block"
                slot2 = false
        } else if (slot3 == true){
                jogSlot3.style.display = "inline-block"
                slot3 = false
        } else if (slot4 == true){
                jogSlot4.style.display = "inline-block"
                slot4 = false
        }
        if (batalha == false) {
                jogadasPlayerFogo = false;
                jogFogoFalse.style.display = "inline-block";
                jogFogoTrue.style.display = "none";
                changeFogo.style.display = "none"
        } else {
                alert("ERRO! Batalha em andamento. Por favor, termine a Batalha antes de mudar as suas jogadas.")
        }
})

/* ########### Funções Prontas ########### */
// Alterar descrição na popup
function menuJogadasDescriChange(titulo, ganha, empata, perde, critico) {
        return _ => {
                jogDescriTitulo.innerHTML = titulo;
                jogDescri1.innerHTML = ganha;
                jogDescri2.innerHTML = empata;
                jogDescri3.innerHTML = perde;
                jogDescri4.innerHTML = critico;
        }
}