var alt = require('../alt');
import ToDoActions from '../actions/TDNActions'

class TDNStore {
  constructor() {
    this.state = {current : "", data : [], submitOrLoad : "Search"};
    this.bindListeners({
      handleLiveUpdate: ToDoActions.UPDATE_LIVE,
      changeSubmit: ToDoActions.CHANGE_SUBMIT,
    });
  }

  handleLiveUpdate(value){
    this.setState({current : value})
  }

  changeSubmit(value){
    this.setState({current : value})
  }

}

module.exports = alt.createStore(TDNStore, 'TDNStore');
