import React from 'react'

export const QuestionBlock = ({
  question,
  setChosenAnswerItems,
  chosenAnswerItems,
  setUnasweredQuestionIds,
  unasweredQuestionIds,
  quizItemId
}) => {

  const handleClick = () => {
    setChosenAnswerItems((prevState) => [...prevState, question.text])
    setUnasweredQuestionIds(unasweredQuestionIds.filter((id) => id !== quizItemId)
    )
  }

  return (
    <button
      className='question-block'
      onClick={handleClick}
    // disabled={!chosenAnswerItems.includes(question.text)}
    >
      <img src={question.image} alt={question.alt} />
      <h3>{question.text}</h3>
      <p>
        <a href={question.image}>{question.credit} </a>
        <a href='https://unsplash.com/'>Unsplash</a>
      </p>
    </button>
  )
}
