import React, { Component } from 'react'
import CommentItem from './CommentItem'

class Comments extends Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }

  render () {
    let comments = 'There are no comments!'
    if (this.props.comments[0]) {
      comments = this.props.comments.map(element => (
        <CommentItem key={element.id} comment={element} />
      ))
    }

    return (
      <div className='comments-list'>
        <div className='media'>
          <div className='media-body'>
            { comments }
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
