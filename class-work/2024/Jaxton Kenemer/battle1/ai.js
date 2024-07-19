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
    gameState.allies.forEach(ally => {
        gameState.allies[0].attack(gameState.enemies[0])
        ally.attack(gameState.enemies[0]);
    });
    gameState.allies.forEach(ally => {
        gameState.allies[1].attack(gameState.enemies[1])
        ally.attack(gameState.enemies[1]);
    });
    gameState.allies.forEach(ally => {
        gameState.allies[2].attack(gameState.enemies[2])
        ally.attack(gameState.enemies[2]);
    });
}

