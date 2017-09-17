import React from 'react'

const CommentItem = (props) => (
  <span>
    <h4 className='media-heading user_name'>{props.comment.user.email}</h4>
    {props.comment.content}
  </span>
)

export default CommentItem
