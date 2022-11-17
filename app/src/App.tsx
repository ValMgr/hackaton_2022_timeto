import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '@/modules/homePage/HomePage';
import KnowMorePage from '@/modules/knowMore/KnowMorePage';

import '@/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='en-savoir-plus' element={<KnowMorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
