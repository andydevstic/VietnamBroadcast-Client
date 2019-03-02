import React from 'react'

export default (props) => {
  const {tag, children, title, size, style} = props
  const newTitle = title ? title : children
  const trimmedContent = `${children.substr(0, size)} ${children.length > size ? '...' : ''}`
  return React.createElement(tag, {title: newTitle, style}, trimmedContent)
}