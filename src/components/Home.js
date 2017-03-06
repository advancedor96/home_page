import React, { Component } from 'react';
import {observer} from 'mobx-react';
import AppStore from '../stores/AppStore.js';

class Home extends Component {
    componentDidMount(){

    }

    render(){
        return (
            <div>
照片<br />
簡介
            </div>           
        );
    }

}



export default observer(Home);