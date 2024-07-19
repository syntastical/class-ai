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
    // for(let y = 0; y < 3; y++) {
    //     for(let x = 0; x < 3; x++) {

    //     }
    // }
    if(state [0][0] === 'O' && state [0][1] === '' && state [0][2] === 'O') {
        return [0][1];
    }
    if(state [0][0] === 'O' && state [0][2] === '' && state [0][1] === 'O') {
        return [0][2];
    }
    if(state [0][1] === 'O' && state [0][0] === '' && state [0][2] === 'O') {
        return [0][0];
    }
    if(state [1][0] === 'O' && state [1][1] === '' && state [1][2] === 'O') {
        return [1][1];
    }
    if(state [1][1] === 'O' && state [1][0] === '' && state [1][2] === 'O') {
        return [1][0];
    }
    if(state [1][1] === 'O' && state [1][2] === '' && state [1][0] === 'O') {
        return [1][2];
    }
    if(state [2][0] === 'O' && state [2][1] === '' && state [2][2] === 'O') {
        return [2][1];
    }
    if(state [2][1] === 'O' && state [2][0] === '' && state [2][2] === 'O') {
        return [2][0];
    }
    if(state [2][1] === 'O' && state [2][2] === '' && state [2][0] === 'O') {
        return [2][2];
    }
    if(state [0][0] === 'O' && state [1][0] === '' && state [2][0] === 'O') {
        return [1][0];
    }
    if(state [1][0] === 'O' && state [0][0] === '' && state [2][0] === 'O') {
        return [0][0];
    }
    if(state [1][0] === 'O' && state [2][0] === '' && state [0][0] === 'O') {
        return [2][0];
    }
    if(state [0][1] === 'O' && state [1][1] === '' && state [2][1] === 'O') {
        return [1][1];
    }
    if(state [2][1] === 'O' && state [0][1] === '' && state [1][1] === 'O') {
        return [0][1];
    }
    if(state [1][1] === 'O' && state [2][1] === '' && state [0][1] === 'XO') {
        return [2][1];
    }
    if(state [0][2] === 'O' && state [1][2] === '' && state [2][2] === 'O') {
        return [1][2];
    }
    if(state [1][2] === 'O' && state [2][2] === '' && state [0][2] === 'O') {
        return [2][2];
    }
    if(state [1][2] === 'O' && state [0][2] === '' && state [2][2] === 'O') {
        return [0][2];
    }
    if(state [1][1] === 'O' && state [0][0] === '' && state [2][2] === 'O') {
        return [0][0];
    }
    if(state [2][2] === 'O' && state [1][1] === '' && state [0][0] === 'O') {
        return [1][1];
    }
    if(state [1][1] === 'O' && state [2][2] === '' && state [0][0] === 'O') {
        return [2][2];
    }
    if(state [1][1] === 'O' && state [0][2] === '' && state [2][0] === 'O') {
        return [0][2];
    }
    if(state [2][0] === 'O' && state [1][1] === '' && state [0][2] === 'O') {
        return [1][1];
    }
    if(state [1][1] === 'O' && state [2][0] === '' && state [0][2] === 'O') {
        return [2][0];
    }
    if(state [0][0] === 'X' && state [0][1] === '' && state [0][2] === 'X') {
        return [0][1];
    }
    if(state [0][0] === 'X' && state [0][2] === '' && state [0][1] === 'X') {
        return [0][2];
    }
    if(state [0][1] === 'X' && state [0][0] === '' && state [0][2] === 'X') {
        return [0][0];
    }
    if(state [1][0] === 'X' && state [1][1] === '' && state [1][2] === 'X') {
        return [1][1];
    }
    if(state [1][1] === 'X' && state [1][0] === '' && state [1][2] === 'X') {
        return [1][0];
    }
    if(state [1][1] === 'X' && state [1][2] === '' && state [1][0] === 'X') {
        return [1][2];
    }
    if(state [2][0] === 'X' && state [2][1] === '' && state [2][2] === 'X') {
        return [2][1];
    }
    if(state [2][1] === 'X' && state [2][0] === '' && state [2][2] === 'X') {
        return [2][0];
    }
    if(state [2][1] === 'X' && state [2][2] === '' && state [2][0] === 'X') {
        return [2][2];
    }
    if(state [0][0] === 'X' && state [1][0] === '' && state [2][0] === 'X') {
        return [1][0];
    }
    if(state [1][0] === 'X' && state [0][0] === '' && state [2][0] === 'X') {
        return [0][0];
    }
    if(state [1][0] === 'X' && state [2][0] === '' && state [0][0] === 'X') {
        return [2][0];
    }
    if(state [0][1] === 'X' && state [1][1] === '' && state [2][1] === 'X') {
        return [1][1];
    }
    if(state [2][1] === 'X' && state [0][1] === '' && state [1][1] === 'X') {
        return [0][1];
    }
    if(state [1][1] === 'X' && state [2][1] === '' && state [0][1] === 'X') {
        return [2][1];
    }
    if(state [0][2] === 'X' && state [1][2] === '' && state [2][2] === 'X') {
        return [1][2];
    }
    if(state [1][2] === 'X' && state [2][2] === '' && state [0][2] === 'X') {
        return [2][2];
    }
    if(state [1][2] === 'X' && state [0][2] === '' && state [2][2] === 'X') {
        return [0][2];
    }
    if(state [1][1] === 'X' && state [0][0] === '' && state [2][2] === 'X') {
        return [0][0];
    }
    if(state [2][2] === 'X' && state [1][1] === '' && state [0][0] === 'X') {
        return [1][1];
    }
    if(state [1][1] === 'X' && state [2][2] === '' && state [0][0] === 'X') {
        return [2][2];
    }
    if(state [1][1] === 'X' && state [0][2] === '' && state [2][0] === 'X') {
        return [0][2];
    }
    if(state [2][0] === 'X' && state [1][1] === '' && state [0][2] === 'X') {
        return [1][1];
    }
    if(state [1][1] === 'X' && state [2][0] === '' && state [0][2] === 'X') {
        return [2][0];
    }
    }
    if(state [1][1] === '') {
        return [1, 1];
    }
    if(state [0][0] === '') {
        return [0,0];
    }
    if(state [0][2] === '') {
        return [0,2];
    }
    if(state [2][0] === '') {
        return [2,0];
    }
    if(state [2][2] === '') {
        return [2,2];
    }
    if(state [0][1] === '') {
        return [0,1];
    }
    if(state [1][0] === '') {
        return [1,0];
    }
    if(state [1][2] === '') {
        return [1,2];
    }
    if(state [2][1] === '') {
        return [2,1];
    }
}
// closing the function
