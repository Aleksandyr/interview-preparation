import React from 'react'

const CommentsPage = (props) => (
  <div className={props.disabled ? 'container disabled' : 'container'} >
    <div className='row'>
      <div className='col-md-8'>
        <div className='page-header'>
          <h1><small className='pull-right'>{props.comments.length}</small> Comments </h1>
        </div>
        <div className='comments-list'>
          <div className='media'>
            <p className='pull-right'><small>5 days ago</small></p>
            <div className='media-body'>

              <h4 className='media-heading user_name'>Baltej Singh</h4>
              Wow! this is really great.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CommentsPage
