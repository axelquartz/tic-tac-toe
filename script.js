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
let title = document.getElementById('title')
let playersInputs = document.getElementById('user-inputs')
let player1Color = document.getElementById('color-select');
let player1Name = document.getElementById('name-select');
let player2Color = document.getElementById('color-select-2');
let player2Name = document.getElementById('name-2-select');
let playersSubmit = document.getElementById('submit-players');
let playerDisplayInfo = document.createElement('h3');


// Submit player 1 information
playersSubmit.addEventListener('click', function(){
    playersInputs.remove()
    playerDisplayInfo.innerText = `${player1Name.value} vs ${player2Name.value}`
    title.append(playerDisplayInfo)
})

// Have control of turn switching between player 1 and player 2
function checkTurn(button, nameButton){
    if (playerTurn === 'player1') {
        nameButton.style.backgroundColor = player1Color.value;
        playerTurn = 'player2';
        return player1Turn(button);

    }else if(playerTurn === 'player2' ){
        nameButton.style.backgroundColor = player2Color.value;
        playerTurn = 'player1';
        return player2Turn(button);
    }
}

// Player 1 turn
function player1Turn(button){
    player1.playerValues.push(gameBoard.board[button])
    console.log(player1.playerValues);
    if (player1.playerValues.includes('a') && player1.playerValues.includes('b') && player1.playerValues.includes('c')) {
        playerDisplayInfo.innerText = `${player1Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player1.playerValues.includes('d') && player1.playerValues.includes('e') && player1.playerValues.includes('f')){
        playerDisplayInfo.innerText = `${player1Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player1.playerValues.includes('g') && player1.playerValues.includes('h') && player1.playerValues.includes('i')){
        playerDisplayInfo.innerText = `${player1Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player1.playerValues.includes('a') && player1.playerValues.includes('d') && player1.playerValues.includes('g')){
        playerDisplayInfo.innerText = `${player1Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player1.playerValues.includes('b') && player1.playerValues.includes('e') && player1.playerValues.includes('h')){
        playerDisplayInfo.innerText = `${player1Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player1.playerValues.includes('c') && player1.playerValues.includes('f') && player1.playerValues.includes('i')){
        playerDisplayInfo.innerText = `${player1Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player1.playerValues.includes('a') && player1.playerValues.includes('e') && player1.playerValues.includes('i')){
        playerDisplayInfo.innerText = `${player1Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player1.playerValues.includes('c') && player1.playerValues.includes('e') && player1.playerValues.includes('g')){
        playerDisplayInfo.innerText = `${player1Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player1.playerValues.length == 5){
        playerDisplayInfo.innerText = `Tie Game`
        title.append(playerDisplayInfo)
    }
}

// Player 2 turn
function player2Turn(button){
    player2.player2Values.push(gameBoard.board[button])
    console.log(player2.player2Values);
    if (player2.player2Values.includes('a') && player2.player2Values.includes('b') && player2.player2Values.includes('c')) {
        playerDisplayInfo.innerText = `${player2Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player2.player2Values.includes('d') && player2.player2Values.includes('e') && player2.player2Values.includes('f')){
        playerDisplayInfo.innerText = `${player2Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player2.player2Values.includes('g') && player2.player2Values.includes('h') && player2.player2Values.includes('i')){
        playerDisplayInfo.innerText = `${player2Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player2.player2Values.includes('a') && player2.player2Values.includes('d') && player2.player2Values.includes('g')){
        playerDisplayInfo.innerText = `${player2Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player2.player2Values.includes('b') && player2.player2Values.includes('e') && player2.player2Values.includes('h')){
        playerDisplayInfo.innerText = `${player2Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player2.player2Values.includes('c') && player2.player2Values.includes('f') && player2.player2Values.includes('i')){
        playerDisplayInfo.innerText = `${player2Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player2.player2Values.includes('a') && player2.player2Values.includes('e') && player2.player2Values.includes('i')){
        playerDisplayInfo.innerText = `${player2Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player2.player2Values.includes('c') && player2.player2Values.includes('e') && player2.player2Values.includes('g')){
        playerDisplayInfo.innerText = `${player2Name.value} Win`
        title.append(playerDisplayInfo)
    }else if(player2.player2Values.length == 5){
        playerDisplayInfo.innerText = `Tie Game`
        title.append(playerDisplayInfo)
    }
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

