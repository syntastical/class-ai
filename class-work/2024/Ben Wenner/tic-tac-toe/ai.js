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
  if(state [1][1] ==='') {
    return [1,1]
 }
 
 if(state [0,0] === '' || state [0][2] === '' || state [2,0] === '' || state [2,2] ==='') {
    return[0,0]
}
}