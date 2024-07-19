/*
gameState = {
    enemies: [
        {
            name: "name",
            currentHitpoints: 123,
            maxHitpoints: 234
        }
    ]
    allies: [
        {
            name: "",
            hitpoints: 123,
            maxHitpoints: 234,
            attack(enemy)
        }
    ]
}
*/



function alliesTurn(gameState) {
    // find the next alive enemy
    // attach next alive enemy
    let enemy;
    for(let c = 0; c < gameState.enemies.length; c++) {
        if(gameState.enemies[c].currentHitpoints > 0) {
            enemy = gameState.enemies[c]
            break
        }
    }

    gameState.allies[0].attack(gameState.enemies[0]);
    gameState.allies.forEach(ally => {
        ally.attack(gameState.enemies[2]);
    });

}

function alliesTurn(gameState) {
    // find the next alive enemy
    // attach next alive enemy
    let enemy;
    for(let c = 0; c < gameState.enemies.length; c++) {
        if(gameState.enemies[c].currentHitpoints > 0) {
            enemy = gameState.enemies[c]
            break
        }
    }

    gameState.allies[0].attack(gameState.enemies[0]);
    gameState.allies.forEach(ally => {
        ally.attack(gameState.enemies[2]);
    });

}

function alliesTurn(gameState) {
    // find the next alive enemy
    // attach next alive enemy
    let enemy;
    for(let c = 0; c < gameState.enemies.length; c++) {
        if(gameState.enemies[c].currentHitpoints > 0) {
            enemy = gameState.enemies[c]
            break
        }
    }

    gameState.allies[0].attack(gameState.enemies[0]);
    gameState.allies.forEach(ally => {
        ally.attack(gameState.enemies[2]);
    });

}

// function enemiesTurn(gameState) {
//     gameState.enemies[1].attack(gameState.allies[0]);
//     gameState.enemies.forEach(enemy => {
//         enemies.attack(gameState.allies[0]);
//     });

// }