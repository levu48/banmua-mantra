import {createApp} from 'mantra-core';
import initContext from './configs/context';

const context = initContext();
const add = createApp(context);
app.init();






console.log('client main.js starts');