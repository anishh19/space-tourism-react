import React from 'react';
import './App.css';
import Main from './components/main'
import Navbar from './components/navbar';
import Destination from './components/destination';
import Crew from './components/crew'
import {Routes, Route} from 'react-router-dom';
import Technology from './components/technology';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/crew" element={<Crew/>}/>
      <Route path="/destinations" element={<Destination/>}/>
      <Route path="/technology" element={<Technology/>}/>
      </Routes>
    </div>
  );
}

export default App;
