checks = [

        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],

        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],

        [[0, 0], [1, 1], [2, 2]],
        [[2, 0], [1, 1], [0, 2]]
];

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
    console.log(state)

    for (let i = 0; i < checks.length; i++) {
        let counts = []
        let row = []
        let os = 0
        counts.push(checks[i][0]);
        counts.push(checks[i][1]);
        counts.push(checks[i][2]);
        row.push(state[checks[i][0][0]][checks[i][0][1]]);
        row.push(state[checks[i][1][0]][checks[i][1][1]]);
        row.push(state[checks[i][2][0]][checks[i][2][1]]);
        for (let z = 0; z < 3; z++) {
            if(row[z] == "O") {
                os++;
            } 
        }
        console.log(`Checking Row ${checks[i]}, Os = ${os}, Counts = ${counts}`)
        console.log(`Row Is ${state[counts[0][0]][counts[0][1]]} ${state[counts[1][0]][counts[1][1]]} ${state[counts[2][0]][counts[2][1]]}`)
        if(!row.includes("X") && os == 2) {
            // Row in danger
            console.log(`Row ${checks[i]} is winnable`)
            return checks[i][row.indexOf("")];
        }
    }

    // Check if about to loose
    for (let i = 0; i < checks.length; i++) {
        let counts = []
        let row = []
        let xs = 0
        counts.push(checks[i][0]);
        counts.push(checks[i][1]);
        counts.push(checks[i][2]);
        row.push(state[checks[i][0][0]][checks[i][0][1]]);
        row.push(state[checks[i][1][0]][checks[i][1][1]]);
        row.push(state[checks[i][2][0]][checks[i][2][1]]);
        for (let z = 0; z < 3; z++) {
            if(row[z] == "X") {
                xs++;
            } 
        }
        console.log(`Checking Row ${checks[i]}, Xs = ${xs}, Counts = ${counts}`)
        console.log(`Row Is ${state[counts[0][0]][counts[0][1]]} ${state[counts[1][0]][counts[1][1]]} ${state[counts[2][0]][counts[2][1]]}`)
        if(!row.includes("O") && xs == 2) {
            // Row in danger
            console.log(`Row ${checks[i]} in danger`)
            return checks[i][row.indexOf("")];
        }
    }

    for (let i = 0; i < checks.length; i++) {
        let counts = []
        let row = []
        let xs = 0
        counts.push(checks[i][0]);
        counts.push(checks[i][1]);
        counts.push(checks[i][2]);
        row.push(state[checks[i][0][0]][checks[i][0][1]]);
        row.push(state[checks[i][1][0]][checks[i][1][1]]);
        row.push(state[checks[i][2][0]][checks[i][2][1]]);
        for (let z = 0; z < 3; z++) {
            if(row[z] == "X") {
                xs++;
            } 
        }
        console.log(`Checking Row ${checks[i]}, Xs = ${xs}, Counts = ${counts}`)
        console.log(`Row Is ${state[counts[0][0]][counts[0][1]]} ${state[counts[1][0]][counts[1][1]]} ${state[counts[2][0]][counts[2][1]]}`)
        if(!row.includes("O") && xs == 1) {
            // Row in danger
            console.log(`Row ${checks[i]} in danger`)
            return checks[i][row.indexOf("")];
        }
    }

    for (let n = 0; n < 9; n++) {
        console.log(`Finding Position ${[n % 3, Math.floor(n / 3)]}`)
        if (state[n % 3][Math.floor(n / 3)] === "") {
            console.log("Position Found")
            return [n % 3, Math.floor(n / 3)]
        }
    }
}

var checks; 