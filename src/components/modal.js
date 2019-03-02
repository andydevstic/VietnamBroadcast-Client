import React, {Component} from 'react'
import {connect} from 'react-redux'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(event) {
    const {handleModalClose} = this.props
    const clickedElement = event.target
    let parentElement = null
    let isClickInModal = false
    while(parentElement !== document.getElementById('root') && parentElement !== document.getElementById('modal')) {
      parentElement = parentElement ? parentElement.parentElement : clickedElement.parentElement
      isClickInModal = parentElement === document.getElementById('modal')
    }
    if(!isClickInModal) handleModalClose()
  }

  componentDidMount() {
    document.getElementById('root').style.backgroundColor = 'gray'
    document.getElementById('root').addEventListener('click', this.handleOnClick)
  }

  componentWillUnmount() {
    document.getElementById('root').style.backgroundColor = 'white'
    document.getElementById('root').removeEventListener('click', this.handleOnClick)
  }

  render() {
    const {titleObject, footerObject} = this.props
    const ModalBody = this.props.children
    return (
      <div id='modal-background'>
        <div id='modal'>
        <div className='modal-wrapper'>
          <div className='modal-title flex' style={titleObject.style}>
            {titleObject.content}
          </div>
          <div className='modal-body flex'>
            {ModalBody}
          </div>
          <div className='modal-footer flex' style={footerObject.style}>
            {footerObject.content}
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default connect()(Modal)

Modal.defaultProps = {
  titleObject: {
    content: 'Modal title',
    style: {
      flexDirection: 'row'
    }
  },
  footerObject: {
    content: 'Modal footer',
    style: {
      flexDirection: 'row'
    }
  }
}