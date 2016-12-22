import React, {Component} from 'react';
import axios from 'axios'

const App = () => {
    return (
      <div className="App">
        <Post />
      </div>
    );
}

class Post extends Component{
    constructor(props){
        super(props)
        this.clicky = this.clicky.bind(this);
    }
    
    clicky(e){
        e.preventDefault()
        axios.get('test/')
          .then((response) => {
            console.log(response);
            console.log(response.data);
            for (let a in response.data){
                console.log(response.data[a])
            }
          }
        )
          .catch(function (error) {
            console.log(error);
          });
    }
    
    
    render(){
        return(
        <div className="flexCont">
            <button className="button" onClick={this.clicky}>press me</button>
        </div>
        )
    }
}

export default App;
