import React from 'react';
import Hello from './Hello.jsx';

const Layout = ({content = () => null}) => (
    <div>
        <header>
            <h1>BanMua</h1>
        </header>
        <div>
            <Hello />
            {content()}
        </div>
        <footer>
            <small>E-commerce with iAgents</small>
        </footer>
    </div>
);

export default Layout;