import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles((theme) => ({
    root: {
      margin: '50px',
      padding: theme.spacing(3, 2),
    },
    flex: { 
        display: 'flex',
        alignItems: 'center'
    }, 
    topicWindow: { 
        width: '20%',
        height: '300px',
        borderRight: '1px solid grey',

    },

    chatWindow: { 
        width: '70%',
        height: '300px',
        padding: '10px'
    },

    chatBox: { 
        width: '85%'
        
    }, 

    button: { 
        width: '15%'

    }

  }));

export default function Messageboard() { 

    const classes = useStyles()
    return( 
        <div> 
            <div className={classes.root}>
      <Paper variant="outlined" />
      <h1>
          Tik-Talk
      </h1>

      <h3> 
          Topic goes here
      </h3>
      <div className={classes.flex}>
          <div className={classes.topicWindow}> 
          <List> 
            { 
                ['test'].map(topic => (
                    <ListItem key={topic} button>
                        <ListItemText primary={topic} />
                    </ListItem>

                ))
            }

          
            
          </List>
          
          </div>
          <div className={classes.chatWindow}> 
            {
                [{from: 'user' , msg: 'hello'}].map((chat, i) => (
                   <div className={classes.flex} key={i}>  
                        <Chip label={chat.from} className={classes.chip} />
                        <div>{chat.msg}</div>
                   </div> 

                ))
            }
                    
          
          </div>

      </div>

      <div className={classes.flex}> 
      <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
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
      </div>
      <Paper variant="outlined" square />
    </div>
        </div>
    )
}