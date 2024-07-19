const utils = require("../lib/utils.js");

const javierbyte = {
  info: {
    name: "javierbyte",
    style: 2,
  },
  ai: (playerState, enemiesState, gameEnvironment) => {
    const directionToAmmo;

    if (Math.random() > 0.9) return "shoot";

    if (gameEnvironment.ammoPosition.length) {
      directionToAmmo = utils.getDirection(playerState.position, gameEnvironment.ammoPosition[0]);

      if (directionToAmmo !== playerState.direction) {
        return directionToAmmo;
      }
      return "move";
    }

    return utils.randomMove();
  },
};

module.exports = javierbyte;
