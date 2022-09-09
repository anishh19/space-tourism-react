import React from 'react';
import './App.css';
import Main from './components/main'
import Navbar from './components/navbar';
import Destination from './components/destination';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/destinations" element={<Destination/>}/>
      </Routes>
    </div>
  );
}

export default App;
