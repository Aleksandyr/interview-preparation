import React, { Component } from 'react'
import Comments from './Comments'
// import QuestionAction from '../../actions/QuestionActions'
// import QuestionStore from '../../stores/QuestionStore'

class CommentsPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      comments: props.comments
    }
  }

  render () {
    return (
      <div className={this.props.disabled ? 'container disabled' : 'container'} >
        <div className='row'>
          <div className='col-md-8'>
            <div className='page-header'>
              <h1><small className='pull-right'>{this.props.comments[0] ? this.props.comments.length : 0}</small> Comments </h1>
            </div>
            <Comments comments={this.state.comments} />
          </div>
        </div>
        <div className='input-group input-group-sm chatMessageControls'>
          <span className='input-group-addon' id='sizing-addon3'>Comment</span>
          <input type='text' className='form-control' placeholder='Type your message here..' aria-describedby='sizing-addon3' />
          <span className='input-group-btn'>
            <button id='clearMessageButton' className='btn btn-default' type='button'>Clear</button>
            <button id='sendMessageButton' className='btn btn-primary' type='button'><i className='fa fa-send' />Send</button>
          </span>
          <span className='input-group-btn'>
            <button id='undoSendButton' className='btn btn-default' type='button' disabled><i className='fa fa-undo' />Undo</button>
          </span>
        </div>
      </div>
    )
  }
}

export default CommentsPage
