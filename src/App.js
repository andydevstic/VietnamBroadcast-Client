import React, { Component } from 'react'
import {Switch, Route} from 'react-router'
import {connect} from 'react-redux'

import './App.scss';
import MainPage from './pages/main-page'
import NotFoundPage from './pages/404'
import SideMenu from './components/side-menu'
import Header from './components/header'
import Footer from './components/footer'
import {screenIsMobile} from './shared/service'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render() {
    const {sideMenuIsOpen} = this.props
    return (
      <div className="app">
        {
          screenIsMobile() ? 
          (
            <div className={`side-menu-wrapper side-menu-wrapper--${sideMenuIsOpen ? 'on' : 'off'}`}>
              <SideMenu />
            </div>
          ) : 
          null
        }
        <Header isMobile={screenIsMobile()} />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect(
  globalState => ({
    sideMenuIsOpen: globalState.sideMenuIsOpen
  })
)(App);
