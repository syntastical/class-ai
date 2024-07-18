import { alliesTurn as abc } from './ai.js';

class Character {
    constructor(name, hitpoints, magicpoints, alignment, sprite) {
        this._name = name;
        this._currentHitpoints = hitpoints;
        this._maxHitpoints = hitpoints;
        this._currentMagicpoints = magicpoints;
        this._maxMagicpoints = magicpoints;
        this._alignment = alignment;
        this._sprite = sprite;
        this._strength = Math.floor(Math.random() * 3) + 1;
        this.exhausted = false;
    }

    attack(character) {
        if(this.exhausted) {
            addText(`${this.name} attempted to attack ${character.name}, but is exhausted.`);
            return;
        }

        if(this.currentHitpoints === 0) {
            addText(`${this._name} was commanded to attack but is already dead!`);
        }

        if(character.currentHitpoints === 0) {
            addText(`${character.name} has already been defeated, no effect!`);
            return;
        }

        let damage = (character.currentHitpoints < this.strength ? character.currentHitpoints : this.strength);
        character.currentHitpoints -= damage;
        addText(`${this.name} attacked ${character.name} for ${damage} damage`);

        if(character.currentHitpoints === 0) {
            addText(`${character.name} has been slain!`);
        }
        this.exhausted = true;
    }

    get strength() {
        return this._strength;
    }

    get currentHitpoints() {
        return this._currentHitpoints;
    }

    set currentHitpoints(hitpoints) {
        this._currentHitpoints = hitpoints;
    }


    get maxHitpoints() {
        return this._maxHitpoints;
    }

    get currentMagicpoints() {
        return this._currentMagicpoints;
    }

    set currentMagicpoints(magicpoints) {
        this._currentMagicpoints = magicpoints;
    }

    get maxMagicpoints() {
        return this._maxMagicpoints;
    }

    get name() {
        return this._name;
    }


    get alignment() {
        return this._alignment;
    }

    get sprite() {
        return this._sprite;
    }
}

class Warrior extends Character {
    get strength() {
        return super.strength + Math.floor(Math.random() * 2) + 1;
    }

    get class() {
        return "warrior"
    }
}

class Cleric extends Character {
    get class() {
        return "cleric"
    }

    get spells() {
        return [
            { name: 'heal', cost: 10, description: `Heals a unit for ${this.healStrength()} hitpoints.` },
            { name: 'revive', cost: 25, description: 'Revives a fallen unit with half max hitpoints.' }
        ]
    }

    revive(character) {
        if(this.currentHitpoints === 0) {
            addText(`${this.name} attempted to casts revive on ${character.name}, but ${this.name} is currently dead.`);
            return;
        }
        if(this.currentMagicpoints < 10) {
            addText(`${this.name} attempted to casts revive on ${character.name}, but doesn't have enough magicpoints!`);
            return;
        }
        if(this.exhausted) {
            addText(`${this.name} attempted to casts revive on ${character.name}, but is exhausted.`);
            return;
        }
        if(character.currentHitpoints === 0) {
            addText(`${this.name} casts revive on ${character.name}.`);
            character.currentHitpoints = character.maxHitpoints / 2;
        } else {
            addText(`${this.name} attempted to casts revive on ${character.name}, but ${character.name} isn't dead! NO EFFECT`);
        }
        this.currentMagicpoints -= 25;
        this.exhausted = true;
    }

    heal(character) {
        if(this.currentHitpoints === 0) {
            addText(`${this.name} attempted to casts heal on ${character.name}, but ${this.name} is currently dead.`);
            return;
        }
        if(this.currentMagicpoints < 10) {
            addText(`${this.name} attempted to casts heal on ${character.name}, but doesn't have enough magicpoints!`);
            return;
        }
        if(this.exhausted) {
            addText(`${this.name} attempted to casts heal on ${character.name}, but is exhausted.`);
            return;
        }
        if(character.currentHitpoints !== 0) {
            addText(`${this.name} casts heal on ${character.name} for ${this.healStrength()}.`);
            character.currentHitpoints += this.healStrength();
        } else {
            addText(`${this.name} attempted to casts heal on ${character.name}, but ${character.name} dead! NO EFFECT.`);
        }
        this.currentMagicpoints -= 10;
        this.exhausted = true;
    }

    healStrength() {
        return 13;
    }
}

class Mage extends Character {
    get class() {
        return "mage"
    }

    get spells() {
        return [
            { name: 'fireball', cost: 13, description: `Deal 20 fire damage to a single unit.` },
            { name: 'sap', cost: 7, description: 'Drain 7 magicpoints from a character and converts it to damage.' }
        ]
    }

    fireball(character) {
        if(this.currentHitpoints === 0) {
            addText(`${this.name} attempted to casts fireball on ${character.name}, but ${this.name} is currently dead.`);
            return;
        }
        if(this.currentMagicpoints < 13) {
            addText(`${this.name} attempted to casts fireball on ${character.name}, doesn't have enough magicpoints!`);
            return;
        }
        if(this.exhausted) {
            addText(`${this.name} attempted to casts fireball on ${character.name}, but is exhausted.`);
            return;
        }
        if(character.currentHitpoints !== 0) {
            addText(`${this.name} casts fireball on ${character.name} for 20 damage.`);
            character.currentHitpoints -= (character.currentHitpoints < 20 ? character.currentHitpoints : 20);
        } else {
            addText(`${this.name} attempted to casts fireball on ${character.name}, but ${character.name} dead! NO EFFECT.`);
        }
        this.currentMagicpoints -= 13;
        this.exhausted = true;
    }

    sap(character) {
        if(this.currentHitpoints === 0) {
            addText(`${this.name} attempted to casts sap on ${character.name}, but ${this.name} is currently dead.`);
            return;
        }
        if(this.currentMagicpoints < 7) {
            addText(`${this.name} attempted to casts sap on ${character.name}, doesn't have enough magicpoints!`);
            return;
        }
        if(this.exhausted) {
            addText(`${this.name} attempted to casts sap on ${character.name}, but is exhausted.`);
            return;
        }
        if(character.currentHitpoints !== 0) {
            addText(`${this.name} casts sap on ${character.name} draining 7 magicpoints and dealing 7 damage.`);
            character.currentHitpoints -= (character.currentHitpoints < 7 ? character.currentHitpoints : 7);
            character.currentMagicpoints -= (character.currentMagicpoints < 7 ? character.currentMagicpoints : 7);
        } else {
            addText(`${this.name} attempted to casts sap on ${character.name}, but ${character.name} dead! NO EFFECT.`);
        }
        this.currentMagicpoints -= 7;
        this.exhausted = true;
    }
}

let enemyField = document.getElementById('enemies');
let allyField = document.getElementById('allies');
let battleLog = document.getElementById('battle-log');

let gameState = {
    enemies: [
        new Warrior("blobby", 200, 0, "enemy", "images/blue.png"),
        new Warrior("blobbita", 170, 0, "enemy", "images/blue.png"),
        new Cleric("blobbert", 100, 50, "enemy", "images/purple.png"),
        new Mage("blob", 90, 50, "enemy", "images/red.png")
    ],
    allies: [
        new Warrior("dooood", 200, 0, "ally", "images/blue.png"),
        new Warrior("doodle", 170, 0, "ally", "images/blue.png"),
        new Cleric("steve", 100, 50, "ally", "images/purple.png"),
        new Mage("bean", 90, 50, "ally", "images/red.png")
    ]
}

init();

while(true) {
    let aliveAllies = gameState.allies.filter(ally => ally.currentHitpoints > 0);
    if(aliveAllies.length === 0) {
        addText('Allies have lost!')
        break;
    }

    gameState.allies.forEach(ally => ally.exhausted = false)
    alliesTurn(gameState);


    console.log(abc)
    // let aliveEnemies = gameState.enemies.filter(enemy => enemy.currentHitpoints > 0);
    // if(aliveEnemies.length === 0) {
    //     addText('Allies have won!')
    //     break;
    // }
    //
    // gameState.enemies.forEach(ally => ally.exhausted = false)
    // aliveEnemies.forEach(enemy => {
    //     let target = gameState.allies.reduce((acc, cur) => {
    //        if(!cur) {
    //            return acc;
    //        }
    //
    //        if((cur.currentHitpoints > acc.currentHitpoints || cur.currentHitpoints === 0) && (acc.currentHitpoints !== 0)) {
    //            return acc;
    //        }
    //        return cur;
    //     });
    //
    //     if(enemy.class === 'cleric') {
    //         if(enemy.currentMagicpoints >= 25) {
    //             let deadPartyMember = gameState.enemies.find(deadEnemy => deadEnemy.currentHitpoints === 0);
    //             if(deadPartyMember) {
    //                 enemy.revive(deadPartyMember);
    //                 return;
    //             }
    //         }
    //         if(enemy.currentMagicpoints >= 10) {
    //             let hurtPartyMember = gameState.enemies.find(hurtEnemy => hurtEnemy.maxHitpoints - hurtEnemy.currentHitpoints >= 20 && hurtEnemy.currentHitpoints !== 0);
    //             if(hurtPartyMember) {
    //                 enemy.heal(hurtPartyMember);
    //                 return;
    //             }
    //         }
    //     } else if(enemy.class === 'mage') {
    //         if(enemy.currentMagicpoints >= 7) {
    //             let allyCaster = gameState.allies.find(allyUnit => allyUnit.currentMagicpoints > 0 && allyUnit.currentHitpoints > 0);
    //             if(allyCaster) {
    //                 enemy.sap(allyCaster);
    //                 return;
    //             }
    //         }
    //         if(enemy.currentMagicpoints >= 13) {
    //             enemy.fireball(target);
    //             return;
    //         }
    //     }
    //     enemy.attack(target)
    // })

    gameState.enemies.forEach(character => {
        let hp = document.getElementById(`${character.name}-hp`);
        let mp = document.getElementById(`${character.name}-mp`);
        hp.textContent = ` HP(${character.currentHitpoints}:${character.maxHitpoints})`
        mp.textContent = ` MP(${character.currentMagicpoints}:${character.maxMagicpoints})`
    });

    gameState.allies.forEach(character => {
        let hp = document.getElementById(`${character.name}-hp`);
        let mp = document.getElementById(`${character.name}-mp`);
        hp.textContent = ` HP(${character.currentHitpoints}:${character.maxHitpoints})`
        mp.textContent = ` MP(${character.currentMagicpoints}:${character.maxMagicpoints})`
    });
}

function addText(message) {
    let logEntry = document.createElement('p');
    logEntry.appendChild(document.createTextNode(message))
    battleLog.appendChild(logEntry);
}

function init() {
    gameState.enemies.forEach(enemy => {
        enemyField.appendChild(createCharacter(enemy));
    });

    gameState.allies.forEach(ally => {
        allyField.appendChild(createCharacter(ally));
    });

}

function createCharacter(character) {
    let container = document.createElement('div');
    let cls = document.createAttribute("class");
    cls.value = "character";
    container.setAttributeNode(cls);

    let id = document.createAttribute("id");
    id.value = character.name;
    container.setAttributeNode(id);

    let image = document.createElement('img');
    let src = document.createAttribute('src');
    src.value = character.sprite;
    image.setAttributeNode(src);
    container.appendChild(image);

    let name = document.createElement('div');
    name.appendChild(document.createTextNode(character.name));
    
    let hitpoints = document.createElement('span');
    hitpoints.setAttribute('id', `${character.name}-hp`)
    hitpoints.textContent = ` HP(${character.currentHitpoints}:${character.maxHitpoints})`
    name.appendChild(hitpoints);

    let magicpoints = document.createElement('span');
    magicpoints.setAttribute('id', `${character.name}-mp`)
    name.appendChild(magicpoints);
    magicpoints.textContent = ` MP(${character.currentMagicpoints}:${character.maxMagicpoints})`
    container.appendChild(name);

    return container;
}


