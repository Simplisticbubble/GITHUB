import { useState } from 'react'

import './App.css'

export default function App(){
  const questions = [
    {
      question: "What is the capital of France?",
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars',            
    },
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer){
        setScore((prevScore) => prevScore +1);
    }
    if (currentQuestionIndex +1 < questions.length){
      setCurrentQuestionIndex((prevQuestionIndex)=>prevQuestionIndex+1);
    }
  }
  const showScoreAlert = ()=>{
    alert(`Your score: ${score}/${questions.length}`);
  }
  return(
    <>
    <h1>Quiz</h1>
      <div>
        <h3>{questions[currentQuestionIndex].question}</h3>
        <ul>
          {questions[currentQuestionIndex].options.map((option, index) => (
              <li key = {index}>
                <button onClick={() => handleAnswer(option)}>{option}</button>
              </li>
          )
          )}
        </ul>
        <button onClick = {() => showScoreAlert()}>Show score out of 2 i dont get this </button>
      </div>
    </>
  );
}

