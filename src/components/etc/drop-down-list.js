import React, {Component} from 'react'
import propTypes from 'prop-types'

export default class dropDownList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.handleToggleDropDown = this.handleToggleDropDown.bind(this)
  }

  handleToggleDropDown() {
    this.setState(currentState => ({isOpen: !currentState.isOpen}))
  }

  render() {
    const dropDownPositionClassMap = {
      bottom: {top: 'calc(100%)'},
      left: {top: '0px', left: 'calc(-100%)'},
      right: {top: '0px', left: 'calc(100%)'}
    }
    const {listClass, label, subItem, position, subItemClass} = this.props
    const {isOpen} = this.state
    
    return (
      <li 
        className={`${listClass} --relative`}
        onClick={this.handleToggleDropDown}
      >
        <div className='flex flex_col flex--justify-center flex--items-center --full-height --full-width'>
          {label}
        </div>
        <ul className={`${!isOpen ? 'hidden' : ''} --absolute --no-padding`} style={dropDownPositionClassMap[position]}>
          {
            subItem.map((item, index) => (
              <li key={index} className={`flex flex_col flex--justify-center flex--items-center --hover-gray ${subItemClass}`}>{item}</li>
            ))
          }
        </ul>
      </li>
    )
  }
}

dropDownList.propTypes = {
  listClass: propTypes.string,
  subItemClass: propTypes.string,
  label: propTypes.string.isRequired,
  subItem: propTypes.arrayOf(propTypes.element).isRequired
}

dropDownList.defaultProps = {
  listClass: '',
  subItemClass: '',
  label: 'label',
  position: 'bottom',
  subItem: [<p>item1</p>, <p>item2</p>]
}