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
  }
  return closest;
}