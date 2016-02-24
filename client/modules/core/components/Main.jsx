import React from 'react';
import MUI from 'material-ui';
import AppLeftNav from './AppLeftNav.jsx';
import Tran from './Tran.jsx';

const { RaisedButton, FlatButton, Dialog,
    DropDownMenu, MenuItem, DatePicker, Divider,
    AppBar, AppCanvas, LeftNav, Styles, 
    NavigationExpandMoreIcon, NavigationClose, MoreVertIcon, 
    GridList, GridTile, StarBorder,
    Toolbar, ToolbarGroup, ToolbarTitle,  ToolbarSeparator,
    FontIcon, ActionInfo, ActionGrade,
    ContentInbox, ContentSend, ContentDrafts,
    RemoveRedEye, ArrowDropDown, ArrowDropRight,
    IconMenu, IconButton, Avatar,
    ActionAccessibility,
    Card, CardHeader, CardTitle, CardMedia, CardActions, CardText,
    List, ListItem, Menu
} = MUI;

import {SvgIcon} from 'material-ui/lib';
//const {SvgIcons} = MUI.Libs;

const ThemeManager = Styles.ThemeManager;

const Main = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    
    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(Styles.LightRawTheme)
        };
    },
    
    mixins: [ReactMeteorData], //, refreshOnChangeLocaleMixin],
    
    getMeteorData() {
        return {
            user: Meteor.user(),
            lang: Session.get('lang'),
            isEnglish: Session.get('lang') === 'en' ? true : false,
            isVietnamese: Session.get('lang') === 'vi' ? true: false,
            isSpanish: Session.get('lang') === 'es' ? true: false,
            isKorean: Session.get('lang') === 'ko' ? true : false,
            isChinese: Session.get('lang') === 'zh' ? true : false,
            isJapanese: Session.get('lang') === 'ja' ? true: false
        };
    },
    
    getInitialState() {
        return {
            leftNavOpen: false,
            rightValue: 4,
            dialogOpen: false
        }
    },
    
    
    
    toggleLeftNav2() {
        console.log(this.state.leftNavOpen);
        this.setState({
            leftNavOpen: !this.state.leftNavOpen
        });
        console.log(this.state.leftNavOpen);
    },
    
    toggleLeftNav() {
        this.refs.leftNav.toggle();
    },
    
    goToHome() {
        FlowRouter.go('/');
    },
    
    handleChangeRightMenu(event, index, value) {
        this.setState({
            rightValue: value
        });
    },
    
    signOut(event, target) {
		event.preventDefault();

		Meteor.logout(function (error) {
			if(error) {
				alert('unable to log out!');
			}
		});
    },
    
    currentTime() {
        Meteor.call('getTime', function(error, result) {
            alert("The current time is " + result);
        });
    },
    
    consoleLog(str) {
       return (function() {
           console.log(str);
       });
    },
    
    componentWillMount() {
        if (!Session.get('lang')) 
            this.setVietnamese();
    },    
    
    setLanguage(lang) {
        Session.set('lang', lang);
    },
    
    setEnglish() {
        this.setLanguage('en');
        _i18n.setLocale('en-us');
    },
    
    setVietnamese() {
        this.setLanguage('vi');
        _i18n.setLocale('vi-vn');
    },
    
    setSpanish() {
        this.setLanguage('es');
        _i18n.setLocale('es-mx');
    },

    setKorean() {
        this.setLanguage('ko');
        _i18n.setLocale('ko-kr');
    },
    
    setChinese() {
        this.setLanguage('zh');
        _i18n.setLocale('zh-cn');
    },
    
    setJapanese() {
        this.setLanguage('ja');
        _i18n.setLocale('ja-jp');
    },
    
    render() {

        var displayUsername = (function(currentUser) {            
            if (currentUser) {
                if (currentUser.username && currentUser.username !== "") {
                    return currentUser.username;
                } else {
                    return currentUser.emails[0].address;
                }
            } else {
                return "Log in";
            }
        })(this.data.user);
        
        const styles = {padding: '70px 0 0 0', textAlign: 'center'};
        
        return (
            <AppCanvas id="app-root" style={{ margin: 0, padding: 0}}>
                <AppLeftNav ref="leftNav" />
                <AppBar title={<span className="appTitle" onTouchTap={this.gotoHome}>
                        <a className="appTitle" href="/">BánMua<span style={{color:"#ccc"}}>.US</span></a>
                        <span style={{fontWeight: "lighter", fontStyle: "italic", fontSize: "14px"}}>&nbsp; &nbsp; &nbsp; <Tran>{'motto'}</Tran></span></span>}
                    showMenuIconButton={true} 
                    onLeftIconButtonTouchTap={this.toggleLeftNav} />
            </AppCanvas>
        );
    }
});

export default Main;

