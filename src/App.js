import './App.css';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import HealthySelector from './pages/HealthySelector';
import SelectorSalgado from './pages/SelectorSalgado';
import CandySelector from './pages/CandySelector';
import QuickSelector from './pages/QuickSelector';

import NavBar from './components/NavBar.js';


export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

      </div >
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/CandySelector" element={<CandySelector />} />
        <Route path="/HealthySelector" element={<HealthySelector />} />
        <Route path="/QuickSelector" element={<QuickSelector />} />
        <Route path="/SelectorSalgado" element={<SelectorSalgado />} />
        
      </Routes>

    </Router>
  );
}

