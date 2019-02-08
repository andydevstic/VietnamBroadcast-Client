import React, { Component } from 'react';
import {Switch, Route} from 'react-router'

import {Home, NotFoundPage} from './pages'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
