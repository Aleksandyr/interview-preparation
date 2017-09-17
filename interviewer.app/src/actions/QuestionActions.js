import dispatcher from '../dispatcher'

const QuestionActions = {
  types: {
    ALL_QUESTIONS: 'all_questions',
    COMMENTS_BY_QUESTION: 'comments_by_question'
  },

  allQuestions () {
    dispatcher.dispatch({
      type: this.types.ALL_QUESTIONS
    })
  },
  commentsByQuestion (id) {
    dispatcher.dispatch({
      type: this.types.COMMENTS_BY_QUESTION,
      id
    })
  }
}

export default QuestionActions
