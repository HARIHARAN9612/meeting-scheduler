// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home';
import LoginPage from './LoginPage';
import Signup from './Signup';

export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
           
      </Routes>
    </Router>
  );
}