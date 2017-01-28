import React from 'react'; 
import MessageList from './MessageList.jsx'; 
import mui from 'material-ui';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;

class App extends React.Component {
    constructor(){
        super();

        ThemeManager.setPalette({
            primary1Color: Colors.blue500,
            primary2Color: Colors.blue700,
            primary3Color: Colors.blue100,
            accent1Color: Colors.pink400
        });
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext(){
        return{
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render(){
        return (
            <div>
                <AppBar title="FireChat" />
                <MessageList />
            </div>
        );
    }
}

export default App;