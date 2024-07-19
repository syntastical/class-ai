/*
gameState = {
    enemies: [
        {
            name: "name",
            currentHitpoints: 123,
            maxHitpoints: 234,
            currentMagicpoints: 123,
            maxMagicpoints: 234,
            class(): string         Returns the class of the character (mage, warrior, cleric)
        }
    ]
    allies: [
        {
            name: "",
            currentHitpoints: 123,
            maxHitpoints: 234,
            currentMagicpoints: 25,
            maxMagicpoints: 25
            class(): string,        Returns the class of the character (mage, warrior, cleric)
            attack(enemy),          Attacks a character
            heal(ally),             Cleric only: heals a character for 13 hitpoints at the cost of 10 mana
            revive(ally),           Cleric only: revives a fallen character to half health at the cost of 25 mana
            fireball(enemy),        Mage only: cast fireball on a character, dealing 20 damage as the cost of 13 mana
            sap(enemy),             Mage only: cast sap on a character, draining 7 hitpoints and 7 mana at the cost of 7 mana
            spells()                Mage/Cleric only: returns a list of spells
        }
    ]
}

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
    gameState.allies.forEach(ally => {
        gameState.allies[3].forEach(gameState.enemies[3])
        ally.attack(gameState.enemies[3]);
    })
*/

function findEnemy(gameState, enemyClass){
    for(let x = 0; x < gameState.enemies.length; x++) {
        if(gameState.enemies[x].class === enemyClass) {
            return gameState.enemies[x]
        }
    }
}
function alliesTurn(gameState) {
    // gameState.allies.forEach(ally => {
    //     console.log(ally.name, ally.class)
    // })
 
    let enemyCleric = findEnemy(gameState, 'cleric')
    let enemyMage = findEnemy(gameState, 'mage')
    let enemyWarrior = findEnemy(gameState, 'warrior')
    
    
    for(let z = 0; z < gameState.allies.length; z++) {    
        let exhausted = false
        const ally = gameState.allies[z];
        if(ally.class === 'cleric') {
            for(let y = 0; y < gameState.allies.length; y++) { 
                const checkAlly = gameState.allies[y];
                if(checkAlly.currentHitpoints > 0 && checkAlly.currentHitpoints < 90) {
                    ally.heal(checkAlly)
                    exhausted = true
                }
            }
            
        } 
        if(ally.class === 'mage') {
            for(let y = 0; y < gameState.enemies.length; y++) { 
                const checkEnemies = gameState.enemies[y];
                if(checkEnemies.class === 'cleric' && checkEnemies.currentHitpoints > 0 && ally.currentMagicpoints > 6) {
                    if(checkEnemies.currentMagicpoints > 6) {
                        ally.sap(checkEnemies)
                    } else {
                        ally.fireball(checkEnemies)
                    }
                    
                    exhausted = true
                }
            }
            
        } 
        
        if(!exhausted && ally.currentHitpoints > 0) {
            for(let x = gameState.enemies.length - 1; x >= 0; x--) {
                const enemy = gameState.enemies[x];
                if(enemy.currentHitpoints > 0) {
                    ally.attack(enemy)
                    break
                }
            }
        }
    }
    
    // if(enemy.currentHitpoints <= 20) {
    //     fireball(enemy)
    // }
    // if(enemy.currentHitpoints > 20) {
    //     sap(enemy)
    // }
}
