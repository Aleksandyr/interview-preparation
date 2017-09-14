import React, {Component} from 'react'
// import queryString from 'query-string'
import QuestionItem from './QuestionItem'
import QuestionActions from '../../actions/QuestionActions'
import QuestionStore from '../../stores/QuestionStore'
import Pagination from '../pagination/Pagination'

class InterviewQuestions extends Component {
  constructor (props) {
    super(props)

    // let query = queryString.parse(this.props.location.search)
    // const page = parseInt(query.page, 10) || 1

    this.state = {
      questions: [],
      pageOfItems: []
    }

    this.onChangePage = this.onChangePage.bind(this)
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

  onChangePage (pageOfItems) {
    this.setState({ pageOfItems: pageOfItems })
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
            <QuestionItem history={this.props.history} key={element.id} questionText={element.title}
              answerText={element.answer.content} />
          )}
          <Pagination items={this.state.questions} onChangePage={this.onChangePage} />
        </div>
      </div>
    )
  }
}

export default InterviewQuestions
