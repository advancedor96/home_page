import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import NoMatch from './components/NoMatch.js'
import './components/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router'
injectTapEventPlugin();


ReactDOM.render(
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Router>
  
  </MuiThemeProvider>,
  document.getElementById('root')
);
