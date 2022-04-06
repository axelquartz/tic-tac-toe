const gameBoard = {
    board: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',]
}
const player = {
    playerValues: []
}

const player2 = {
    player2Values: []
}

let playerTurn = 'player1';
let board = document.querySelector('.main-container')


function checkTurn(){
    if (playerTurn === 'player1') {
        playerTurn = 'player2';
        return player1Turn();

    }else if(playerTurn === 'player2' ){
        playerTurn = 'player1';
        return player2Turn();
    }
}

function player1Turn(){
    board.style.backgroundColor = 'blue'
}

function player2Turn(){
    board.style.backgroundColor = 'red'
}