import React, {Component} from 'react'
import QuestionItem from './QuestionItem'
import QuestionActions from '../../actions/QuestionActions'
import QuestionStore from '../../stores/QuestionStore'
import CategoryStore from '../../stores/CategoryStore'
import Pagination from '../pagination/Pagination'

class InterviewQuestions extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: [],
      pageOfItems: []
    }

    this.onChangePage = this.onChangePage.bind(this)
    this.handleFetchedQuestions = this.handleFetchedQuestions.bind(this)
    this.handleFetchedQuestionsByCategory = this.handleFetchedQuestionsByCategory.bind(this)

    QuestionStore.on(
      QuestionStore.eventTypes.FETCHED_ALL_QUESTIONS,
      this.handleFetchedQuestions
    )
    CategoryStore.on(
      CategoryStore.eventTypes.FETCHED_QUESTIONS_BY_CATEGORY,
      this.handleFetchedQuestionsByCategory
    )
  }

  componentWillMount () {
    QuestionActions.allQuestions()
  }

  handleFetchedQuestions (data) {
    this.setState({questions: data.questions})
  }

  handleFetchedQuestionsByCategory (data) {
    this.setState({questions: data.category.quesitons})
  }

  onChangePage (pageOfItems) {
    this.setState({ pageOfItems: pageOfItems })
  }

  componentWillUnmount () {
    QuestionStore.removeListener(
      QuestionStore.eventTypes.FETCHED_ALL_QUESTIONS,
      this.handleFetchedQuestions
    )

    CategoryStore.removeListener(
      CategoryStore.eventTypes.FETCHED_QUESTIONS_BY_CATEGORY,
      this.handleFetchedQuestionsByCategory
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
