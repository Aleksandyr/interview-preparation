import React, {Component} from 'react'
import AnswerItem from './AnswerItem'
import Auth from '../common/user/Auth'

class QuestionItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questionText: props.questionText,
      answerText: props.answerText,
      disabled: true
    }
  }

  showAnswer () {
    this.state.disabled === true
        ? this.setState({disabled: false})
        : this.setState({disabled: true})
  }

  voteForQuestion () {
    if (!Auth.isUserAuthenticated()) {
      this.props.history.push('/login')
    }
  }

  render () {
    return (
      <div className='question-container bg-cloud'>
        <span className='question-mark font-gotham-medium text-grass'>Q</span>
        <div className='question-inner-container bg-cloud'>
          <p className='mb-1 question-text text-left'>{this.state.questionText}</p>
        </div>

        <AnswerItem answerText={this.state.answerText} disabled={this.state.disabled} />

        <div className='control-group'>
          <div className='controls align-right'>
            <a className='answer-toggling text-grass push-top'
              onClick={this.showAnswer.bind(this)}>
              <span className={!this.state.disabled ? 'see-answer disabled' : 'see-answer'}>See The Answer</span>
              <span className={this.state.disabled ? 'hide-answer disabled' : 'hide-answer'}>Hide The Answer</span>
            </a>
            <a className='delete_add btn btn-inverse btn-medium push-top'
              onClick={this.voteForQuestion.bind(this)}>
              <span className='pull-right'>
                <i id='like1' className='glyphicon glyphicon-thumbs-up' /> <div id='like1-bs3' />
              </span>
            </a>
          </div>
        </div>

        {/* <div id='question-footer'>
          <ul>
            <li>
              <a className='answer-toggling text-left font-gotham-medium text-uppercase'
                onClick={this.showAnswer.bind(this)}>
                <span className={!this.state.disabled ? 'see-answer disabled' : 'see-answer'}>See The Answer</span>
                <span className={this.state.disabled ? 'hide-answer disabled' : 'hide-answer'}>Hide The Answer</span>
              </a>
            </li>
            <li>
              <a className='like show-comments bg-cloud'>
                <span className='pull-right'>
                  <i id='like1' className='glyphicon glyphicon-thumbs-up' /> <div id='like1-bs3' />
                </span>
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    )
  }
}

export default QuestionItem
