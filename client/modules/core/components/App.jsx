import React from 'react';
import MUI from 'material-ui';
import Hello from './Hello.jsx';
import AppHeader from './AppHeader.jsx';

const {AppCanvas} = MUI;

const App = ({content = () => null}) => {
    const styles = {padding: '70px 0 0 0', textAlign: 'center'};
    return (
        <AppCanvas id="app-root" style={{ margin: 0, padding: 0}}>
            <AppHeader />
            <div id="content" className="spacer" style={styles}>
                { content() }
            </div>
        </AppCanvas>
    )
};

export default App;