import React, { Component } from 'react';
import './App.css';
import Messageboard from './containers/Messageboard'
//import store from './store';
import { getMessages } from './actions/index';
//import { getTopics} from './actions/index';
import { connect } from 'react-redux';

//import { TopicList } from './containers/TopicList'



//  class App extends Component {

//   // constructor() { 
//   //   super()
//   // }
//    componentDidMount(){ 
//     this.props.getMessages()
//     this.props.getTopics()
//    }
 
//    render() {
//      //const topics = this.props.topics.map((topic,i) =>  
//      <Messageboard />
//     return (
    
//       <div className="App">
       
       
//       </div>
//     );
//   }
// }
//    const mapStateToProps = (state) => { 
//       return({ 
//         messages: state.messages, 
//         topics: state.topics 
//       })
//    }
 

// export default connect(mapStateToProps, {getMessages, getTopics})(App)

// //in msg brd map over messages

 class App extends Component {
   
    
    //console.log(this.props.getMessages())
   
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
