import React from 'react'

export const QuestionsBlock = ({ quizItem }) => {
  return (
    <>
      <h2 id={quizItem.id} className='question-title'>{quizItem.text}</h2>
      <div className='questions-container'></div>
    </>
  )
}
