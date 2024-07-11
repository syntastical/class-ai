const utils = require('../lib/utils.js');
let currentDirection = 0;
let oldBestAmo = null;
const directions = {
  1: 'north',
  2: 'east',
  3: 'south',
  4: 'west'
}
let turnsComplete = 0;
export default {
  info: {
    name: 'ElPerron',
    style: 7
  },
  ai: (playerState, enemiesStates, gameEnvironment) => {
    var directionToTarget,
      getBestAmmo = () => {
        var myPosition = playerState.position,
          distanceMin = 22,
          ammoMin = null;
        for (var amIndex in gameEnvironment.ammoPosition) {
          var ammo = gameEnvironment.ammoPosition[amIndex];
          var difXbyMe = Math.abs(myPosition[1] - ammo[1]),
            difYbyMe = Math.abs(myPosition[0] - ammo[0]),
            distanceByMe = difXbyMe + difYbyMe;

          if (distanceByMe < distanceMin) {
            distanceMin = distanceByMe;
            ammoMin = ammo;
          }
        }

        return ammoMin;
      },
      getCountEnemiesAlive = () => {
        var countEnemies = 0;

        for (var enIndex in enemiesStates) {
          var enemy = enemiesStates[enIndex];

          if (enemy.isAlive) {
            countEnemies++;
          }
        }

        return countEnemies;
      },
      /**
       * Devuelve si la nave esta posicionada en el mismo lugar que el ammo
       * @param ammo
       * @returns {boolean}
       */
      isOnAmmo = (ammo) => {
        if (ammo == null) {
          return false;
        }
        return ammo[0] == playerState.position[0] &&
          ammo[1] == playerState.position[1];
      };

    // Hasta la vista baby !!!
    if (utils.canKill(playerState, enemiesStates) && playerState.ammo) {
      return 'shoot';
    }

    if (playerState.ammo == 0 || turnsComplete == 1) {
      let toPosition = getBestAmmo();

      directionToTarget = utils.getDirection(playerState.position, toPosition);

      if (isOnAmmo(oldBestAmo)) {
        turnsComplete = 0;
      }

      oldBestAmo = toPosition;

      // Si ya se movio, cambio mi direcci�n
      if (directionToTarget !== playerState.direction) {
        return directionToTarget;
      }

      return 'move';
    } else {
      currentDirection++;
      if (currentDirection > 4) {
        currentDirection = 1;
        turnsComplete++;
      }

      return directions[currentDirection];
    }

    return utils.randomMove();
  }
};


