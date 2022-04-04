const gameBoard = {
    board: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',]
}
const player = {
    playerValues: []
}

const cpu = {
    cpuValues: []
}

// turnUser()
const userFlow = (value)=>{

        // player.playerValues.pop();
        
    

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

// const cpuFlow = (value)=>{
    
//     cpu.cpuValues.push(gameBoard.board[value])
//     delete gameBoard.board[value]
//     cpu.cpuValues.sort()
//     console.log('cpu values ' + cpu.cpuValues);


//     if(cpu.cpuValues.includes('a') && cpu.cpuValues.includes('b') && cpu.cpuValues.includes('c')){
//         alert('Win')
//     }else if(cpu.cpuValues.length == 5){
//         alert('Game Over')
//     }
//     alert(cpu.cpuValues)
// }

let mainBoard = document.querySelector('.main-container');
let button0 = document.getElementById('0');
let button1 = document.getElementById('1');
let button2 = document.getElementById('2');
let button3 = document.getElementById('3');
let button4 = document.getElementById('4');
let button5 = document.getElementById('5');
let button6 = document.getElementById('6');
let button7 = document.getElementById('7');
let button8 = document.getElementById('8');

// mainBoard.addEventListener('click', )


 
let playerTurn = (function(){

    let activateButtons = function(){
        // Button Actions
        button0.addEventListener('click', function userClick0(){
        userFlow(0);
        button0.removeEventListener('click', userClick0);
        mainBoard.style.backgroundColor = 'purple'
        return
        })
        button1.addEventListener('click', function userClick1(){
        userFlow(1);
        button1.removeEventListener('click', userClick1);
        mainBoard.style.backgroundColor = 'blue'
        return
        })
        button2.addEventListener('click', function userClick2(){
        userFlow(2);
        button2.removeEventListener('click', userClick2)
        mainBoard.style.backgroundColor = 'orange'
        return
        })
        button3.addEventListener('click', function userClick3(){
        userFlow(3);
        button3.removeEventListener('click', userClick3)

        })
        button4.addEventListener('click', function userClick4(){
        userFlow(4);
        button4.removeEventListener('click', userClick4)

        })
        button5.addEventListener('click', function userClick5(){
        userFlow(5);
        button5.removeEventListener('click', userClick5)
        })
        button6.addEventListener('click', function userClick6(){
        userFlow(6);
        button6.removeEventListener('click', userClick6)

        })
        button7.addEventListener('click', function userClick7(){
        userFlow(7);
        button7.removeEventListener('click', userClick7)

        })
        button8.addEventListener('click', function userClick8(){
        userFlow(8);
        button8.removeEventListener('click', userClick8)
        })
        // Button Actions
    }
   
return{activateButtons}
    
})()

mainBoard.addEventListener('click', playerTurn.activateButtons())
