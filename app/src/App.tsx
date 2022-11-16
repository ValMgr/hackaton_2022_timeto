import Gauges from './modules/gauges/Gauges'
import { GameProvider } from './core/providers/GameProvider';
import './App.css'

function App() {

  return (
    <div className="App">
      <GameProvider>
        <Gauges />
      </GameProvider>
    </div>
  )
}

export default App
