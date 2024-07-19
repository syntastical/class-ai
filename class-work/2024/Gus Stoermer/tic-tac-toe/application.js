var tl = document.getElementById('tl');
var tm = document.getElementById('tm');
var tr = document.getElementById('tr');

var ml = document.getElementById('ml');
var mm = document.getElementById('mm');
var mr = document.getElementById('mr');

var bl = document.getElementById('bl');
var bm = document.getElementById('bm');
var br = document.getElementById('br');

var board = [
    [tl, tm, tr],
    [ml, mm, mr],
    [bl, bm, br]
]

var gameOver = false;

document.querySelectorAll('td').forEach(function(item, index) {
    item.addEventListener("click", function(event) {
        if(gameOver) {
            return;
        }

        if(item.innerHTML === '') {
            item.innerHTML = 'X'
        } else {
            alert("Space already taken, choose another space.")
            return;
        }

        var winner = checkForWinner();
        if(winner) {
            gameOver = true;
            alert(`${winner} wins!`)
            return;
        }

        [y, x] = makeMove(getState())
// alert(`${y}, ${x} ${board[y][x].innerHTML}`)
        if(board[y][x].innerHTML) {
            gameOver = true
            throw "Invalid move by AI"
        }
        board[y][x].innerHTML = 'O'

        winner = checkForWinner();
        if(winner) {
            gameOver = true;
            alert(`${winner} wins!`)
            return;
        }
        if (checkForTie()) {
            gameOver = true
            alert("Its a Tie!");
            return;
        }
    })
})

function getState() {
    return [
        [tl.innerHTML, tm.innerHTML, tr.innerHTML],
        [ml.innerHTML, mm.innerHTML, mr.innerHTML],
        [bl.innerHTML, bm.innerHTML, br.innerHTML]
    ]
}

function checkForWinner() {
    var state = getState();

    for(var y = 0; y < 3; y++) {
        if(state[y][0] === state[y][1] && state[y][0] === state[y][2] && state[y][0]) {
            return state[y][0]
        }
    }
    for(var x = 0; x < 3; x++) {
        if(state[0][x] === state[1][x] && state[0][x] === state[2][x] && state[0][x]) {
            return state[0][x]
        }
    }

    if(state[0][0] === state[1][1] && state[0][0] === state[2][2] && state[0][0]) {
        return state[0][0]
    }

    if(state[2][0] === state[1][1] && state[2][0] === state[0][2] && state[2][0]) {
        return state[2][0]
    }

    return null;
}

function checkForTie() {
    var state = getState()
    for(let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            if (state[x][y] === "") {
                return false
            }
        }
    }
    return true
}
