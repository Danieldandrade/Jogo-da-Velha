let tabuleiro
let bord
let aviso
let jogador
let linha
let coluna

function iniciar(){
    tabuleiro = []
    board = document.getElementById('board')
    aviso = document.getElementById('aviso')
    jogardor = 1

    for(let i = 0; i < 3; i++){
        tabuleiro [i] = []
        for(let j = 0; j < 3;j++ ){
            tabuleiro[i][j] = 0
        }
    }


    console.table(tabuleiro)
}

function exibir(){

}

function jogar(){

}

function Checar(){

}