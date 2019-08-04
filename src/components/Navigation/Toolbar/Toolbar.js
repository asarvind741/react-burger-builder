import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;