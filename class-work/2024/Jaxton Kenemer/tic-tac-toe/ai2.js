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
 let canwin = state [
        
    ]
    let bestmove =
    let stopopponent =
    let opponent =
    let win = 
    let I = 
    if (I canwin) then (win)
    if (opponent canwin) then (stopopponent)
    else (make bestmove)
*/
function makeMove(state) {
    if(state[1][1] === 'X' && state[0][0] === '') {
        return [0,0];
    }
    if(state[0][0] === 'X' && state[1][1] === '') {
        return [1,1];
    }
    if(state[0][1] === 'X' && state[1][1] === '') {
        return [1,1];
    }
    if(state[0][2] === 'X' && state[1][1] === '') {
        return [1,1];
    }
    if(state[1][0] === 'X' && state[1][1] === '') {
        return [1,1];
    }
    if(state[1][2] === 'X' && state[1][1] === '') {
        return [1,1];
    }
    if(state[2][0] === 'X' && state[1][1] === '') {
        return [1,1];
    }
    if(state[2][1] === 'X' && state[1][1] === '') {
        return [1,1];
    }
    if(state[2][2] === 'X' && state[1][1] === '') {
        return [1,1];
    }
    if(state [1][1] === 'O' && state[1][1] === ''){
        return []
    }


}
