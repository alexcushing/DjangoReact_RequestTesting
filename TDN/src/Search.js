import React, {Component} from 'react';
import Results from "./Results"
import Item from "./Item"
import axios from 'axios'
import TDNStore from './stores/TDNStore';
import TDNActions from './actions/TDNActions';
import Loading from 'react-loading-animation';

class Search extends Component{
    constructor(props){
        super(props)
        this.state = TDNStore.getState();
        this.onChange = this.onChange.bind(this);
        this.clicky = this.clicky.bind(this);
        this.liveAdd = this.liveAdd.bind(this);
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

    liveAdd(e) {
      TDNActions.updateLive(e.target.value)
      //this.setState({current : e.target.value})
  }

    clicky(e){
        e.preventDefault()
        document.body.style.cursor = "wait";
        this.setState({submitOrLoad : "Loading..."})
        axios.get('test/', {
            params: {
              VAL: this.state.current
            }
          })
          .then((response) => {
            console.log(response);
            console.log(response.data);
            let dict = []
            for (let a in response.data){
              dict[a] = response.data[a]
            }
            this.setState({submitOrLoad : "Search"})
            this.setState({data : dict})
            console.log("made dictionary");
            document.body.style.cursor = "pointer";
          }
        )
          .catch(function (error) {
            console.log(error);
          });

    }

    render(){
        return(
          <div>
            <div className="loader">
              {
                this.state.submitOrLoad === "Search" ? <div/> : <Loading />
              }
            </div>
        <div className="flexCont">
          <form onSubmit={this.clicky} className="submitForm">
              <input type="text" placeholder="search for something" onChange={this.liveAdd} value={this.state.current} className="inputBox" />
              <button type="submit" className="button">
                {this.state.submitOrLoad}
              </button>
          </form>
          <br />
        </div>
        
        </div>

        )
    }
}

export default Search;
