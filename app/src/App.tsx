import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from '@/modules/homePage/HomePage';
import KnowMore from '@/modules/knowMore/KnowMore';

import '@/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='en-savoir-plus' element={<KnowMore />} />
      </Routes>
    </Router>
  );
}

export default App;
