// const ai = require('./players/ai.js').default
import ai from './players/ai.js'
export default {
  ai,
  manuelmhtr: require('./players/manuelmhtr.js').default,
  ericku: require('./players/ericku.js'),
  siegfried: require('./players/siegfried.js'),
  horror: require('./players/horror.js'),
  elperron: require('./players/elperron.js').default,
  yuno: require('./players/yuno.js'),
  xmontoya: require('./players/xmontoya.js'),
  margeux: require('./players/margeux.js')
};
