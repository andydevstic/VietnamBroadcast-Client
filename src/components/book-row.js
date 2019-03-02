import React from 'react'

import ReviewCover from './review-cover'

export default (props) => {
  const {books, bookWidth, sidePadding} = props
  const bookSize = {
    width: `${bookWidth}px`,
  }
  return (
    <div className='flex flex_row' style={{padding: `0 ${sidePadding * 100}%`}}>
    {
      books.map((b, index) => (
        <div key={index}>
          <ReviewCover size={bookSize} />
        </div>
      ))
    }
    </div>
  )
}