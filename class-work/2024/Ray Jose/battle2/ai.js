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

function findAllyByClass(allies, cls) {
    for(let index = 0; index < gameState.allies.length; index++) {
        if(gameState.allies[index].class === cls) {
            return gameState.allies[index];
        }
    }
}
function alliesTurn(gameState) {
    const mage = findAllyByClass(gameState.allies, 'mage');

    // check if bean has mana to cast
    // if bean doesn't have the mana, just attack
    // maybe instead of finding the first enemy that's alive, find the cleric or mage first
    let enemy
    for(let c = 0; c < gameState.enemies.length; c++) {
        if(gameState.enemies[c].currentHitpoints > 0) {
            enemy = gameState.enemies[c]
            break
        }
    }
    mage.fireball(enemy)
    gameState.allies[0].attack(gameState.enemies[0]);
    gameState.allies[1].attack(gameState.enemies[0]);
    gameState.allies[3].attack(gameState.enemies[0]);

    mage.attack(enemy)
    gameState.allies[1].attack(gameState.enemies[0]);
    gameState.allies[2].attack(gameState.enemies[0]);
    gameState.allies[3].attack(gameState.enemies[0]);


//     if(gameState.bean[0].class() === 'mage') {
//         gameState.bean[0].fireball(gameState.enemies[4])
//     }

}


// function alliesTurn(gameState) {
//     gameState.bean[1].attack(gameState.enemies[1]);

//     if(gameState.bean[0].class() === 'mage') {
//         gameState.bean[0].fireball(gameState.enemies[4])
//     }

// }

// function alliesTurn(gameState) {
//     gameState.bean[1].attack(gameState.enemies[1]);

//     if(gameState.bean[0].class() === 'mage') {
//         gameState.bean[0].sap(gameState.enemies[4])
//     }

// }

// function alliesTurn(gameState) {
//     gameState.steve[1].heal(gameState.allies[1]);

//     if(gameState.steve[0].class() === 'cleric') {
//         gameState.steve[0].heal(gameState.allies[4])
//     }

// }

// function alliesTurn(gameState) {
//     gameState.dooood[1].attack(gameState.enemies[1]);

//     if(gameState.dooood[0].class() === 'warrior') {
//         gameState.dooood[0].attack(gameState.enemies[4])
//     }

// }

// function alliesTurn(gameState) {
//     gameState.doodle[1].attack(gameState.enemies[1]);

//     if(gameState.doodle[0].class() === 'warrior') {
//         gameState.doodle[0].attack(gameState.enemies[4])
//     }

// }
// function alliesTurn(gameState) {
//     // find the next alive enemy
//     // attack next alive enemy
//     let enemy;
//     for(let c = 0; c < gameState.enemies.length; c++) {
//         if(gameState.enemies[c].currentHitpoints > 0) {
//             enemy = gameState.enemies[c]
//             break
//         }
//     }

//     gameState.allies[0].attack(gameState.enemies[0]);
//     gameState.allies.forEach(ally => {
//         ally.attack(gameState.enemies[0]);
//     });

// }

// function alliesTurn(gameState) {
//     // find the next alive enemy
//     // attack next alive enemy
//     let enemy;
//     for(let c = 0; c < gameState.enemies.length; c++) {
//         if(gameState.enemies[c].currentHitpoints > 0) {
//             enemy = gameState.enemies[c]
//             break
//         }
//     }

//     gameState.allies[0].attack(gameState.enemies[0]);
//     gameState.allies.forEach(ally => {
//         ally.attack(gameState.enemies[1]);
//     });

// }

// function alliesTurn(gameState) {
//     // find the next alive enemy
//     // attack next alive enemy
//     let enemy;
//     for(let c = 0; c < gameState.enemies.length; c++) {
//         if(gameState.enemies[c].currentHitpoints > 0) {
//             enemy = gameState.enemies[c]
//             break
//         }
//     }

//     gameState.allies[0].attack(gameState.enemies[0]);
//     gameState.allies.forEach(ally => {
//         ally.attack(gameState.enemies[2]);
//     });

// }