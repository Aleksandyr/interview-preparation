import React, {Component} from 'react'
import QuestionItem from './QuestionItem'
import QuestionActions from '../../actions/QuestionActions'
import QuestionStore from '../../stores/QuestionStore'

class InterviewQuestions extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: []
    }

    this.handleFetchedQuestions = this.handleFetchedQuestions.bind(this)

    QuestionStore.on(
      QuestionStore.eventTypes.FETCHED_ALL_QUESTIONS,
      this.handleFetchedQuestions
    )
  }

  componentWillMount () {
    QuestionActions.allQuestions()
  }

  handleFetchedQuestions (data) {
    this.setState({questions: data.questions})
  }

  componentWillUnmount () {
    QuestionStore.removeListener(
      QuestionStore.eventTypes.FETCHED_ALL_QUESTIONS,
      this.handleFetchedQuestions
    )
  }

  render () {
    var questions = 'No questions!'
    if (this.state.questions.length > 0) {
      questions = this.state.questions.map((element, index) => (
        <QuestionItem history={this.props.history} key={index} questionText={element.title}
          answerText={element.answer.content} />
      ))
    }
    return (
      <div>
        <section id='interview-questions' name='resume' />
        <div className='list-group'>
          {questions}
        </div>
      </div>
    )
  }
}

export default InterviewQuestions
