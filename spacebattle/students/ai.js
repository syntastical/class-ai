const ai = {
  info: {
    name: 'asdf',
    style: 9
  },

  ai: function(player, enemies, map) {
    // console.log('player', JSON.stringify(player))
    // player {"name":"asdf","id":"C68KBEGF","style":9,"position":[2,5],"direction":"north","directionAngle":0,"ammo":0,"isAlive":true}
    // console.log('enemies', JSON.stringify(enemies))
    // enemies [{"name":"Manuelmhtr","id":"2BCK49B5","style":3,"position":[8,9],"direction":"north","directionAngle":0,"ammo":0,"isAlive":true},...]
    // console.log('map', JSON.stringify(map))
    // map {"gridSize":13,"ammoPosition":[[1,3],[6,2]]}

    //findClosest(player.position, map.ammoPosition) // find closest ammo
  },
};