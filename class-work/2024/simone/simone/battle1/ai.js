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
    //0 / dooood
    if(gameState.enemies[0].currentHitpoints > 0) {gameState.allies[0].attack(gameState.enemies[0]) 
    }

    if(gameState.enemies[1].currentHitpoints > 0) {gameState.allies[0].attack(gameState.enemies[1]) 
    }

    if(gameState.enemies[2].currentHitpoints > 0) {gameState.allies[0].attack(gameState.enemies[2]) 
    }

    //1 / doodle
    if(gameState.enemies[1].currentHitpoints > 0) {gameState.allies[1].attack(gameState.enemies[1]) 
    }

    if(gameState.enemies[2].currentHitpoints > 0) {gameState.allies[1].attack(gameState.enemies[2]) 
    }

    if(gameState.enemies[0].currentHitpoints > 0) {gameState.allies[1].attack(gameState.enemies[0]) 
    }

    //2 / steve
    if(gameState.enemies[2].currentHitpoints > 0) {gameState.allies[2].attack(gameState.enemies[2]) 
    }

    if(gameState.enemies[1].currentHitpoints > 0) {gameState.allies[2].attack(gameState.enemies[1]) 
    }

    if(gameState.enemies[0].currentHitpoints > 0) {gameState.allies[2].attack(gameState.enemies[0]) 
    }

}

