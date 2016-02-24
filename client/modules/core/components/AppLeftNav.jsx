import React from 'react';
import MUI from 'material-ui';
import Tran from './Tran.jsx';

const {List, ListItem, LeftNav, Divider, SelectableContainerEnhance} = MUI;

const AppLeftNav = React.createClass({
    getInitialState() {
        return {
            open: false
        }
    },
    
    toggle() {
        this.refs.leftNav.toggle();
    },
    
    render() {
        const listItems = AppObj.categories.map((cat) => {
            if (cat.categories && cat.categories.length > 0) {
                return (
                        <ListItem
                            key={cat._id}
                            //primaryText=<Tran>{cat.name}</Tran>
                            primaryText={cat.name}
                            value={cat.link}
                            primaryTogglesNestedList={true} 
                            nestedItems = { cat.categories ? 
                                cat.categories.map((cat2) => {
                                    return <ListItem 
                                                key={cat2._id}
                                                //primaryText=<Tran>{cat2.name}</Tran> 
                                                primaryText={cat2.name}
                                                value={cat2.link} 
                                                onTouchTap={function() { FlowRouter.go('/cat/' + cat2._id);}}
                                                />;
                                }) : [] }
                            />
                    );                
            } else {
                return (
                    <ListItem
                        //primaryText=<Tran>{cat.name}</Tran>
                        primaryText={cat.name}
                        value={cat.link}
                        onTouchTap={function() { FlowRouter.go('/cat/' + cat._id);}}
                    />
                );                
            }
        });
        
        return (<div></div>)
    }
});

export default AppLeftNav;