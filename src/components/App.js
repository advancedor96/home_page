import React, { Component } from 'react';
import Menu from './Menu.js';
import RightSide from './RightSide.js';
import {observer} from 'mobx-react';

class App extends Component {
    componentDidMount(){
        var disqus_config = function () {
            this.page.url = "https://advancedor96.github.io/home_page/#/";  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = '1'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };

        var d = document, s = d.createElement('script');
        s.src = '//home-page-1.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    }

  render() {
    return (
      <div>
        <Menu />
        <div style={{marginLeft:'260px'}}>
          <RightSide />
          <div id="disqus_thread"></div>
        </div>
      </div>
    );
  }
}

export default observer(App);
