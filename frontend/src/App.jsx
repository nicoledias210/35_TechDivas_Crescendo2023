import React from 'react';
import './App.css';

import Report from './pages/Report';
import Auth from './pages/Auth'
import Analytics from './pages/Analytics'
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Metal from './components/Metal';
import Plastic from './components/Plastic';
import Paper from './components/Paper';
import Cardboard from './components/Cardboard';
import Glass from './components/Glass';
import Trash from './components/Trash';
function App() {
  return (
    <>
    <Routes>

     <Route path = "/Report" element = {<Report/>} />
     <Route path = "/Analytics" element = {<Analytics/>} />
     <Route path = "/Auth" element = {<Auth/>} />
     <Route path = "/Waste/Metal" element = {<Metal />} />
     <Route path = "/Waste/Plastic" element = {<Plastic />} />
     <Route path = "/Waste/Paper" element = {<Paper />} />
     <Route path = "/Waste/Cardboard" element = {<Cardboard />} />
     <Route path = "/Waste/Glass" element = {<Glass/>} />
     <Route path = "/Waste/Trash" element = {<Trash/>} />
    

     </Routes>


    </>
  );
}
  
export default App;