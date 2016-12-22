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
        super()
    }
    
    clicky(e){
        e.preventDefault()
        axios.post('test', {
            test: 'test'
          })
          .then(function (response) {
            console.log(response);
          })
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
