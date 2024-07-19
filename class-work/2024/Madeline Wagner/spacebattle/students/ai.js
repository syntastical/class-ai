let turn = 0;
const ai = {
  info: {
    name: 'MADELINE',
    style: 9
  },

  ai: function(player, enemies, map) {
    console.log('player', JSON.stringify(player))
    console.log('enemies',JSON.stringify(enemies))
    console.log('map',JSON.stringify(map))

    const [playerY, playerX] = player.position // player.position = [y,x]

    turn++
    if(turn === 1) {
      return 'move'
    }

    if(player.direction === 'south' && playerY === 12) {
      return 'west'
    }
    if(player.direction === 'north' && playerY === 0) {
      return 'east'
    }
    if(player.direction === 'east' && playerX === 12) {
      return 'south'
    }
    if(player.direction === 'west' && playerX === 0) {
      return 'north'
    }

    if(player.ammo > 0) {
      if(shouldShoot(player, enemies)) {
        return 'shoot'
      }

    //if we're here in the code, then we didnt shoot and should moove or turn
    }

    let closestAmmoPosition
    map.ammoPosition.forEach(ammo => {
      if(!closestAmmoPosition) {
        closestAmmoPosition = ammo
      }
      const [ammoY, ammoX] = ammo
      const [closestAmmoPositionY, closestAmmoPositionX] = closestAmmoPosition
      if(Math.abs(playerX - ammoX) > Math.abs(playerX - closestAmmoPositionX) ) {
        closestAmmoPosition = ammo
      }
    })
    console.log(map.ammoPosition, closestAmmoPosition, player.position)


    
    return 'move'
       
  }
}

function shouldShoot(player, enemies) {
  for(let enemyIndex = 0; enemyIndex < enemies.length; enemyIndex++) {
    const enemy = enemies[enemyIndex]
    // check if the enemy is on the same row or column as the player
    const [enemyY, enemyX] = enemy.position
    const [playerY, playerX] = player.position
    
    if(enemyY === playerY || enemyX === playerX) {
      // We're on the same row or column as an enemy
      // are we facing the right dirction
      const directionToFace = getDirection(player.position, enemy.position)
      if(player.direction === directionToFace) {
        // we're facing a enemy
        return true;
      }
    } 
  }
  return false
}
 
function getDirection(start = [], end = []) {
  if(!start || start.length !== 2) {
    throw new Error('end parameter of getDirection must be an array containing exactly two values')
  }
  if( !end || end.length !== 2) {
    throw new Error('end parameter of getDirection must be an array containing exactly two values')
  }

  let diffVertical = Math.abs(start[0] - end[0]);
  let diffHorizontal = Math.abs(start[1] - end[1]);

  if (diffVertical > diffHorizontal) {
    return start[0] - end[0] > 0 ? 'north' : 'south';
  }
  return start[1] - end[1] > 0 ? 'west' : 'east';
}

 
    
  
  
  // if(something) {
    //   return 'north'
    // }
    // if(facing a enemy && hasAmmo) {
    //   return 'shoot'
    // }
    // if enemy is in my row or column and has ammo, move out of row/column+
  

