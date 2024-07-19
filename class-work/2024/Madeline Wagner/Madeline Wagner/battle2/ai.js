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
            fireball(enemy),         Mage only: cast fireball on a character, dealing 20 damage as the cost of 13 mana
            sap(enemy),             Mage only: cast sap on a character, draining 7 hitpoints and 7 mana at the cost of 7 mana
            spells()                Mage/Cleric only: returns a list of spells
        }
    ]
}
*/

//if(gameState.enemies[0].currentHitpoints > 0) {
    //return[gameState.allies.forEach(ally => {
        //ally.attack(gameState.enemies[0])
//})]};

//gameState.allies[0].attack(gameState.enemies[0]);
function alliesTurn(gameState) {
        
    gameState.allies.forEach(ally => {
        console.log(ally.name, ally.class)
    })



    if(gameState.allies[3].class === 'mage' ) {
        gameState.allies [3].fireball(gameState.enemies[0]) 
    }

    if(gameState.allies[0].class === 'warrior' ) {
        gameState.allies [0].attack(gameState.enemies[0])
        
    }
    if(gameState.allies[1].class === 'warrior' ) {
        gameState.allies [1].attack(gameState.enemies[0])
        
    }
    if(gameState.enemies[0].currentHitpoints > 0) {
        gameState.allies.forEach(ally => {
                ally.attack(gameState.enemies[0])
        })
    };

}
