import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CurrentGame from './pages/CurrentGame';


import './App.css';

function App() {
  return (
    <Router>
      <div className='bg'>
      </div>
      <div className="flex-column justify-flex-start content">
        <Header />
        <div className="container">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/currentGame"
              element={<CurrentGame />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
