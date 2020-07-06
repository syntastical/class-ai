class Character {
    constructor(name, currentHitpoints, maxHitpoints, alignment, sprite) {
        this._name = name;
        this._currentHitpoints = currentHitpoints;
        this._maxHitpoints = maxHitpoints;
        this._alignment = alignment;
        this._sprite = sprite
    }

    attack(name) {
        let character = (this._alignment === "enemy" ? gameState.allies : gameState.enemies).filter(character => character.name === name)[0];
        if(character.currentHitpoints === 0) {
            addText(`${name} has already been defeated, no effect!`);
            return;
        }

        let damage = (character.currentHitpoints < 3 ? character.currentHitpoints : 3);
        character.currentHitpoints -= damage;
        addText(`${this.name} attacked ${name} for ${damage} damage`);

        if(character.currentHitpoints === 0) {
            addText(`${name} has been slain!`);
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
        new Character("blobby", 100, 100, "enemy", "images/blue.png"),
        new Character("blobbita", 100, 100, "enemy", "images/blue.png"),
        new Character("steve", 100, 100, "enemy", "images/blue.png")
    ],
    allies: [
        new Character("dooood", 100, 100, "ally", "images/blue.png"),
        new Character("doodle", 100, 100, "ally", "images/blue.png"),
        new Character("tim", 100, 100, "ally", "images/blue.png")
    ]
}

init()

while(true) {
    alliesTurn(gameState);

    let aliveEnemies = gameState.enemies.filter(enemy => enemy.currentHitpoints > 0);
    if(aliveEnemies.length === 0) {
        addText('Allies have won!')
        break;
    }

    let aliveAllies = gameState.allies.filter(ally => ally.currentHitpoints > 0);
    if(aliveAllies.length === 0) {
        addText('Allies have lost!')
        break;
    }

    aliveEnemies.forEach(enemy => {
        enemy.attack(aliveAllies[0].name)
    })
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
    container.appendChild(name);

    return container;
}
