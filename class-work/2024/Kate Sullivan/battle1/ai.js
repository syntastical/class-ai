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
    let enemy;
    //find an undefeated enemy
    for(let c = 0; c < gameState.enemies.length; c++) {
        if(gameState.enemies[c].currentHitpoints > 0) {
            enemy = gameState.enemies[c]
            break
        }
    }
    gameState.allies.forEach(ally => {
        ally.attack(enemy);
    });
}
// function alliesTurn(gameState) {
//     gameState.allies[1].forEach(ally => {
//         ally.attack(gameState.enemies[1]);
//     });
// }
// function alliesTurn(gameState) {
//     gameState.allies[2].forEach(ally => {
//         ally.attack(gameState.enemies[2]);
//     });
// }
