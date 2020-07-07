/*
{
    enemies: [
        {
            name: "name",
            currentHitpoints: 123,
            maxHitpoints: 234
        }
    ]
    allies: [
        {
            name: "",
            hitpoints: 123,
            maxHitpoints: 234,
            items: [
                {
                    name: "revive"
                    description: "Revives a fallen ally."
                }
            ]
            attack(enemy),
            heal(ally),
            useItem(item)
        }
    ]
}
*/
function alliesTurn(gameState) {
    gameState.allies[0].attack(gameState.enemies[0]);
}
