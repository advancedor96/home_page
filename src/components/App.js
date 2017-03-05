import React, { Component } from 'react';
import Menu from './Menu.js';
import Content from './Content.js';
import HotPosts from './HotPosts.js';
import {observer} from 'mobx-react';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div style={{marginLeft:'260px'}}>
          <Content/>
          <HotPosts />
        </div>
      </div>
    );
  }
}

export default observer(App);
