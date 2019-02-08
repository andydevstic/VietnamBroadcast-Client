import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import {createBrowserHistory} from 'history'
import {appReducer} from './reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(appReducer)
const browserHistory = createBrowserHistory()

const Main = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(Main, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
