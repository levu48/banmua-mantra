import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import createAppObj from './configs/AppObj';
AppObj = createAppObj();

import {createApp} from 'mantra-core';
import initContext from './configs/context';
import coreModule from './modules/core';
import loginModule from './modules/login';



const context = initContext();
const app = createApp(context);

app.loadModule(loginModule);
app.loadModule(coreModule);

app.init();



console.log('client main.js starts');
console.log(context.Collections);