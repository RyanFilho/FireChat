import React from 'react';
import mui from 'material-ui';

var {Paper, TextField} = mui;

class MessageInput extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const styles = {
            paper:{
                width:'100%',
                height:'12%',
                padding:'20px 20px 0px',
                position: 'fixed',
                bottom:'0'
            },
            textField:{
                fontSize:'200%',
                resize: 'none'
            }                
        };

        return (
            <Paper style={styles.paper}>
                <TextField style={styles.textField}
                hintText="Talk anything!"
                fullWidth={true}
                />
            </Paper>
        );
    }
}

export default MessageInput;
                
                
        