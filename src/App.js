import React, { Component } from 'react';
import './App.css';
import Messageboard from './Messageboard'
import store from './store';
import { getMessages } from './actions/index';
import { getTopics} from './actions/index';
import { connect } from 'react-redux';



 class App extends Component {
   componentDidMount(){ 
    this.props.getMessages()
   }
   render() {
    return (
    
      <div className="App">
       <Messageboard />
      </div>
    );
  }
}
   const mapStateToProps = (state) => { 
      return({ 
        messages: state.messages 
      })
   }
 

export default connect(mapStateToProps, {getMessages})(App)

//in msg brd map over messages
