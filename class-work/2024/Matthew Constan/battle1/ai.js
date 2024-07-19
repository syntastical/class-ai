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
            attack(enemy),          Attacks a character unless dead. If dead, move on to next enemy.
            heal(ally),             Cleric only: heals a character for 13 hitpoints at the cost of 10 mana
            revive(ally),           Cleric only: revives a fallen character to half health at the cost of 25 mana only if ally has 0 health.
            fireball(enemy),        Mage only: cast fireball on a character, dealing 20 damage as the cost of 13 mana
            sap(enemy),             Mage only: cast sap on a character, draining 7 hitpoints and 7 mana at the cost of 7 mana
            spells()                Mage/Cleric only: returns a list of spells
        }
    ]
}
    If character cannot be commanded to attack if already dead.
*/
function alliesTurn(gameState) {
    for(let allyIndex = 0; allyIndex < gameState.allies.length; allyIndex++) {
        const ally = gameState.allies[allyIndex];
        if(ally.currentHitpoints > 0) {
            // our ally is still alive
            if(ally.class === 'cleric') {
                // loop through and find an ally that needs help
                for(let helpIndex = 0; helpIndex < gameState.allies.length; helpIndex++) {
                    const allyThatNeedsHelp = gameState.allies[helpIndex]
                    if(allyThatNeedsHelp.currentHitpoints < 1) {
                        // revive ally
                        ally.revive(ally)
                    } else {
                    if(allyThatNeedsHelp.currentHitpoints > 0) {
                        // greater than zero and less than X
                        // heal ally
                    }
                }
                }
            }
    
            // ally is still alive, have them do something
            for(let enemyIndex = 0; enemyIndex < gameState.allies.length; enemyIndex++) {
                const enemy = gameState.enemies[enemyIndex];
                if(enemy.currentHitpoints > 0) {
                    // enemy is alive, attack
                    if(ally.class === 'mage') {
                        //fireball or sap
                    } else {
                        ally.attack(enemy);
                    }
 
                }
            }
        }
        if(gameState.enemies[0].currentHitpoints > 0) {
            // attack this enemy
        }
    }

    // gameState.allies[0].attack(gameState.enemies[0]);
    // gameState.allies[1].attack(gameState.enemies[1]);
    // gameState.allies[2].attack(gameState.enemies[2]);
    // gameState.allies[3].attack(gameState.enemies[3]);
}