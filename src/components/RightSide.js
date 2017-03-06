import React, { Component } from 'react';
import { observer } from 'mobx-react';
import AppStore from '../stores/AppStore.js';
import HotPosts from './HotPosts.js';
import Home from './Home.js';

class RightSide extends Component {
	render() {
		if(AppStore.showContent === 'home'){
			return <Home />;
		}else if(AppStore.showContent === 'HotPosts'){
			return <HotPosts />;
		}else{
			return <div>AppStore.showContent錯誤</div>;
		}
	}

}




export default observer(RightSide);