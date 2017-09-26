import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import QuestionActions from '../actions/QuestionActions'
import QuestionData from '../data/QuestionData'

class QuestionStore extends EventEmitter {
  allQuestions () {
    QuestionData
      .allQuestions()
      .then(data => this.emit(this.eventTypes.FETCHED_ALL_QUESTIONS, data))
  }

  commentsByQuesiton (id) {
    QuestionData
      .commentsByQuestion(id)
      .then(data => this.emit(this.eventTypes.FETCHED_QUESTION_COMMENTS, data))
  }

  voteForQuestions (id) {
    QuestionData
      .voteForQuestion(id)
      .then(data => this.emit(this.eventTypes.VOTED_FOR_QUESTION, data))
  }

  handleAction (action) {
    switch (action.type) {
      case QuestionActions.types.ALL_QUESTIONS:
        this.allQuestions()
        break
      case QuestionActions.types.COMMENTS_BY_QUESTION:
        this.commentsByQuesiton(action.id)
        break
      case QuestionActions.types.VOTE_FOR_QUESTION:
        this.voteForQuestions(action.id)
        break
      default: break
    }
  }
}

let questionStore = new QuestionStore()

questionStore.eventTypes = {
  FETCHED_ALL_QUESTIONS: 'fetched_all_questions',
  FETCHED_QUESTION_COMMENTS: 'fetched_quesiton_comments',
  VOTED_FOR_QUESTION: 'voted_for_quesiton'
}

dispatcher.register(questionStore.handleAction.bind(questionStore))
export default questionStore
