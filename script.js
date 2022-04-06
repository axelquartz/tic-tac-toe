const gameBoard = {
    board: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',]
}
const player1 = {
    playerValues: []
}

const player2 = {
    player2Values: []
}

let playerColor;





let playerTurn = 'player1';
let board = document.querySelector('.main-container')
let button0 = document.getElementById('0')
let button1 = document.getElementById('1')
let button2 = document.getElementById('2')




function checkTurn(button){
    if (playerTurn === 'player1') {
        playerTurn = 'player2';
        return player1Turn(button);

    }else if(playerTurn === 'player2' ){
        playerTurn = 'player1';
        return player2Turn(button);
    }
}

function player1Turn(button){
    board.style.backgroundColor = 'blue'
    player1.playerValues.push(gameBoard.board[button])
    console.log(player1.playerValues);
}

function player2Turn(button){
    board.style.backgroundColor = 'red'
    player2.player2Values.push(gameBoard.board[button])
    console.log(player2.player2Values);
}

// function clickButton(button){
//     if (playerTurn === 'player1'){
//         button0.style.backgroundColor = 'blue'
//         return checkTurn(button)
//     }else if(playerTurn === 'player2'){
//         button0.style.backgroundColor = 'red'
//         return checkTurn(button)
//     }
// }
function checkColor(nameButton){

    if (playerTurn === 'player1') {
        nameButton.style.backgroundColor = 'blue';
    
    }else if(playerTurn === 'player2'){
        nameButton.style.backgroundColor = 'red';
    }
};



button0.addEventListener('click', function button0Press(){
    checkColor(button0)
    checkTurn(0)
    button0.removeEventListener('click', button0Press)
})

button1.addEventListener('click', function button1Press(){
    checkColor(button1)
    checkTurn(1)
    button1.removeEventListener('click', button1Press)
})

button2.addEventListener('click', function button2Press(){
    checkColor(button2)
    checkTurn(2)
    button2.removeEventListener('click', button2Press)
})

// button0.addEventListener('click', function (){
//     if (playerTurn === 'player1'){
//         button0.style.backgroundColor = 'blue'
//         return checkTurn()
//     }else if(playerTurn === 'player2'){
//         button0.style.backgroundColor = 'red'
//         return checkTurn()
//     }
// })