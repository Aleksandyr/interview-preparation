import React from 'react'

const AnswerItem = (props) => (
    <div className="asnwer-content disabled">
        <span className="answer-icon font-gotham-medium">A</span>
        <div className="answer-text text-left">{props.answerText}</div>
    </div>
)

export default AnswerItem