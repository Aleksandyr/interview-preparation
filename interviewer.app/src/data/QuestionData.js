import Data from './Data'

const baseUrl = 'api/questions'

class QuestionData {
  static allQuestions () {
    return Data.get(`${baseUrl}/all`)
  }
}

export default QuestionData