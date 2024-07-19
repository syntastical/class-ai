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
    if(gameState.enemies[2].currentHitpoints > 0) {
        gameState.allies.forEach((ally) => {
            ally.attack(gameState.enemies[2])
        })
    } else if (gameState.enemies[1].currentHitpoints > 0){ gameState.allies.forEach((ally) => {
            ally.attack(gameState.enemies[1])
        })
    } else if (gameState.enemies[0].currentHitpoints > 0){ gameState.allies.forEach((ally) => {
        ally.attack(gameState.enemies[0])
        }) 
    }
    

    
    
}


