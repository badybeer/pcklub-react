import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Services from './routes/ServicesPage'
import InstructionsPage from './routes/InstructionsPage'
import AboutPage from './routes/AboutPage'
import NetworkPage from './routes/InstructionsPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/services' element={<Services />} />
      <Route path='/instructions' element={<InstructionsPage />} />
      <Route path='/network' element={<NetworkPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

function About() {
  // 👇️ using window.location.href 👇️
  window.location.href = 'https://userpanel.pcklub.sk/';
  return null;
}

