import React, { Component } from 'react';
import {observer} from 'mobx-react';
import AppStore from '../stores/AppStore.js';

class Content extends React.Component {
    render(){
        return (
            <div style={getDisplay()}>
照片<br />
簡介
            </div>           
        );
    }

}


function getDisplay(){
  if(AppStore.showContent === 'home'){
    return {display: 'inline-block'};
  }else{
      return {display: 'none'};
  }
}

export default observer(Content);