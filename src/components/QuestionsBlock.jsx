import React from 'react'
import { QuestionBlock } from './QuestionBlock'

export const QuestionsBlock = ({ quizItem }) => {
  return (
    <>
      <h2 id={quizItem.id} className='question-title'>{quizItem.text}</h2>
      <div className='questions-container'>
        {quizItem.questions.map((question, _index) => (
          <QuestionBlock key={_index} question={question} />
        ))}
      </div>
    </>
  )
}
