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
    
    // // Opponent about to win top left
    // if(state[1][0] == 'X' && state[2][0] == 'X' && state[0][0] == '') {
    //     return [0, 0];
    // }

    // // Opponent about to win middle left
    // if(state[0][0] == 'X' && state[2][0] == 'X' && state[1][0] == '') {
    //     return [1, 0];
    // }
    
    // // Opponent about to win middle bottom left
    // if(state[0][0] == 'X' && state[1][0] == 'X' && state[2][0] == '') {
    //     return [2, 0];
    // }

    // return [1, 1]

    console.log(1)
    if(state[1][0] === 'X' && state[2][0] === 'X' && state[0][0] === ''){
        return[0,0]            
    }            
    console.log(2)
    //opponent about to win (1,0)            
    if(state[0][0] === 'X' && state[2][0] === 'X' && state[1][0] === ''){
        return[1,0]            
    }
    console.log(3)
}
