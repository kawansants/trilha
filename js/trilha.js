const prompt = require("prompt-sync")();

let jogadores = [
    { nome: "Fallen", pontuacao: 2500 },
    { nome: "Kscerato", pontuacao: 1800 },
    { nome: "Yuurih", pontuacao: 1600 }
];

function listarJogadores() {

    for (let i = 0; i < jogadores.length; i++) {
        console.log(jogadores[i].nome + " - " + jogadores[i].pontuacao + " pontos");
    }
}

function buscarJogador() {

    let nome = prompt("Qual jogador deseja buscar? ");

    for (let i = 0; i < jogadores.length; i++) {

        if (jogadores[i].nome == nome) {
            console.log("Jogador encontrado!");
            console.log("Pontuação: " + jogadores[i].pontuacao);
            return;
        }
    }

    console.log("Jogador não encontrado!");
}

function atualizarPontuacao() {

    console.log("--- ATUALIZAÇÃO DE RANKING ---");

    let nome = prompt("Qual jogador deseja atualizar? ");

    for (let i = 0; i < jogadores.length; i++) {

        if (jogadores[i].nome == nome) {

            let pontos = Number(prompt("Quantos pontos ele ganhou hoje? "));

            jogadores[i].pontuacao = jogadores[i].pontuacao + pontos;

            console.log("SUCESSO! A pontuação de " + jogadores[i].nome +
                " subiu para " + jogadores[i].pontuacao + " pontos!");

            return;
        }
    }

    console.log("Jogador não encontrado!");
}


console.log("1 - Listar jogadores");
console.log("2 - Buscar jogador");
console.log("5 - Atualizar pontos");

let opcao = Number(prompt("Escolha uma opção: "));

if (opcao == 1) {
    listarJogadores();
}

if (opcao == 2) {
    buscarJogador();
}

if (opcao == 5) {
    atualizarPontuacao();
}