import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Question, {  } from "./modules/question/components/Question";

function App() {
  let [count, setCount] = useState(0)

  function counter() {
    setCount(
      count += 1
    )
  }
  
  

  return (
    <div className="App">
      <Question />
      <div className="card">
        <button onClick={counter}>
          count is {count}
        </button>
        
      </div>
    </div>
  )
}

export default App
