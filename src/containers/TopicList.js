import React, { Component } from 'react';
import './App.css';
import Messageboard from './Messageboard'
import store from './store';
import { getMessages } from './actions/index';
import { getTopics} from './actions/index';
import { connect } from 'react-redux';



 class TopicList extends Component {
   componentDidMount(){ 
    this.props.getTopics()
   }
   render() {
    return (
    
      <div className="Topics">
       <p> 
           topics
       </p>
      </div>
    );
  }
}
   const mapStateToProps = (state) => { 
      return({ 
        messages: state.topics
      })
   }
 

export default connect(mapStateToProps, {getTopics})(TopicList)

//in msg brd map over messages
