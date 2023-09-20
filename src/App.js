import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  ); 
};

export default App; 