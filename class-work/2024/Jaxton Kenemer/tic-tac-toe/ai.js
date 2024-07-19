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
    if(state[1][1] !== 'X' && state[1][1] !== 'O') {
        return [1,1];
    }
    if(state[0][0] !== 'X' && state[1][1] === 'X') {
        return [1,1];
    }
}
