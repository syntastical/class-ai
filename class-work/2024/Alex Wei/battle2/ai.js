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

    let a = (gameState.allies[0].currentHitpoints)
    let b = (gameState.allies[1].currentHitpoints)
    let c = (gameState.allies[2].currentHitpoints)
    let d = (gameState.allies[3].currentHitpoints)
   
    if(gameState.enemies[3].currentHitpoints > 0) {
        gameState.allies[0].attack(gameState.enemies[3])
        gameState.allies[1].attack(gameState.enemies[3])
        
    } else if (gameState.enemies[2].currentHitpoints > 0){ 
        gameState.allies[0].attack(gameState.enemies[2])
        gameState.allies[1].attack(gameState.enemies[2])
        
    } else if (gameState.enemies[1].currentHitpoints > 0){ 
        gameState.allies[0].attack(gameState.enemies[1])
        gameState.allies[1].attack(gameState.enemies[1])
        
    } else if (gameState.enemies[0].currentHitpoints > 0){ 
        gameState.allies[0].attack(gameState.enemies[0])
         gameState.allies[1].attack(gameState.enemies[0])
        
    }
    

    if( d < 77 && d > 0 ){
        gameState.allies[2].heal(gameState.allies[3])

    }else if(b < 75 && b > 0){
        gameState.allies[2].heal(gameState.allies[1])

    }else if(a < 25 && a > 0){
        gameState.allies[2].heal(gameState.allies[0])

    }else if(c < 25 && c > 0){
        gameState.allies[2].heal(gameState.allies[2])
    }
    


    if(gameState.enemies[3].currentHitpoints > 0) {
        gameState.allies[3].sap(gameState.enemies[3])

    }else if(gameState.enemies[2].currentHitpoints > 0) {
        gameState.allies[3].fireball(gameState.enemies[2])
    }



}
// function alliesTurn(gameState) {
//     // gameState.allies[0].attack(gameState.enemies[0]);
//     gameState.allies.forEach(ally => {

//         console.log(ally.name, ally.class)
//     })
// }