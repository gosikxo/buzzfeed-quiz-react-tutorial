import { useEffect, useState } from "react"
import { Title } from "./components/Title"
import { QuestionsBlock } from "./components/QuestionsBlock"
import { AnswerBlock } from "./components/AnswerBlock"

const App = () => {
  const [quiz, setQuiz] = useState(null)
  const [chosenAnswerItems, setChosenAnswerItems] = useState([])
  const [unasweredQuestionIds, setUnasweredQuestionIds] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/quiz')
      const json = await response.json()
      setQuiz(json)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const unansweredIds = quiz?.content?.map(({ id }) => id)
    setUnasweredQuestionIds(unansweredIds)
  }, [quiz])

  useEffect(() => {
    if (unasweredQuestionIds) {
      if (unasweredQuestionIds.length <= 0 && chosenAnswerItems.length >= 1) {
        // scroll to answer block
        setShowAnswer(true)
        const answerBlock = document.getElementById('answer-block')
        answerBlock?.scrollIntoView({ behavior: 'smooth' })
      }
      // scroll to highest unasweredQuestionId
      const highestId = Math.min(...unasweredQuestionIds)
      const highestElement = document.getElementById(highestId)
      highestElement?.scrollIntoView({ behavior: "smooth" })
    }
  }, [unasweredQuestionIds, showAnswer, chosenAnswerItems])

  return (
    <div className="app">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz?.content?.map(contentItem => (
        <QuestionsBlock
          key={contentItem.id}
          quizItem={contentItem}
          setChosenAnswerItems={setChosenAnswerItems}
          chosenAnswerItems={chosenAnswerItems}
          setUnasweredQuestionIds={setUnasweredQuestionIds}
          unasweredQuestionIds={unasweredQuestionIds}
        />
      ))}
      {showAnswer && (
        <AnswerBlock
          answerOptions={quiz?.answers}
          chosenAnswers={chosenAnswerItems}
        />
      )}
    </div>
  );
}

export default App;
