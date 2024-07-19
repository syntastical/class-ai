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
    let enemy = findAliveEnemy(gameState.enemies)

        gameState.allies[0].attack(gameState.enemies[0])
        //gameState.allies[0].attack(enemy)
        
    gameState.allies[1].attack(gameState.enemies[1])
    
    gameState.allies[2].attack(gameState.enemies[2])
    
}

function findAliveEnemy(enemies) {
    for(let c = 0; c < enemies.length; c++) {
      
        // use an if block to find if the enemy is still alive, if it is return the enemy.
        // return enemies[c]
    }
}