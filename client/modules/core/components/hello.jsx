import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const Hello = React.createClass({
    render() {
        return (
            <div>
                <h2>Hello, World!</h2>
                <RaisedButton primary={true} label="Default" />   
            </div>  
        )  
    }
});

export default Hello;