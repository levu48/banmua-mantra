import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {createApp} from 'mantra-core';
import initContext from './configs/context';
import coreModule from './modules/core';
import createAppObj from './configs/AppObj';

const context = initContext();
const app = createApp(context);

AppObj = createAppObj();

app.loadModule(coreModule);
app.init();






console.log('client main.js starts');
console.log(context.Collections);