import Gauges from './modules/gauges/Gauges'
import { GameProvider } from './core/providers/GameProvider';
import './App.css'

import QuestionContainer from "./modules/question/components/QuestionContainer";

function App() {

  return (
    <div className="App">
      <QuestionContainer />
      <GameProvider>
        <Gauges />
      </GameProvider>
    </div>
  )
}

export default App
