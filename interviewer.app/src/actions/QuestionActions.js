import dispatcher from '../dispatcher'

const QuestionActions = {
  types: {
    ALL_QUESTIONS: 'all_questions'
  },

  allQuestions () {
    dispatcher.dispatch({
      type: this.types.ALL_QUESTIONS
    })
  }
}

export default QuestionActions
