import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase'
import _ from 'lodash'

var {Card, List} = mui;

class MessageList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messages:[]
        };

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAUIuFex4CKXr062JOG9Ub7l6wzMMQHtDQ",
            authDomain: "firechat-9ba30.firebaseapp.com",
            databaseURL: "https://firechat-9ba30.firebaseio.com",
            storageBucket: "firechat-9ba30.appspot.com",
            messagingSenderId: "674287501430"
        };
        Firebase.initializeApp(config);
    }
    componentWillMount() {
        Firebase.database().ref('/messages').once('value').then(function(snapshot) {
            this.setState({
                messages: snapshot.val().messages
            });        
        });
    }

    render(){
        var messageNodes = this.state.messages.map((message) =>{
            return (
                <Message message={message.text} />
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