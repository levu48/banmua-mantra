import React from 'react';
import {mount} from 'react-mounter';

import Main from './components/Main.jsx';
import MainLayout from './components/MainLayout.jsx';
import Hello from './components/Hello.jsx';


export default function(injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout);
    const MainCtx = injectDeps(Main);
    
    FlowRouter.route('/', {
        name: 'home',
        action() {
            //mount(MainLayoutCtx, {});
            mount(MainCtx, { content: () => null});
        }
    });
}