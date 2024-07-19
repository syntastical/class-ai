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
            heal(ally),             Cleric only (steve/2): heals a character for 13 hitpoints at the cost of 10 mana
            revive(ally),           Cleric only: revives a fallen character to half health at the cost of 25 mana
            fireball(enemy),        Mage only (Bean/3): cast fireball on a character, dealing 20 damage as the cost of 13 mana
            sap(enemy),             Mage only: cast sap on a character, draining 7 hitpoints and 7 mana at the cost of 7 mana
            spells()                Mage/Cleric only: returns a list of spells
        }
    ]
}
*/
// function alliesTurn(gameState) { 
//         gameState.allies.forEach(ally => {
//         console.log(ally.name, ally.class)
//     })
//     for(let c = 0; c < gameState.enemies.length; c++) {
//         if(gameState.enemies[c].currentHitpoints > 0) {
//             enemy = gameState.enemies[c]
//             break
//         }
//     }
//     gameState.allies[0].attack(gameState.enemies[0])

//     if(gameState.allies[3].class ==='mage') {
//         gameState.allies[3].sap(gameState.enemies[0])
//     }
//     if(gameState.allies[1].class === 'warrior') {
//         gameState.allies[1].attack(gameState.enemies[3])
//     }
//     if(gameState.allies[3].class ==='mage') {
//         gameState.allies[3].fireball(gameState.enemies[1])
//     }
//     if(gameState.allies[2].class ==='cleric') {
//         gameState.allies[2].heal(gameState.allies[1])
        
//     if(gameState.allies[0].class === 'warrior') {
//         gameState.allies[0].attack(gameState.enemies[3])
//     }
//     if(gameState.allies[1].class === 'warrior') {
//         gameState.allies[1].attack(gameState.enemies[2])
//     }
//     if(gameState.allies[2].class ==='cleric') {
//         gameState.allies[2].heal(gameState.allies[3])
        
//     if(gameState.allies[2].class ==='cleric') {
//         gameState.allies[2].heal(gameState.allies[0])
//         if(gameState.allies[1].class === 'warrior') {
//             gameState.allies[1].attack(gameState.enemies[1])
//     }
//     if(gameState.allies[2].class ==='cleric') {
//         gameState.allies[2].heal(gameState.allies[3])
//     }
//     if(gameState.allies[1].class === 'warrior') {
//         gameState.allies[1].attack(gameState.enemies[3])
//     }
//     if(gameState.allies[2].class ==='cleric') {
//         gameState.allies[2].heal(gameState.allies[0])
//     }
//     if(gameState.allies[3].class ==='mage') {
//         gameState.allies[3].fireball(gameState.enemies[3])
//     }
//     gameState.allies[1].attack(gameState.enemies[1])

//     if(gameState.allies[2].class ==='cleric') {
//         gameState.allies[2].revive(gameState.allies[1])
//     }
//     if(gameState.allies[1].class === 'warrior') {
//         gameState.allies[1].attack(gameState.enemies[3])
//     }
// }}}}
   

// // turn 1
// function alliesTurn(gameState) { 
//         gameState.allies.forEach(ally => {
//         console.log(ally.name, ally.class)
//     })
//     for(let allyIndex = 0; allyIndex < gameState.allies.length; allyIndex++) {
//         let currentAlly = gameState.allies[allyIndex]
//         if(currentAlly.class === 'mage') {
//             // do some mage stuff
//         } else if (currentAlly === 'cleric') {
//             // heal some people 
//         }

//         //default attack logic here
        
//     }
//     // for(let c = 0; c < gameState.enemies.length; c++) {
//     //     if(gameState.enemies[c].currentHitpoints > 0) {
//     //         enemy = gameState.enemies[c]
//     //         break
//     //     }
//     // }
//     if(gameState.allies[0].class === 'warrior') {
//         gameState.allies[0].attack(gameState.enemies[0])
//     }
//     if(gameState.allies[1].class === 'warrior') {
//         gameState.allies[1].attack(gameState.enemies[0])
//     }
//     if(gameState.allies[3].class === 'mage') {
//         gameState.allies[3].sap(gameState.enemies[0])
//     }
//     if(gameState.allies[2].class === 'cleric') {
//         gameState.allies[2].heal(gameState.allies[0])
//     }
// }

// // turn 2
// function alliesTurn(gameState) {
//     if(gameState.allies[0].class === 'warrior') {
//         gameState.allies[0].attack(gameState.enemies[1])
//     }
//     if(gameState.allies[1].class === 'warrior') {
//         gameState.allies[1].attack(gameState.enemies[1])
//     }
//     if(gameState.allies[3].class === 'mage') {
//         gameState.allies[3].fireball(gameState.enemies[1])
//     }
//     if(gameState.allies[2].currentHitpoints === 0) {
//         gameState.allies[2].heal
//     }
// }

// // turn 3
// function alliesTurn(gameState) {
//     if(gameState.allies[0].class === 'warrior') {
//         gameState.allies[0].attack(gameState.enemies[0])
//     }
//     if(gameState.allies[1].class === 'warrior') {
//         gameState.allies[1].attack(gameState.enemies[0])
//     }
//     if(gameState.allies[3].class === 'mage') {
//         gameState.allies[3].sap(gameState.enemies[0])
//     }
//     if(gameState.allies[2].currentHitpoints === 0) {
//         gameState.allies[2].heal
//     }
// }
 
// // turn 4
// function alliesTurn(gameState) {
//     if(gameState.allies[0].class === 'warrior') {
//         gameState.allies[0].attack(gameState.enemies[0])
//     }
//     if(gameState.allies[1].class === 'warrior') {
//         gameState.allies[1].attack(gameState.enemies[0])
//     }
//     if(gameState.allies[3].class === 'mage') {
//         gameState.allies[3].sap(gameState.enemies[0])
//     }
//     if(gameState.allies[2].currentHitpoints === 0) {
//         gameState.allies[2].heal
//     }
// }

// // turn 5
// function alliesTurn(gameState) {
//     if(gameState.allies[0].class === 'warrior') {
//         gameState.allies[0].attack(gameState.enemies[2])
//     }
//     if(gameState.allies[1].class === 'warrior') {
//         gameState.allies[1].attack(gameState.enemies[2])
//     }
//     if(gameState.allies[3].class === 'mage') {
//         gameState.allies[3].sap(gameState.enemies[2])
//     }
//     gameState.allies[2].attack
// }

// // turn 6
// function alliesTurn(gameState) {
//     if(gameState.allies[3].class === 'mage') {
//         gameState.allies[3].fireball(gameState.enemies[3])
//     }
//     if(gameState.allies[2].class === 'cleric') {
//         gameState.allies[2].heal(gameState.allies[3])
//     }
//     if(gameState.allies[1].class === 'warrior') {
//         gameState.allies[1].attack(gameState.enemies[3])
//     }
//     if(gameState.allies[0].class === 'warrior') {
//         gameState.allies[0].attack(gameState.enemies[3])
//     }
// }

// // turn 7
// function alliesTurn(gameState) {
//     if(gameState.allies[3].class === 'mage') {
//         gameState.allies[3].sap(gameState.enemies[2])
//     }
//     if(gameState.allies[0].class === 'warrior') {
//         gameState.allies[0].attack(gameState.enemies[3])
//     }
//     if(gameState.allies[1].class === 'warrior') {
//         gameState.allies[1].attack(gameState.enemies[2])
//     }
//     if(gameState.allies[2].class === 'cleric') {
//         gameState.allies[2].heal(gameState.allies[3])
//     }
// }

// // turn 8
// function aqlliesTurn(gameState) {
//     if(gameState.allies[3].class === 'mage') {
//         gameState.allies[3].sap(gameState.enemies[0])
//     }
//     if(gameState.allies[0].class === 'warrior') {
//         gameState.allies[0].attack(gameState.enemies[3])
//     }
//     if(gameState.allies[1].class === 'warrior') {
//         gameState.allies[1].attack(gameState.enemies[2])
//     }
//     if(gameState.allies[2].class === 'cleric') {
//         gameState.allies[2].heal(gameState.allies[3])
//     }
// }

// // 0 attacks 2
// 1 attack 2
// 2 attacks 2
// 3 casts sap on 2
// 0 attacks 2
// 1 attack 2
// 2 attacks 2
// 3 casts sap on 2 
// (repeat pattern until enemies are dead)


// for(let c = 0; c < gameState.enemies.length; c++) {
//     //     if(gameState.enemies[c].currentHitpoints > 0) {
//     //         enemy = gameState.enemies[c]
//     //         break

for(let c = 0; c< gameState.enemies.lenth; c++) {
    if(gameState.enemies[c].currentHitpoints > 0) {
        enemy = gameState.enemies[c]
        break
    }
}