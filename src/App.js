import React from 'react';
import Navbar from './navbar';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import './App.css';

import flick from './DSC_0049.JPG'
import Flicks from './flicks';
import Memorial from './memorial';

function Home(){
  return(
    <div className="Home main-content"> 
  <h1>IGUY FLICKS HOME PAGE</h1>
  <img src ={flick} alt = "home" style={{width:"500px"}} />
  </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Navigate to="/iguyflicks" />} />
          <Route path="/iguyflicks" element={<Home />} />
          <Route path="/flicks" element={<Flicks />} />
          <Route path ="/memorial" element={<Memorial />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
