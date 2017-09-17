import React, {Component} from 'react'
import AnswerItem from './AnswerItem'
import AnchorLink from '../common/form/AnchorLink'
import CommentsPage from '../comments/CommentsPage'

class QuestionItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      question: props.question,
      questionText: props.questionText,
      answerText: props.answerText,
      showHideAnswer: true,
      showHideComments: true
    }
  }

  showAnswer () {
    this.state.showHideAnswer === true
        ? this.setState({showHideAnswer: false})
        : this.setState({showHideAnswer: true})
  }

  showAllComments () {
    this.state.showHideComments === true
      ? this.setState({showHideComments: false})
      : this.setState({showHideComments: true})
  }

  render () {
    return (
      <div>
        <div className='question-container bg-cloud'>
          <span className='question-mark font-gotham-medium text-grass'>Q</span>
          <div className='question-inner-container bg-cloud'>
            <p className='mb-1 question-text text-left'>{this.state.questionText}</p>
          </div>

          <AnswerItem answerText={this.state.answerText} disabled={this.state.showHideAnswer} />

          <div className='control-group'>
            <div className='controls align-right'>
              <AnchorLink className='answer-toggling text-grass push-top'
                onClickMethod={this.showAnswer.bind(this)} content={(
                  <span>
                    <span className={!this.state.showHideAnswer ? 'see-answer disabled' : 'see-answer'}>See The Answer</span>
                    <span className={this.state.showHideAnswer ? 'hide-answer disabled' : 'hide-answer'}>Hide The Answer</span>
                  </span>
                )} />
              <AnchorLink className='delete_add btn btn-inverse btn-medium push-top'
                onClickMethod={this.props.voteForQuestion} content={(
                  <span className='pull-right'>
                    <i id='like1' className='glyphicon glyphicon-thumbs-up' /> <div id='like1-bs3' />
                  </span>
                )} />
              <AnchorLink className='push-top btn btn-inverse show-comments'
                onClickMethod={this.showAllComments.bind(this)} content={(
                  <span className='pull-right'>
                    <p className='show-comments-text'>Show all comments</p>
                  </span>
                )} />
            </div>
          </div>
        </div>
        <CommentsPage disabled={this.state.showHideComments} comments={this.state.question.comments} />
      </div>
    )
  }
}

export default QuestionItem
