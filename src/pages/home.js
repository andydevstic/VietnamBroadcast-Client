import React, {Component} from 'react'
// import {connect} from 'react-redux'

import BookRows from '../components/book-row'

const booksPerRowOnScreenWidth = {
  mobile: {
    booksPerRow: 3,
    sidePadding: 2/100,
  },
  tablet: {
    booksPerRow: 4,
    sidePadding: 2/100,
  },
  desktop: {
    booksPerRow: 8,
    sidePadding: 15/100,
  }
}

export default class HomePage extends Component {

  renderBookRows() {
    
  }
  render() {
    const screenWidth = window.innerWidth
    let {bookList, screenType} = this.props
    bookList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let countAllBooks = bookList ? bookList.length : 20
    
    if(screenWidth < 600) screenType = 'mobile'
    if(screenWidth >= 600 && screenWidth < 960) screenType = 'tablet'
    if(screenWidth >= 960) screenType = 'desktop'

    const booksPerRow = booksPerRowOnScreenWidth[screenType].booksPerRow
    const screenSidePadding = booksPerRowOnScreenWidth[screenType].sidePadding

    const bookWidth = ((1 - screenSidePadding * 2) / booksPerRow) * screenWidth
    const countRows = Math.ceil(countAllBooks / booksPerRow)

    const rowsArray = []

    for(let i = 1; i <= countRows; i++) {
      rowsArray.push(bookList.splice(0, booksPerRow))
    }

    return (
      <div className='flex flex_col'>
        {
          rowsArray.map((rowBooks, index) => (
            <div key={index}>
              <BookRows books={rowBooks} bookWidth={bookWidth} sidePadding={screenSidePadding} />
            </div>
          ))
        }
      </div>
    )
  }
}