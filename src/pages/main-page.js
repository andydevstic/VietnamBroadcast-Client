import React, {Component} from 'react'
import {Switch, Route} from 'react-router'

import HomePage from './home'
import AddReviewPage from './review/add-review'

export default class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className={'main-page'} style={{minHeight: 'calc(100vh - 120px)'}}>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/review/add' exact component={AddReviewPage} />
        </Switch>
      </div>
    )
  }
}