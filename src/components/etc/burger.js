import React from 'react'
import {connect} from 'react-redux'

import {sideMenuActionCreator} from '../../actions'

function Burger (props) {
  const {sideMenuIsOpen, toggleBurger} = props
  const handleOnClick = () => toggleBurger(sideMenuIsOpen)
  return (
    <div id='burger-bar' onClick={handleOnClick} className={`burger-bar ${sideMenuIsOpen ? 'burger-bar--open' : ''} flex flex_col flex--items-center flex--justify-center`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default connect(
  globalState => ({
    sideMenuIsOpen: globalState.sideMenuIsOpen
  }),
  dispatch => ({
    toggleBurger: (isOpen) => dispatch(sideMenuActionCreator.toggleSideMenu(isOpen))
  })
)(Burger)
