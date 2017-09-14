import React from 'react'

const AnchorLink = (props) => (
  <a className={props.className}
    onClick={props.onClickMethod}
    href={props.href}
    title={props.title ? props.title : ''}>{props.content}</a>
)

export default AnchorLink
