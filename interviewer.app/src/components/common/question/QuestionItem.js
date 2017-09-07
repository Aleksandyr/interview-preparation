import React, {Component} from 'react'
import AnswerItem from './AnswerItem'

class QuestionItem extends Component {
    constructor (props) {
        super (props)

        this.state = {
            questionText: props.questionText,
            answerText: props.answerText,
            disabled: true
        }
    }

    showAnswer () {
        this.state.disabled === true ?
            this.setState({disabled: false}) :
            this.setState({disabled: true})
    }

    render () {
        return (
            <div className="question-container bg-cloud">
                <span className="question-mark font-gotham-medium text-grass">Q</span>
                <div className="question-inner-container bg-cloud">
                    <p className="mb-1 question-text text-left">{this.state.questionText}</p>
                </div>

                <AnswerItem answerText={this.state.answerText} disabled={this.state.disabled} />

                <a className="answer-toggling text-left font-gotham-medium text-uppercase bg-cloud"
                    onClick={this.showAnswer.bind(this)}>
                    <span className={ !this.state.disabled ? "see-answer disabled" : "see-answer" }>See The Answer</span>
                    <span className= { this.state.disabled ? "hide-answer disabled" : "hide-answer" }>Hide The Answer</span>
                </a>
            </div>  
        )
    }
}

export default QuestionItem;