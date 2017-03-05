import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {observer} from 'mobx-react';
import AppStore from '../stores/AppStore.js';

class Menu extends React.Component {
    handlePosts = ()=>{
        AppStore.changeContent('HotPosts');
    }
    handleHome = ()=>{
        AppStore.changeContent('home');
    }

    render(){
        return (
            <div>
                <Drawer open={true} width={250}>
                    <MenuItem onTouchTap={this.handleHome}>首頁</MenuItem>
                    <MenuItem onTouchTap={this.handlePosts}>熱門文章</MenuItem>
                    <MenuItem>文章</MenuItem>
                </Drawer>
            </div>           
        );
    }

}


export default observer(Menu);
