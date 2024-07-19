let turn = 0;
const ai = {
  
  info: {
    name: 'kate',
    style: 4
  },
ai: function(player, enemies, map) {  
    const [playerY, playerX] = player.position
      
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

    // are we on the same x or y as an enemy
    // do we have ammo
    // are we facing the right direction

    if(player.ammo > 0) {
      if(shouldShoot(player, enemies)) {
        return 'shoot'
      }
      // if we're here in the code, then we didn't shoot and should move or turn
    }

    // if(facing enemy && hasAmo) {
    //   return 'shoot'
    // }          

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


 
// enemies [{"name":"margeux","id":"U7VITU7U","style":5,"position":[9,4],"direction":"east","directionAngle":1,"ammo":1,"isAlive":true},{"name":"Siegfried","id":"0IU1573L","style":4,"position":[7,1],"direction":"north","directionAngle":0,"ammo":0,"isAlive":true},{"name":"ElPerron","id":"OM4TB63K","style":7,"position":[5,12],"direction":"east","directionAngle":1,"ammo":0,"isAlive":true},{"name":"Manuelmhtr","id":"4MZZJTDK","style":3,"position":[2,4],"direction":"east","directionAngle":1,"ammo":0,"isAlive":true},{"name":"Horror","id":"R6EZ453E","style":10,"position":[2,6],"direction":"east","directionAngle":1,"ammo":0,"isAlive":true},{"name":"Gurren","id":"MM9YO1MZ","style":{"type":"figma.svg","hue":-90},"position":[2,9],"direction":"east","directionAngle":1,"ammo":0,"isAlive":true},{"name":"Yuno","id":"Z0SD61BH","style":9,"position":[5,4],"direction":"east","directionAngle":1,"ammo":0,"isAlive":true},{"name":"Xmontoya89","id":"UUFUTUHU","style":1,"position":[4,1],"direction":"west","directionAngle":3,"ammo":0,"isAlive":true}] ai.js:9:13
// map {"gridSize":13,"ammoPosition":[]} ai.js:10:13
// player {"name":"asdf","id":"YPPTF2V1","style":9,"position":[9,3],"direction":"west","directionAngle":3,"ammo":0,"isAlive":true} ai.js:8:13
// enemies [{"name":"margeux","id":"U7VITU7U","style":5,"position":[9,4],"direction":"north","directionAngle":0,"ammo":1,"isAlive":true},{"name":"Siegfried","id":"0IU1573L","style":4,"position":[6,1],"direction":"north","directionAngle":0,"ammo":0,"isAlive":true},{"name":"ElPerron","id":"OM4TB63K","style":7,"position":[5,12],"direction":"south","directionAngle":2,"ammo":0,"isAlive":true},{"name":"Manuelmhtr","id":"4MZZJTDK","style":3,"position":[2,5],"direction":"east","directionAngle":1,"ammo":0,"isAlive":true},{"name":"Horror","id":"R6EZ453E","style":10,"position":[2,6],"direction":"north","directionAngle":0,"ammo":0,"isAlive":true},{"name":"Gurren","id":"MM9YO1MZ","style":{"type":"figma.svg","hue":-90},"position":[2,9],"direction":"east","directionAngle":1,"ammo":0,"isAlive":true},{"name":"Yuno","id":"Z0SD61BH","style":9,"position":[5,4],"direction":"north","directionAngle":0,"ammo":0,"isAlive":true},{"name":"Xmontoya89","id":"UUFUTUHU","style":1,"position":[4,0],"direction":"west","directionAngle":3,"ammo":0,"isAlive":true}] ai.js:9:13
// core: Emit 
// Object { name: "SHOOT", payload: {…} }
// core.js:49:12
// core: Emit 
// Object { name: "KILL", payload: {…} }
// core.js:49:12
// player {"name":"asdf","id":"YPPTF2V1","style":9,"position":[9,3],"direction":"west","directionAngle":3,"ammo":0,"isAlive":true} ai.js:8:13
// enemies [{"name":"margeux","id":"U7VITU7U","style":5,"position":[9,4],"direction":"north","directionAngle":0,"ammo":0,"isAlive":true},{"name":"Siegfried","id":"0IU1573L","style":4,"position":[5,1],"direction":"north","directionAngle":0,"ammo":0,"isAlive":true},{"name":"ElPerron","id":"OM4TB63K","style":7,"position":[6,12],"direction":"south","directionAngle":2,"ammo":0,"isAlive":true},{"name":"Manuelmhtr","id":"4MZZJTDK","style":3,"position":[2,5],"direction":"north","directionAngle":0,"ammo":0,"isAlive":true},{"name":"Horror","id":"R6EZ453E","style":10,"position":[1,6],"direction":"north","directionAngle":0,"ammo":0,"isAlive":true},{"name":"Gurren","id":"MM9YO1MZ","style":{"type":"figma.svg","hue":-90},"position":[2,9],"direction":"north","directionAngle":0,"ammo":0,"isAlive":true},{"name":"Xmontoya89","id":"UUFUTUHU","style":1,"position":[4,0],"direction":"north","directionAngle":4,"ammo":0,"isAlive":true}] ai.js:9:13
// map {"gridSize":13,"ammoPosition":[[1,2],[12,12],[0,9],[10,10]]}

// if (facing an enemy && hasAmo) {
//   return 'shoot'}



