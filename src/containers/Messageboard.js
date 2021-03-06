import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { getMessages, getTopics, createMessage } from '../actions/index';
//import Messages from './reducers/messageReducer';


 class Messageboard extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
      const content = this.state.value
       alert('A message was submitted: ' + content);
        event.preventDefault();
        this.props.createMessage(content)
      }
      //preventing form from resetting when hitting submit

   componentDidMount(){ 
    this.props.getMessages()
    this.props.getTopics()
    //this.props.sendMessages()
   }
   
    render() {
        const topics = this.props.topics
        //const topicTitles = topics.map(topic => {topic.title})
        //const messages = this.props.messages
        //const [activeTopic, changeActiveTopic] = 
        
    return( 
        
        <div className='main_container'> 
            
            <Paper variant="outlined" />
            <h1>
                Tik-Talk
            </h1>
            <h5> 
               topic goes here {/* {topics.map(topic => 
                    <h5>{topic.title}</h5>
                )} */}
            </h5>

            <table className="channel_table">
                <thead>
                    <tr>
                        <th className='channel_container_header'>
                            Channels
                        </th>
                        <th>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='channel_container'>
                            <List> 
                                { 
                                 topics
                                .map(topic => (
                                        <ListItem key={topic.id} button>
                                            <ListItemText primary={topic.title} className="channel_item_entry"/>                                       
                                        </ListItem>

                                    ))
                                }
                            </List>
                    
                        </td>
                                
                        <td>
                        {this.props.messages.map((message) => (
                            <div className='flex' key={message.id}>  
                                    <Chip label="User" className='chip' />
                                    <div>{message.content}</div>
                            </div> 

                            ))}

                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <div className='flex'>
                                <TextField onSubmit={this.handleSubmit}
                                    id="standard-full-width"
                                    style={{ margin: 8 }}
                                    placeholder="Type message here"
                                    value={this.state.value} onChange={this.handleChange}
                                    helperText=" "
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    />
                                    <div className='flex'> 
                                    <form onSubmit={this.handleSubmit}> 
                                    <input name='content' 
                                           type='text'
                                           value={this.state.value} 
                                           onChange={this.handleChange}
                                           />
                                    <input 
                                        type='submit'
                                        value='Send it!'
                                        />
                                    
                                    </form>
                                    
                                    
                                    
                                    </div>
                                          <h1>{this.state.value}</h1>

                                <Button variant="contained" color="primary" type='submit'>
                                    Send 
                                </Button> 
                        
                                <Paper variant="outlined" square />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
 }



 const mapStateToProps = (state) => { 
          return({ 
            messages: state.messages, 
            topics: state.topics,
            message: state.message
          })
       }
     
    
    export default connect(mapStateToProps, {getMessages, getTopics, createMessage})(Messageboard)
//export default connect(mapStateToProps, {getMessages})(App)
 // 'test 1',
                                        // 'test 2',
                                        // 'test 3',
                                        // 'test 4',
                                        // 'test 5',
                                        // 'test 6',
                                        // 'test 7',
                                        // 'test 8',
                                        // 'Super long channel name goes here for testing',
                                        // 'test 10',
                                        // 'test 11' 