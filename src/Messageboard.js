import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      margin: '150px',
      padding: theme.spacing(3, 2),
    
    },
  }));

export default function Messageboard() { 

    const classes = useStyles()
    return( 
        <div> 
            <div className={classes.root}>
      <Paper variant="outlined" />
      <h3>
          Tik-Talk
      </h3>

      <h5> 
          Topic goes here
      </h5>
      <Paper variant="outlined" square />
    </div>
        </div>
    )
}