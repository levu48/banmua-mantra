import React from 'react';
import {mount} from 'react-mounter';

import App from './components/App.jsx';
import Main from './components/Main.jsx';
import MainLayout from './components/MainLayout.jsx';
import Hello from './components/Hello.jsx';


export default function(injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout);
    const MainCtx = injectDeps(Main);
    
    const AppCtx = injectDeps(App);
    
    FlowRouter.route('/', {
        name: 'home',
        action() {
            //mount(MainLayoutCtx, {});
            //mount(MainCtx, { content: () => null});
            mount(AppCtx, {content: () => null});
        }
    });
    
    FlowRouter.route("/login", {
        name: 'login',
        action(params) {
            mount(AppCtx, { content: () => <Accounts.ui.LoginFormSet redirect={() => FlowRouter.go('/')} /> });
        }
    });
}