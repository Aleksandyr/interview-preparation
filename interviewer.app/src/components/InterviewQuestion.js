import React, {Component} from 'react'
import QuestionItem from './common/question/QuestionItem'

class InterviewQuestion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: [
        {questionText: 'What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.'},
        {questionText: 'What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.'},
        {questionText: 'What are the three main ways to add CSS to a webpage? Describe the advantages and disadvantages of each method.'}
      ],
      answers: [
        {answerText: 'Inline CSS can be written directly into the HTML elements as a style attribute.' +
        'The primary advantage of inline CSS is the ability to override other style specifications in the single' +
        'instance of an HTML element that it is applied to. However, this is only feasible if there are a small number of style definitions.' +
        'It is generally better to use embedded or external style sheets for more complex styles.' +
        'External style sheets allow the developer to separate style from content, and control multiple HTML documents from a single separate' +
        'file, making it easy to style the entirety of a site with a single document. It enables complex styling through classes, ' +
        'selectors, and other grouping methods. The disadvantage of an external CSS file is that it must be downloaded ' +
        'first for the HTML file to be properly rendered.'},
        {answerText: 'Inline CSS can be written directly into the HTML elements as a style attribute.' +
        'The primary advantage of inline CSS is the ability to override other style specifications in the single' +
        'instance of an HTML element that it is applied to. However, this is only feasible if there are a small number of style definitions.' +
        'It is generally better to use embedded or external style sheets for more complex styles.' +
        'External style sheets allow the developer to separate style from content, and control multiple HTML documents from a single separate' +
        'file, making it easy to style the entirety of a site with a single document. It enables complex styling through classes, ' +
        'selectors, and other grouping methods. The disadvantage of an external CSS file is that it must be downloaded ' +
        'first for the HTML file to be properly rendered.'},
        {answerText: 'Inline CSS can be written directly into the HTML elements as a style attribute.' +
        'The primary advantage of inline CSS is the ability to override other style specifications in the single' +
        'instance of an HTML element that it is applied to. However, this is only feasible if there are a small number of style definitions.' +
        'It is generally better to use embedded or external style sheets for more complex styles.' +
        'External style sheets allow the developer to separate style from content, and control multiple HTML documents from a single separate' +
        'file, making it easy to style the entirety of a site with a single document. It enables complex styling through classes, ' +
        'selectors, and other grouping methods. The disadvantage of an external CSS file is that it must be downloaded ' +
        'first for the HTML file to be properly rendered.'}
      ]
    }
  }
  render () {
    var questions = 'No questions!'
    if (this.state.questions.length > 0) {
      questions = this.state.questions.map((element, index) => (
        <QuestionItem key={index} questionText={this.state.questions[index].questionText}
          answerText={this.state.answers[index].answerText} />
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

export default InterviewQuestion
