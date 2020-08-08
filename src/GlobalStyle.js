import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


    function GlobalStyle (){
    
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
        
          }))}
          
    
export default GlobalStyle;