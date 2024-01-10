import React from 'react';
//import ReactDOM from 'react-dom/client';
import './App.css';
import Header from './Header';
import Home from './Home';
// eslint-disable-next-line
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<><Header /><Home /></>} />
          <Route path='/checkout' element={<><Header /><h1>I'm a checkout !!!</h1></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
