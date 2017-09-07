import React from 'react'
import AnswerItem from './AnswerItem'

const QuestionItem = (props) => (
    <div className="question-container bg-cloud">
        <span className="question-mark font-gotham-medium text-grass">Q</span>
        <div className="question-inner-container bg-cloud">
            <p className="mb-1 question-text text-left">{props.questionText}</p>
        </div>

        <AnswerItem answerText={props.answerText} />

        <a className="answer-toggling text-left font-gotham-medium text-uppercase bg-cloud">
            <span className="see-answer">See The Answer</span>
            <span className="hide-answer disabled">Hide The Answer</span>
        </a>
    </div>
)

export default QuestionItem;