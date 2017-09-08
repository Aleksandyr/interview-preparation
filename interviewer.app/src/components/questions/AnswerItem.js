import React, {Component} from 'react'

class AnswerItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      answerText: props.answerText,
      disabled: props.disabled
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({disabled: nextProps.disabled})
  }

  render () {
    return (
      <div className={this.state.disabled ? 'asnwer-content disabled' : 'asnwer-content'}>
        <span className='answer-icon font-gotham-medium'>A</span>
        <div className='answer-text text-left'>{this.state.answerText}</div>
      </div>
    )
  }
}

export default AnswerItem
