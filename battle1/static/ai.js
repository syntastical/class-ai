/*
{
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
        if(ally.currentHitpoints !== 0) {

            let targetEnemy;
            for(var count = 0; count < gameState.enemies.length; count++) {
                // Is dead
                if(gameState.enemies[count].currentHitpoints == 0) {
                    continue
                }

                // Do we have a enemy selected already?
                if(!targetEnemy) {
                    targetEnemy = gameState.enemies[count];
                    continue
                }

                // Does the currently select enemy have more hitpoints than the enemy we are evaluating
                if(targetEnemy.maxHitpoints > gameState.enemies[count].maxHitpoints) {
                    targetEnemy = gameState.enemies[count]
                }
            }

            ally.attack(targetEnemy);
        }
    });
}

