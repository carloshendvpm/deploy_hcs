import React from 'react'
import { useContext, useState } from 'react'
import { QuizContext } from '../../context/quiz'
import './style.css'
 
const GameOver = () => {
  
    const [quizState, dispatch] = useContext(QuizContext);
    const [learnMode, setLearnMode] = useState(false);

  return (
    <div id="gameover">
      {!learnMode ? (
        <>
          <h2>You earn a badge.<br/>Keep learning!</h2>
          <img src="../../assets/img/badge.png" alt="" />
          <div className="score">
              <p className='hits'> Você acertou {quizState.score} de {quizState.questions.length}{" "}perguntas.</p>
          </div>
          <button onClick={() => dispatch({ type: "NEW_GAME" })} className="btn-redo">Redo</button>
          <button onClick={() => setLearnMode(true)} className="btn-next">Learn now</button>
        </>
      ) : (
        <>
          <h2>Before you start, here is some content to<br/> help you, have fun!</h2>
          {quizState.questions.map( (q, index) => (
            <span key={index}>Question {index + 1}: {q.link} </span>
          ))}
        </>
      )
      }
    </div>
  )
}

export default GameOver