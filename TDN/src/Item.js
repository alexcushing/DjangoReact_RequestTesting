import React, { Component } from 'react';
import TDNStore from './stores/TDNStore';
import TDNActions from './actions/TDNActions';


class Item extends Component {
  constructor(props){
      super(props);
      this.state = TDNStore.getState();
      this.onChange = this.onChange.bind(this);
    }


    componentDidMount() {
    TDNStore.listen(this.onChange);
  }

  componentWillUnmount() {
    TDNStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }


  render() {
    return (
        <div className="flex">
          {this.props.item}
        </div>
    );
  }
}


export default Item;
