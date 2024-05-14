import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';

export default function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>  
    </Routes>
  )
}