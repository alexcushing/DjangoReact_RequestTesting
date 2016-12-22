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
          .then(function (response) {
            console.log(response);
            console.log(response.data);
          }
        )
          .catch(function (error) {
            console.log(error);
          });
    }
    
    
    render(){
        return(
        <div>
            <button onClick={this.clicky}>press me</button>
        </div>
        )
    }
}

export default App;
