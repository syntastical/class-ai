/*
1. Can I win
2. Can my opponent win
3. What's the best move 

state = [
    [X, _, _],
    [O, _, _],
    [X, _, _]
]

using console.log
*/
function makeMove(state) {
    if(state[0][0] === 'X' && state [0][1] === 'X' && state [0][2] === '') {
        return[0,2];
    }
    if(state[1][0] === 'X' && state [1][1] === 'X' && state [1][2] === '') {
        return[1,2];
    }
    if(state[2][0] === 'X' && state [2][1] === 'X' && state [2][2] === '') {
        return[2,2];
    }
    if(state[0][2] === 'X' && state [0][1] === 'X' && state [0][0] === '') {
        return[0,0];
    }
    if(state[1][2] === 'X' && state [1][1] === 'X' && state [1][0] === '') {
        return[1,0];
    }
    if(state[2][2] === 'X' && state [2][1] === 'X' && state [2][0] === '') {
        return[2,0];
    }
    if(state[0][0] === 'X' && state [1][0] === 'X' && state [2][0] === '') {
        return[2,0];
    }
    if(state[0][1] === 'X' && state [1][1] === 'X' && state [2][1] === '') {
        return[2,1];
    }
    if(state[0][2] === 'X' && state [1][2] === 'X' && state [2][2] === '') {
        return[2,2];
    }
    if(state[2][0] === 'X' && state [1][0] === 'X' && state [0][0] === '') {
        return[0,0];
    
    }
    if(state[][] === 'X' && state [][] === 'X' && state [][] === '') {
        return[];
    }
    if(state[][] === 'X' && state [][] === 'X' && state [][] === '') {
        return[];
    }