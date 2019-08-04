import React from 'react';

import Auxi from '../Auxi/Auxi';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';


class layout extends React.Component{

    render(){
        return (
            <Auxi>
            <Toolbar />
            <main className = {classes.Content}>{this.props.children}</main>
            </Auxi>
        )
    }
  
}

export default layout;