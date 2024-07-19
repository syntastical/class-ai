const ai = {
  info: {
    name: 'Infinite11',
    style: 9
  },

  ai: function(player, enemies, map) {
    /* player {"name":"Infinite11","id","BZGOSM4T","style":9,"position":[7,11],"direction":"north","directionAngle":0,"ammo":0,""
     * enemies [
     * {"name":"margeux","id":"1RTETN6M","style":5"position}:[6,9],"direction":"north","directionAngle":0,"ammo":0,"isAlive"]
     * {"name":"ElPerron","id":"V4Z82U04","style":7,"position":[11,1],"direction":"north","directionAngle":0,"ammo":0,"isAlive"}
     * map {"gridSize":13,,"ammoposition":[[5,7],[1,1]]}
     */
    // enemies[0].isAlive
    // console.log('player', JSON.stringify(player))
    // console.log('enemies', JSON.stringify(enemies))
    // console.log('map', JSON.stringify(map))
    const closestAmmo = findClosest(player.position, map.ammoPosition)
    const directionToHead = getDirection(player.position, closestAmmo)
    if(player.direction !== directionToHead) {
      return directionToHead
    }
    return 'move'

  },
};

function getDirection(start = [], end = []) {
  start = start || [];
  end = end || [];

  var diffVertical = Math.abs(start[0] - end[0]);
  var diffHorizontal = Math.abs(start[1] - end[1]);

  if (diffVertical > diffHorizontal) {
    return start[0] - end[0] > 0 ? 'north' : 'south';
  }
  return start[1] - end[1] > 0 ? 'west' : 'east';
};

function findClosest(playerPosition, otherPositions) {
  const [playerY, playerX] = playerPosition
  let closest;
  for(let posIndex = 0; posIndex < otherPositions.length; posIndex++) {
    // If we don't already have closest, then take any value
    if(!closest) {
      closest = otherPositions[posIndex]
      continue
    }
    // If we have closest, check if the current position is closer
    const [otherY, otherX] = otherPositions[posIndex]
    const [closestY, closestX] = closest
    // Find the sum of absolute x/y distance for the current closest
    const currentClosestDistance = Math.abs(playerY - closestY) + Math.abs(playerX - closestX)
    const otherDistance = Math.abs(playerY - otherY) + Math.abs(playerX - otherX)
    if(currentClosestDistance > otherDistance) {
      // we found that the current index of our loop has a closer distance so 
      // reassign closest to the current index
      closest = otherPositions[posIndex]
    }
    return closest;
  } 
}
