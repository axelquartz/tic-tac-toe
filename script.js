const gameBoard = {
    board: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',]
}
const player = {
    playerValues: []
}

const player2 = {
    player2Values: []
}

// User Turn
const userFlow = (value)=>{        

    player.playerValues.push(gameBoard.board[value])
    delete gameBoard.board[value]
    player.playerValues.sort()
    console.log('player values ' + player.playerValues);
    

    if(player.playerValues.includes('a') && player.playerValues.includes('b') && player.playerValues.includes('c')){
        console.log('win');
    }else if(player.playerValues.includes('d') && player.playerValues.includes('e') && player.playerValues.includes('f')){
        alert('Win DEF')
    }else if(player.playerValues.includes('g') && player.playerValues.includes('h') && player.playerValues.includes('i')){
        alert('Win GHI')
    }else if(player.playerValues.includes('a') && player.playerValues.includes('d') && player.playerValues.includes('g')){
        alert('Win ADG')
    }else if(player.playerValues.includes('b') && player.playerValues.includes('e') && player.playerValues.includes('h')){
        alert('Win BEH')
    }else if(player.playerValues.includes('c') && player.playerValues.includes('f') && player.playerValues.includes('i')){
        alert('Win CFI')
    }else if(player.playerValues.includes('a') && player.playerValues.includes('e') && player.playerValues.includes('i')){
        alert('Win AEI')
    }else if(player.playerValues.includes('c') && player.playerValues.includes('e') && player.playerValues.includes('g')){
        alert('Win CEG')
    }else if(player.playerValues.length == 5){
        alert('Game Over')
    }
    return
}

// User Turn
const user2Flow = (value)=>{        

    player2.player2Values.push(gameBoard.board[value])
    delete gameBoard.board[value]
    player2.player2Values.sort()
    console.log('player 2 values ' + player2.player2Values);
    

    if(player2.player2Values.includes('a') && player2.player2Values.includes('b') && player2.player2Values.includes('c')){
        console.log('win');
    }else if(player2.player2Values.includes('d') && player2.player2Values.includes('e') && player2.player2Values.includes('f')){
        alert('Win DEF')
    }else if(player2.player2Values.includes('g') && player2.player2Values.includes('h') && player2.player2Values.includes('i')){
        alert('Win GHI')
    }else if(player2.player2Values.includes('a') && player2.player2Values.includes('d') && player2.player2Values.includes('g')){
        alert('Win ADG')
    }else if(player2.player2Values.includes('b') && player2.player2Values.includes('e') && player2.player2Values.includes('h')){
        alert('Win BEH')
    }else if(player2.player2Values.includes('c') && player2.player2Values.includes('f') && player2.player2Values.includes('i')){
        alert('Win CFI')
    }else if(player2.player2Values.includes('a') && player2.player2Values.includes('e') && player2.player2Values.includes('i')){
        alert('Win AEI')
    }else if(player2.player2Values.includes('c') && player2.player2Values.includes('e') && player2.player2Values.includes('g')){
        alert('Win CEG')
    }else if(player2.player2Values.length == 5){
        alert('Game Over')
    }
    return
}

// Buttons and Board DOM
let mainBoard = document.querySelector('.main-container');
let testButton = document.querySelector('#test-button')
let button0 = document.getElementById('0');
let button1 = document.getElementById('1');
let button2 = document.getElementById('2');
let button3 = document.getElementById('3');
let button4 = document.getElementById('4');
let button5 = document.getElementById('5');
let button6 = document.getElementById('6');
let button7 = document.getElementById('7');
let button8 = document.getElementById('8');
let userclicked = false

// Player Turn DOM
let playerTurn = (function(){

    let activateButtons = function(){
        // Button Actions

        let press0 = (n) => {
            
                userFlow(n);
            button0.removeEventListener('click', press0.activate0);
            button0.style.backgroundColor = 'yellow';
            
        }

        let press1 = (function(){
            userFlow(1);
            button1.removeEventListener('click', press1);
            button1.style.backgroundColor = 'yellow';
        })




        button8.addEventListener('click', function userClick8(){
        userFlow(8);
        button8.removeEventListener('click', userClick8);
        button8.style.backgroundColor = 'yellow';
        this.userClicked = true

        })

        if (this.userclicked = true){
            return player2Turn.activateButtons
        }
        // Button Actions


        }
   


return{activateButtons} 
    
})()


// Player 2 Turn DOM
let player2Turn = (function(){

    let activateButtons = function(){

        // Button Actions
        button0.addEventListener('click', function userClick0(){
        user2Flow(0);
        button0.removeEventListener('click', userClick0);
        button0.style.backgroundColor = 'yellow';
        return playerTurn.activateButtons();
        })

        button1.addEventListener('click', function userClick1(){
        player2.player2Values.shift()
        user2Flow(1);
        button1.removeEventListener('click', userClick1);
        button1.style.backgroundColor = 'yellow';
        return playerTurn.activateButtons();

        })
        button2.addEventListener('click', function userClick2(){
        user2Flow(2);
        button2.removeEventListener('click', userClick2);
        button2.style.backgroundColor = 'yellow';
        return playerTurn.activateButtons();

        })
        button3.addEventListener('click', function userClick3(){
        user2Flow(3);
        button3.removeEventListener('click', userClick3)
        button3.style.backgroundColor = 'yellow';

        })
        button4.addEventListener('click', function userClick4(){
        user2Flow(4);
        button4.removeEventListener('click', userClick4)
        button4.style.backgroundColor = 'yellow';

        })
        button5.addEventListener('click', function userClick5(){
        user2Flow(5);
        button5.removeEventListener('click', userClick5)
        button5.style.backgroundColor = 'yellow';

        })
        button6.addEventListener('click', function userClick6(){
        user2Flow(6);
        button6.removeEventListener('click', userClick6)
        button6.style.backgroundColor = 'yellow';

        })
        button7.addEventListener('click', function userClick7(){
        user2Flow(7);
        button7.removeEventListener('click', userClick7)
        button7.style.backgroundColor = 'yellow';

        })
        button8.addEventListener('click', function userClick8(){
        user2Flow(8);
        button8.removeEventListener('click', userClick8);
        button8.style.backgroundColor = 'yellow';

        })
        // Button Actions
    }
   
return{activateButtons}
    
})()

testButton.addEventListener('click', playerTurn.activateButtons)
