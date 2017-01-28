import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ListItem
                leftAvatar={<Avatar src="https://lh3.googleusercontent.com/-F_lTIYUeTFY/AAAAAAAAAAI/AAAAAAAAOW4/4hN4240CCGE/s60-p-rw-no/photo.jpg"/>}
            >{this.props.message}</ListItem>
        );
    }
}

export default Message;