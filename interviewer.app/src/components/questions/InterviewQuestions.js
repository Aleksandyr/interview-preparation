import React, {Component} from 'react'
import QuestionItem from './QuestionItem'
import QuestionActions from '../../actions/QuestionActions'
import QuestionStore from '../../stores/QuestionStore'
import Pagination from '../pagination/Pagination'
import Auth from '../common/user/Auth'

class InterviewQuestions extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: [],
      pageOfItems: []
    }

    this.onChangePage = this.onChangePage.bind(this)
    this.handleFetchedQuestions = this.handleFetchedQuestions.bind(this)
    this.voteForQuestion = this.voteForQuestion.bind(this)

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

  onChangePage (pageOfItems) {
    this.setState({ pageOfItems: pageOfItems })
  }

  voteForQuestion () {
    if (!Auth.isUserAuthenticated()) {
      this.props.history.push('/login')
    }
  }

  componentWillUnmount () {
    QuestionStore.removeListener(
      QuestionStore.eventTypes.FETCHED_ALL_QUESTIONS,
      this.handleFetchedQuestions
    )
  }

  render () {
    return (
      <div>
        <section id='interview-questions' name='resume' />
        <div className='list-group'>
          {this.state.pageOfItems.map(element =>
            <QuestionItem key={element.id} voteForQuestion={this.voteForQuestion} question={element} />
          )}
          <Pagination items={this.state.questions} onChangePage={this.onChangePage} />
        </div>
      </div>
    )
  }
}

export default InterviewQuestions
