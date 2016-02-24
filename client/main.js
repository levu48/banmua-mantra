import injectTapEventPlugin from 'react-tap-event-plugin';
injectTabEventPlugin();

import {createApp} from 'mantra-core';
import initContext from './configs/context';
import coreModule from './modules/core';

const context = initContext();
const app = createApp(context);

app.loadModule(coreModule);
app.init();






console.log('client main.js starts');
console.log(context.Collections);