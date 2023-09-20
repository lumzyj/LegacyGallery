import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Gallery from './components/ Gallery';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;

