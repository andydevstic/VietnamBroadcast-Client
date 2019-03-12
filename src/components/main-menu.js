import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import DropDown from './etc/drop-down-list'
import Modal from './modal'

class MainMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }

  handleOpenModal() {
    this.setState(() => ({isModalOpen: true}))
  }

  handleModalClose() {
    this.setState(() => ({isModalOpen: false}))
  }
  render() {
    const {user} = this.props
    const {isModalOpen} = this.state
    return (
      <ul className='flex flex-row list list--no-bullet --full-height'>
        <Link to={'/review/add'} ><li className='flex flex_row flex--justify-center flex--items-center --full-height'>Add Review</li></Link>
        <li className='flex flex_row flex--justify-center flex--items-center --full-height'>Dashboard</li>
        {
          user && user.username ? 
            (
              <DropDown label={`Hello, ${user.username}`} listClass='flex flex_col --full-height'/>
            ) :
            (
              <li onClick={this.handleOpenModal} className='flex flex_row flex--justify-center flex--items-center --full-height'>Log in/Register</li>
            )
        }
        {
          isModalOpen ? <Modal handleModalClose={this.handleModalClose}><h1>this is modal body</h1></Modal> : null
        }
      </ul>
    )
  }
}

export default connect(
  globalState => ({
    user: globalState.user
  })
)(MainMenu)
