import React from 'react'
import Comments from './Comments'

const CommentsPage = (props) => (
  <div className={props.disabled ? 'container disabled' : 'container'} >
    <div className='row'>
      <div className='col-md-8'>
        <div className='page-header'>
          <h1><small className='pull-right'>{props.comments.length}</small> Comments </h1>
        </div>
        <Comments comments={props.comments} />
      </div>
    </div>
  </div>
)

export default CommentsPage
