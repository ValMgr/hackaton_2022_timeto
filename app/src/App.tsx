import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GameProvider from '@/core/providers/GameProvider';
import HomePage from '@/modules/homePage/HomePage';
import KnowMorePage from '@/modules/knowMore/KnowMorePage';

import '@/App.css';

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='en-savoir-plus' element={<KnowMorePage />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
