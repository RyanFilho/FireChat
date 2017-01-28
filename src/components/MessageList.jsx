import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';

var {Card, List} = mui;

class MessageList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages:[
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'Hello, how are you?',
                'I am fine, and you?'
            ]
        };
    }
    render(){
        var messageNodes = this.state.messages.map((message) =>{
            return (
                <Message message={message} />
            );
        });

        return (
            <Card>
                <List style={{marginTop: '64px'}}>
                    <div>
                        {messageNodes}
                    </div>
                </List>
            </Card>
        );
    }
}

export default MessageList;