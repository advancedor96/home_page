import React, { Component } from 'react';
import Menu from './Menu.js';
import RightSide from './RightSide.js';
import {observer} from 'mobx-react';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div style={{marginLeft:'260px'}}>
          <RightSide />
        </div>
      </div>
    );
  }
}

export default observer(App);
