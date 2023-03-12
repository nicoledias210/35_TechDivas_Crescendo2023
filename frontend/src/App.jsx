import React from 'react';
import './App.css';

import Report from './pages/Report';
import Auth from './pages/Auth'
import Analytics from './pages/Analytics'
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/Login';

  
function App() {
  return (
    <>
    <Routes>

     <Route path = "/Report" element = {<Report/>} />
     <Route path = "/Analytics" element = {<Analytics/>} />
     <Route path = "/Auth" element = {<Auth/>} />
      <Route path ="/Login" element={<SignIn/>}/>

     </Routes>


    </>
  );
}
  
export default App;