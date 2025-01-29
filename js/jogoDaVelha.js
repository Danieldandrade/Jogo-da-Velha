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
    exibir()
}

function exibir(){
    let tabela = '<table cellpadding="10" border="1">'

    for(let i = 0; i < 3; i++){
        tabela += '<tr>'

        for(let j = 0 ; j < 3; j++){

            switch(tabuleiro[i][j]){
                case -1: marcador = 'X'; break;
                case  1: marcador = 'O'; break;
                default: marcador = '_' ;
            }

            tabela += '<td>'+ marcador +'</td>'
        }


       

        tabela += '</tr>'
    }

    tabela += '</table>'

    board.innerHTML = tabela
}

function jogar(){

    aviso.innerHTML = 'Vez do Jogaror: ' + numeroJogador()

    linha = document.getElementById('linha').value -1
    coluna = document.getElementById('coluna').value -1

    if (tabuleiro[linha][coluna] == 0){
            tabuleiro[linha][coluna] = numeroJogador()== 1 ? 1 : -1
    }else{
        aviso.innerHTML = 'Esse campo ja foi marcado'
    }

    console.table (tabuleiro);
    jogardor++
    exibir()
}

function Checar(){

}

function numeroJogador(){
    return jogardor%2 + 1
}