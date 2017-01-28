import React from 'react';
import mui from 'material-ui';

var {Paper, TextField} = mui;

class MessageInput extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Paper style={{width:'100%', height:'84px', padding:'20px 20px 0px', position: 'fixed', bottom:'0'}}>
                <TextField style={{fontSize:'30px'}}
                hintText="Talk anything!"
                fullWidth={true}
                />
            </Paper>
        );
    }
}

export default MessageInput;
                
                
        