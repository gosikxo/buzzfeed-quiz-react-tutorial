import React from 'react'
import { QuestionBlock } from './QuestionBlock'

export const QuestionsBlock = ({ quizItem, setChosenAnswerItems, chosenAnswerItems }) => {
  return (
    <>
      <h2 id={quizItem.id} className='question-title'>{quizItem.text}</h2>
      <div className='questions-container'>
        {quizItem.questions.map((question, _index) => (
          <QuestionBlock key={_index} question={question} setChosenAnswerItems={setChosenAnswerItems} chosenAnswerItems={chosenAnswerItems} />
        ))}
      </div>
    </>
  )
}
