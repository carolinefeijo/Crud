import './App.css';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Form from '../src/pages/Form'
import { EditUser } from './pages/EditUser';

export default function App() {
  return (
    <Router>
      <div className="App">
  
      </div >
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/form" exact element={<Form />} />
        <Route path="/edit/:id" exact element={<EditUser />} />
      </Routes>

    </Router>
  );
}

