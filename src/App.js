import './App.css';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div className="App">
  
      </div >
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>

    </Router>
  );
}

