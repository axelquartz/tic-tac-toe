const gameBoard = {
    board: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',]
}
const player = {
    playerValues: []
}

const cpu = {
    cpuValues: []
}

turnUser()
const userFlow = (value)=>{
    
    player.playerValues.push(gameBoard.board[value])
    delete gameBoard.board[value]
    player.playerValues.sort()
    console.log('player values ' + player.playerValues);
    value = null

    // if(player.playerValues.includes('a') && player.playerValues.includes('b') && player.playerValues.includes('c')){
    //     alert('Win')
    // }else if(player.playerValues.length == 5){
    //     alert('Game Over')
    // }
}

const cpuFlow = (value)=>{
    
    cpu.cpuValues.push(gameBoard.board[value])
    delete gameBoard.board[value]
    cpu.cpuValues.sort()
    console.log('cpu values ' + cpu.cpuValues);


    // if(cpu.cpuValues.includes('a') && cpu.cpuValues.includes('b') && cpu.cpuValues.includes('c')){
    //     alert('Win')
    // }else if(cpu.cpuValues.length == 5){
    //     alert('Game Over')
    // }
    // alert(cpu.cpuValues)
}

let button0 = document.getElementById('0');
let button1 = document.getElementById('1');
let button2 = document.getElementById('2');
let button3 = document.getElementById('3');
let button4 = document.getElementById('4');
let button5 = document.getElementById('5');
let button6 = document.getElementById('6');
let button7 = document.getElementById('7');
let button8 = document.getElementById('8');



function turnUser(){
    let changeTurn = document.querySelector('.main-container');
    changeTurn.addEventListener('click', function (){
        changeTurn.style.backgroundColor = 'blue'

    
        button0.addEventListener('click', function(){
            userFlow(0)
            button0.style.backgroundColor = 'white';
            button0 = null
        })
        button1.addEventListener('click', function(){userFlow(1); })
        button2.addEventListener('click', function(){userFlow(2); })
        button3.addEventListener('click', function(){userFlow(3); })
        button4.addEventListener('click', function(){userFlow(4); })
        button5.addEventListener('click', function(){userFlow(5); })
        button6.addEventListener('click', function(){userFlow(6); })
        button7.addEventListener('click', function(){userFlow(7); })
        button8.addEventListener('click', function(){userFlow(8); })
    })
}

// function turnCPU(){
//     let changeTurn = document.querySelector('.main-container');
//     changeTurn.addEventListener('click', function (){
//         changeTurn.style.backgroundColor = 'green'
    
//         button0.addEventListener('click', function(){
//             cpuFlow(0)
//             button0.style.backgroundColor = 'white'    
//         })
//         button1.addEventListener('click', function(){cpuFlow(1); return turnUser()})
//         button2.addEventListener('click', function(){cpuFlow(2); return turnUser()})
//         button3.addEventListener('click', function(){cpuFlow(3); return turnUser()})
//         button4.addEventListener('click', function(){cpuFlow(4); return turnUser()})
//         button5.addEventListener('click', function(){cpuFlow(5); return turnUser()})
//         button6.addEventListener('click', function(){cpuFlow(6); return turnUser()})
//         button7.addEventListener('click', function(){cpuFlow(7); return turnUser()})
//         button8.addEventListener('click', function(){cpuFlow(8); return turnUser()})
//     })
// }




