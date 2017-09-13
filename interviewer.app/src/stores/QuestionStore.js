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

  handleAction (action) {
    switch (action.type) {
      case QuestionActions.types.ALL_QUESTIONS:
        this.allQuestions()
        break
      default: break
    }
  }
}

let questionStore = new QuestionStore()

questionStore.eventTypes = {
  FETCHED_ALL_QUESTIONS: 'fetched_all_questions'
}

dispatcher.register(questionStore.handleAction.bind(questionStore))
export default questionStore
