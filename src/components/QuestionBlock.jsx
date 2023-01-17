import React from 'react'

export const QuestionBlock = ({ question }) => {
  return (
    <button className='question-block'>
      <img src={question.image} />
      <h3>{question.text}</h3>
      <p>
        <a href={question.image}>{question.credit} </a>
        <a href='https://unsplash.com/'>Unsplash</a>
      </p>
    </button>
  )
}
