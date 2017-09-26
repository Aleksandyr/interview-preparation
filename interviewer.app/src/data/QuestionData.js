import Data from './Data'

const baseUrl = 'api/questions'

class QuestionData {
  static allQuestions () {
    return Data.get(`${baseUrl}/all`)
  }

  static commentsByQuestion (id) {
    return Data.get(`${baseUrl}/comments/?id=${id}`)
  }

  static voteForQuestion (id) {
    return Data.post(`${baseUrl}/vote/?id=${id}`, {}, true)
  }
}

export default QuestionData
