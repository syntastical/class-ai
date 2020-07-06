/*
{
    enemies: [
        {
            name: "",
            currentHitpoints: 123,
            maxHitpoints: 234
        }
    ]
    allies: [
        {
            name: "",
            hitpoints: 123,
            maxHitpoints: 234,
            status: "dead" || "ready" || "exhausted",
            attack(name): int
        }
    ]
}
*/
function alliesTurn(gameState) {
    gameState.allies[0].attack(gameState.enemies[0].name);
}
