import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from './pages/Home';
import Showtask from './pages/ShowTask';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/showtask/:id' element={<Showtask />} />
      </Routes>
    </Router>
  );
};

export default App;