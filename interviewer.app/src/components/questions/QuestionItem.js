import React, {Component} from 'react'
import AnswerItem from './AnswerItem'
import AnchorLink from '../common/form/AnchorLink'
import CommentsPage from '../comments/CommentsPage'

class QuestionItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      question: props.question,
      hideAnswer: true,
      hideComments: true
    }
  }

  showAnswer () {
    this.state.hideAnswer === true
    ? this.setState({hideAnswer: false})
    : this.setState({hideAnswer: true})
  }

  showAllComments () {
    if (this.state.hideComments) {
      this.setState({hideComments: false})
    } else {
      this.setState({hideComments: true})
    }
  }

  render () {
    return (
      <div>
        <div className='question-container bg-cloud'>
          <span className='question-mark font-gotham-medium text-grass'>Q</span>
          <div className='question-inner-container bg-cloud'>
            <p className='mb-1 question-text text-left'>{this.state.question.title}</p>
          </div>

          <AnswerItem answerText={this.state.question.answer.content} disabled={this.state.hideAnswer} />

          <div className='control-group'>
            <div className='controls align-right'>
              <AnchorLink className='answer-toggling text-grass push-top'
                onClickMethod={this.showAnswer.bind(this)} content={(
                  <span>
                    <span className={!this.state.hideAnswer ? 'see-answer disabled' : 'see-answer'}>See The Answer</span>
                    <span className={this.state.hideAnswer ? 'hide-answer disabled' : 'hide-answer'}>Hide The Answer</span>
                  </span>
                )} />
              <AnchorLink className='delete_add btn btn-inverse btn-medium push-top'
                onClickMethod={this.props.voteForQuestion} content={(
                  <span className='pull-right display-flex'>
                    <i id='like1' className='glyphicon glyphicon-thumbs-up' /> <div id='like1-bs3' />
                    <p className='like-counter'>0</p>
                  </span>
                )} />
              <AnchorLink className='push-top btn btn-inverse show-comments'
                onClickMethod={() => { this.showAllComments() }} content={(
                  <span className='pull-right'>
                    <p className='show-comments-text'>Show all comments</p>
                  </span>
                )} />
            </div>
          </div>
        </div>
        <CommentsPage disabled={this.state.hideComments} comments={this.state.question.comments} questionId={this.state.question.id} />
      </div>
    )
  }
}

export default QuestionItem
