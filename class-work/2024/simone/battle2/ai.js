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
*/
function alliesTurn(gameState) {
    //warrior 0
    if(gameState.enemies[3].currentHitpoints > 0) {gameState.allies[0].attack(gameState.enemies[3]) 
    }

   if(gameState.enemies[2].currentHitpoints > 0) {gameState.allies[0].attack(gameState.enemies[2]) 
   }

   if(gameState.enemies[0].currentHitpoints > 0) {gameState.allies[0].attack(gameState.enemies[0]) 
   }
   if(gameState.enemies[1].currentHitpoints > 0) {gameState.allies[0].attack(gameState.enemies[1]) 
   }

    //warrior 1
    if(gameState.enemies[2].currentHitpoints > 0) {gameState.allies[1].attack(gameState.enemies[2]) 
    }

    if(gameState.enemies[3].currentHitpoints > 0) {gameState.allies[1].attack(gameState.enemies[3]) 
    }

    if(gameState.enemies[0].currentHitpoints > 0) {gameState.allies[1].attack(gameState.enemies[0]) 
    }

    if(gameState.enemies[1].currentHitpoints > 0) {gameState.allies[1].attack(gameState.enemies[1]) 
    }

    //cleric healing
    if(gameState.allies[2].class === 'cleric') {
        
        if(gameState.allies[3].currentHitpoints < 60) {
            gameState.allies[2].heal(gameState.allies[3])// heal
        }

        if(gameState.allies[3].currentHitpoints < 1) {
           gameState.allies[2].revive(gameState.allies[3]) //revive
        }
        if(gameState.allies[3].currentHitpoints < 1) {
            gameState.allies[1].revive(gameState.allies[3])
         }
    }

    //cleric attack
    if(gameState.enemies[3].currentHitpoints > 0) {gameState.allies[2].attack(gameState.enemies[3]) 
    }

    if(gameState.enemies[2].currentHitpoints > 0) {gameState.allies[2].attack(gameState.enemies[2]) 
    }

    if(gameState.enemies[1].currentHitpoints > 0) {gameState.allies[2].attack(gameState.enemies[1]) 
    }

    if(gameState.enemies[0].currentHitpoints > 0) {gameState.allies[2].attack(gameState.enemies[0]) 
    }

    //mage
    if(gameState.allies[3].class === 'mage') {
        gameState.allies[3].fireball(gameState.enemies[3])
    }

    if(gameState.allies[3].class === 'mage') {
        gameState.allies[3].fireball(gameState.enemies[2])
    }

    if(gameState.allies[3].class === 'mage') {
        gameState.allies[3].fireball(gameState.enemies[1])
    }

    if(gameState.allies[3].class === 'mage') {
        gameState.allies[3].fireball(gameState.enemies[0])
    }

    if(gameState.allies[3].currentHitpoints < 13) {gameState.allies[3].sap(gameState.enemies[3])}
 

    //mage attack
    if(gameState.enemies[2].currentHitpoints > 0) {gameState.allies[3].attack(gameState.enemies[1]) 
    }

    if(gameState.enemies[3].currentHitpoints > 0) {gameState.allies[3].attack(gameState.enemies[3]) 
    }

    if(gameState.enemies[0].currentHitpoints > 0) {gameState.allies[3].attack(gameState.enemies[4]) 
    }

    if(gameState.enemies[1].currentHitpoints > 0) {gameState.allies[3].attack(gameState.enemies[0]) 
    }
}