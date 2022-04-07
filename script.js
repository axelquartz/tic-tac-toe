const gameBoard = {
    board: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',]
}
const player1 = {
    playerValues: []
}

const player2 = {
    player2Values: []
}

// Initial variables
let playerColor;
let playerTurn = 'player1';
let board = document.querySelector('.main-container');
let button0 = document.getElementById('0');
let button1 = document.getElementById('1');
let button2 = document.getElementById('2');
let button3 = document.getElementById('3');
let button4 = document.getElementById('4');
let button5 = document.getElementById('5');
let button6 = document.getElementById('6');
let button7 = document.getElementById('7');
let button8 = document.getElementById('8');
let colorPick = document.getElementById('color-select')



// Have control of turn switching between player 1 and player 2
function checkTurn(button, nameButton){
    if (playerTurn === 'player1') {
        nameButton.style.backgroundColor = colorPick.value;
        playerTurn = 'player2';
        return player1Turn(button);

    }else if(playerTurn === 'player2' ){
        nameButton.style.backgroundColor = '#3b18ff';
        playerTurn = 'player1';
        return player2Turn(button);
    }
}

// Player 1 turn
function player1Turn(button){
    player1.playerValues.push(gameBoard.board[button])
    console.log(player1.playerValues);
}

// Player 2 turn
function player2Turn(button){
    player2.player2Values.push(gameBoard.board[button])
    console.log(player2.player2Values);
}

// Event listeners of the 9 buttons
button0.addEventListener('click', function button0Press(){
    checkTurn(0, button0)
    button0.removeEventListener('click', button0Press)
})

button1.addEventListener('click', function button1Press(){
    checkTurn(1, button1)
    button1.removeEventListener('click', button1Press)
})

button2.addEventListener('click', function button2Press(){
    checkTurn(2, button2)
    button2.removeEventListener('click', button2Press)
})

button3.addEventListener('click', function button3Press(){
    checkTurn(3, button3)
    button3.removeEventListener('click', button3Press)
})

button4.addEventListener('click', function button4Press(){
    checkTurn(4, button4)
    button4.removeEventListener('click', button4Press)
})

button5.addEventListener('click', function button5Press(){
    checkTurn(5, button5)
    button5.removeEventListener('click', button5Press)
})

button6.addEventListener('click', function button6Press(){
    checkTurn(6, button6)
    button6.removeEventListener('click', button6Press)
})

button7.addEventListener('click', function button7Press(){
    checkTurn(7, button7)
    button7.removeEventListener('click', button7Press)
})

button8.addEventListener('click', function button8Press(){
    checkTurn(8, button8)
    button8.removeEventListener('click', button8Press)
})

