var alt = require('../alt');

class TDNActions {
  updateLive(value) {
      return value;
    }
    changeSubmit(value){
      return value;
    }
}

module.exports = alt.createActions(TDNActions);
