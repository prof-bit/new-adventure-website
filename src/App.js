import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Routes} from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <switch>
          <Routes path='/' exact component = {Home}/>
        </switch>
      </Router>
    </div>
  );
}

export default App;
