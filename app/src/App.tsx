import Gauges from './modules/gauges/Gauges'
import { GameProvider } from './core/providers/GameProvider';
import './App.css'
import QuestionContainer from "./modules/question/components/QuestionContainer";
import List from "./modules/peoples/components/List";
import Results from "./modules/results/components/Results";


function App() {

  return (
    // <div className="App">
    //   <GameProvider>
    //     <Gauges />
    //     <QuestionContainer />
    //   </GameProvider>
    //   <List />
    // </div>
    <div className="results">
      <Results />
    </div>
  )
}

export default App
