import Gauges from './modules/gauges/Gauges'
import { GameProvider } from './core/providers/GameProvider';
import './App.css'


import QuestionContainer from "./modules/question/components/QuestionContainer";

function App() {

  return (
    <div className="App">
      <GameProvider>
        <Gauges />
        <QuestionContainer />
      </GameProvider>

      <Gauges />
    </div>
  )
}

export default App
