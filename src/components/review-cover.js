import React, {Component} from 'react'

import TrimWords from './etc/trim-words'

export default class ReviewCover extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hasPadding: true
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter() {
    this.setState(currentState => ({hasPadding: false}))
  }

  handleMouseLeave() {
    this.setState(currentState => ({hasPadding: true}))
  }
  
  render() {
    const mainStyle = {
      transition: 'padding 0.5s'
    }
    const {hasPadding} = this.state
    const {thumbnailUrl, title, author, reviewer, upvote, createdAt, size, rowStyle} = this.props
    return (
      <div 
        className={`flex flex_col ${hasPadding ? '--padding-5' : ''}`}
        style={{...mainStyle, ...size}}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={thumbnailUrl} alt='Book cover' style={{height: '60%'}}/>
        <div style={{height: '40%'}} className={'flex flex_col flex--justify-end'}>
          <TrimWords size={20} tag='i' style={rowStyle} >{`${title} by ${author}`}</TrimWords>
          <TrimWords size={20} tag='p' style={rowStyle} >{`Reviewer: ${reviewer}`}</TrimWords>
          <TrimWords size={20} tag='p' style={rowStyle} >{`${upvote}`}</TrimWords>
          <TrimWords size={20} tag='p' style={rowStyle} >{`${createdAt}`}</TrimWords>
        </div>
      </div>
    )
  }
}

ReviewCover.defaultProps = {
  thumbnailUrl: `url()`,
  size: {
    height: '300px',
    width: '200px'
  },
  title: 'Harry Potter and the Death Hallows',
  author: 'J.K Rowling',
  reviewer: 'Andy Devstic',
  upvote: 1000,
  createdAt: '2019/12/31',
  rowStyle: {margin: '5px 0px'}
}