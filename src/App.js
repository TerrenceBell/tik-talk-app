import React, { Component } from 'react';
import './App.css';
import Messageboard from './Messageboard'
import { Provider } from 'react-redux'; 
import store from './store'



 class App extends Component {
   componentDidMount(){ 
     //async actiopn creator
     fetch('http://localhost:3001/messages')
       .then(resp => resp.json())
        .then(console.log)
   }
   render() {
    return (
      <Provider store={store}>
      <div className="App">
       <Messageboard />
      </div>
      </Provider>
    );
  }
}
   
 

export default App;
