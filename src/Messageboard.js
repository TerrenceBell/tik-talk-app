import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { getMessages, setMessages } from './actions/index';
import Messages from './reducers/messageReducer';
import { GlobalStyle } from './GlobalStyle';









  

 class Messageboard extends Component { 
    // const messages = this.props.action.messages
      //console.log('in the function',this.props.messages)
     
     
    
    // //componentDidMount(){ 
    //     this.props.fetchMessages()
    // }

    
        
        
    

     
    render() {
        
    return( 
        <div className='main_container'> 
            
            <Paper variant="outlined" />
            <h1>
                Tik-Talk
            </h1>

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
                                
                                    [
                                        'test 1',
                                        'test 2',
                                        'test 3',
                                        'test 4',
                                        'test 5',
                                        'test 6',
                                        'test 7',
                                        'test 8',
                                        'Super long channel name goes here for testing',
                                        'test 10',
                                        'test 11'
                                ].map(topic => (
                                        <ListItem key={topic} button>
                                            <ListItemText primary={topic} className="channel_item_entry"/>
                                        </ListItem>

                                    ))
                                }
                            </List>
                    
                        </td>
                
                        <td>
                        {[{from: 'user' , msg: 'hello'}].map((chat, i) => (
                            <div className='flex' key={i}>  
                                    <Chip label={chat.from} className='chip' />
                                    <div>{chat.msg}</div>
                            </div> 

                            ))}

                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <div className='flex'>
                                <TextField
                                    id="standard-full-width"
                                    style={{ margin: 8 }}
                                    placeholder="Type message here"
                                    //value={textValue}
                                    helperText=" "
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    />
                                
                                <Button variant="contained" color="primary">
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
      messages: state.messages 
    })
 }

export default connect(mapStateToProps,{getMessages})(Messageboard)
//export default connect(mapStateToProps, {getMessages})(App)
