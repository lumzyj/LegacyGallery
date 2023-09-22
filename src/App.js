import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Gallery from './components/ Gallery';
import Signupup from './components/Signupup';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/SignUp' element={<Signupup />} />
       
      </Routes>
    </Router>
  );
}

export default App;

