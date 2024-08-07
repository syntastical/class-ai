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

    //horizontal
    if(state[0][0] === 'X' && state[0][1] === 'X') {
        return [0, 2]
    }
    if(state[0][1] === 'X' && state[0][2] === 'X') {
        return [0, 0]
    }
    if(state[1][0] === 'X' && state[1][1] === 'X') {
        return [1, 2]
    }
    if(state[1][1] === 'X' && state[1][2] === 'X') {
        return [1, 0]
    }
    if(state[2][0] === 'X' && state[2][1] === 'X') {
        return [2, 2]
    }
    if(state[2][1] === 'X' && state[2][2] === 'X') {
        return [2, 0]
    }

    //vertical
    if(state[0][0] === 'X' && state[1][0] === 'X') {
        return [2, 0]
    }
    if(state[1][0] === 'X' && state[2][0] === 'X') {
        return [0, 0]
    }
    if(state[0][1] === 'X' && state[1][1] === 'X') {
        return [2, 1]
    }
    if(state[1][1] === 'X' && state[2][1] === 'X') {
        return [0, 1]
    }
    if(state[0][2] === 'X' && state[1][2] === 'X') {
        return [2, 2]
    }
    if(state[1][2] === 'X' && state[2][2] === 'X') {
        return [0, 2]
    }

    //diagonal
    if(state[0][0] === 'X' && state[1][1] === 'X') {
        return [2, 2]
    }
    if(state[1][1] === 'X' && state[2][2] === 'X') {
        return [0, 0]
    }
    if(state[2][0] === 'X' && state[1][1] === 'X') {
        return [0, 2]
    }
    if(state[0][2] === 'X' && state[1][1] === 'X') {
        return [2, 0]
    }

    if(state[0][0] === 'X' && state[0][2] === 'X') {
        return [0, 1]
    }

    if(state[1][0] === 'X' && state[1][2] === 'X') {
        return [1, 1]
    }

    if(state[2][0] === 'X' && state[2][2] === 'X') {
        return [2, 1]
    }

    if(state[0][0] === 'X' && state[2][0] === 'X') {
        return [1, 0]
    }

    if(state[0][1] === 'X' && state[2][1] === 'X') {
        return [1, 1]
    }
    if(state[0][2] === 'X' && state[2][2] === 'X') {
        return [1, 2]
    }

    if(state[0][0] === 'X' && state[2][2] === 'X') {
        return [1, 1]
    }

    if(state[0][2] === 'X' && state[2][0] === 'X') {
        return [1, 1]
    }
}