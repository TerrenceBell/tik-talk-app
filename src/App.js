import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Messageboard from './Messageboard'

 class App extends Component {
   componentDidMount(){ 
     //async actiopn creator
     fetch('http://localhost:3001/messages')
       .then(resp => resp.json())
        .then(console.log)
   }
   render() {
    return (
      <div className="App">
       <Messageboard />
      </div>
    );
  }
}
   
 

export default App;
