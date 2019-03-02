import React, {Component} from 'react'
import {connect} from 'react-redux'
import DropDownList from './etc/drop-down-list';

class SideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const {user} = this.props
    return (
      <ul className='list list--no-bullet flex flex_col --full-width'>
        <li className='flex flex_row flex--justify-center flex--items-center --height-70'>Add Review</li>
        <li className='flex flex_row flex--justify-center flex--items-center --height-70'>Dashboard</li>
        <DropDownList 
          label={user.username ? `Hello, ${user.username}` : 'Log in/Register'}
          position='right' 
          listClass='flex flex_row flex--justify-center flex--items-center --height-70'
          subItemClass='--height-70'
        />
      </ul>
    )
  }
}

export default connect(globState => ({
  user: globState.user
}))(SideMenu)