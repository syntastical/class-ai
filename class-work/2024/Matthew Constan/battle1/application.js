class Character {
    constructor(name, currentHitpoints, maxHitpoints, alignment, sprite) {
        this._name = name;
        this._currentHitpoints = currentHitpoints;
        this._maxHitpoints = maxHitpoints;
        this._alignment = alignment;
        this._sprite = sprite
    }

    attack(character) {
        if(this._currentHitpoints === 0) {
            addText(`${this._name} was commanded to attack but is already dead!`);
        }
        // let character = (this._alignment === 'enemy' ? gameState.allies : gameState.enemies).filter(character => character.name === name)[0];
        if(character.currentHitpoints === 0) {
            addText(`${character.name} has already been defeated, no effect!`);
            return;
        }

        let damage = (character.currentHitpoints < 3 ? character.currentHitpoints : 3);
        character.currentHitpoints -= damage;
        addText(`${this.name} attacked ${character.name} for ${damage} damage`);
        let hpUi = document.getElementById(`${character.name}-hp`);
        hpUi.innerText = ` (${character.currentHitpoints}:${character.maxHitpoints})`

        if(character.currentHitpoints === 0) {
            addText(`${character.name} has been slain!`);
        }
    }

    get currentHitpoints() {
        return this._currentHitpoints;
    }


    set currentHitpoints(hitpoints) {
        this._currentHitpoints = hitpoints;
    }

    get name() {
        return this._name;
    }

    get maxHitpoints() {
        return this._maxHitpoints;
    }

    get alignment() {
        return this._alignment;
    }

    get sprite() {
        return this._sprite;
    }
}

let enemyField = document.getElementById('enemies');
let allyField = document.getElementById('allies');
let battleLog = document.getElementById('battle-log');

let gameOver = false;
let gameState = {
    enemies: [
        new Character("King Knight", 100, 100, "enemy", getImage4()),
        new Character("Enchantress", 100, 100, "enemy", getImage5()),
        new Character("Specter Knight", 100, 100, "enemy", getImage6())
    ],
    allies: [
        new Character("Shield Knight", 100, 100, "ally", getImage1()),
        new Character("Shovel Knight", 100, 100, "ally", getImage2()),
        new Character("Black Knight", 100, 100, "ally", getImage3())
    ]
}
function getImage1() {
    return [
        "images/Shield_Knight_Treasure_Trove.webp",
    ]
}
function getImage2() {
    return [
        "images/Shovel_transparent.webp",
    ]
}
function getImage3() {
    return [
        "images/Sprite_BlackKnight.webp",
    ]
}
function getImage4() {
    return [
        "images/KingKnight.webp",
    ]
}
function getImage5() {
    return [
        "images/Enchantress.webp",
    ]
}
function getImage6() {
    return [
        "images/SpecterKnight_player.webp",
    ]
}

init();

while(true) {
    let aliveAllies = gameState.allies.filter(ally => ally.currentHitpoints > 0);
    if(aliveAllies.length === 0) {
        addText('Allies have lost!')
        break;
    }

    alliesTurn(gameState);

    let aliveEnemies = gameState.enemies.filter(enemy => enemy.currentHitpoints > 0);
    if(aliveEnemies.length === 0) {
        addText('Allies have won!')
        break;
    }

    aliveEnemies.forEach(enemy => {
        enemy.attack(aliveAllies[0])
    })
}

function addText(message) {
    let logEntry = document.createElement('p');
    logEntry.appendChild(document.createTextNode(message))
    battleLog.appendChild(logEntry);
    // battleLog.insertBefore(logEntry, battleLog.firstChild);
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
    hitpoints.textContent = ` (${character.currentHitpoints}:${character.maxHitpoints})`
    name.appendChild(hitpoints)
    container.appendChild(name);

    return container;
}
