import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: '50px',
      padding: theme.spacing(3, 2),
    },
    flex: { 
        display: 'flex'
    }, 
    topicWindow: { 
        width: '20%',
        height: '300px',
        borderRight: '1px solid grey'

    },

    chatWindow: { 
        width: '70%',
        height: '300px'
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
          <ListItem button>
          
          <ListItemText primary="Drafts" />
        </ListItem>
            
          </List>
          
          </div>
          <div className={classes.chatWindow}> 
          
          </div>

      </div>

      <div className={classes.flex}> 
          
      </div>
      <Paper variant="outlined" square />
    </div>
        </div>
    )
}