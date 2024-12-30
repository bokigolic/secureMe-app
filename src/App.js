import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Passwords from './components/Paswords';
//import PersonalInfo from './components/PersonalInfo';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/personal-info">Personal Info</Link> |{' '}
          <Link to="/passwords">Passwords</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/personal-info" element={<PersonalInfo />} />*/}
          <Route path="/passwords" element={<Passwords />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
