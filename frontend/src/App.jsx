import React from 'react';
import './App.css';
import Report from './pages/Report';
import Auth from './pages/Auth'
import Analytics from './pages/Analytics'
import {Routes, Route } from 'react-router-dom';
import About from './pages/About';
import WebcamData from "./pages/LiveWebCam";
import Metal from './components/Metal';
import Plastic from './components/Plastic';
import Paper from './components/Paper';
import Cardboard from './components/Cardboard';
import Glass from './components/Glass';
import Trash from './components/Trash';
import Home from './components/Home/Home'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

  
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#048a52",
      },
      white: {
        main: "#ffffff",
      },
    },
    typography: {
      fontFamily: "Poppins",
    },
  });
  return (
    <div>
    <Routes>
    <Route exact path="/" element={<Home/>} />
     <Route path = "/Report" element = {<Report/>} />
     <Route path = "/Analytics" element = {<Analytics/>} />
     <Route path = "/Auth" element = {<Auth/>} />
     <Route path = "/Waste/Metal" element = {<Metal />} />
     <Route path = "/Waste/Plastic" element = {<Plastic />} />
     <Route path = "/Waste/Paper" element = {<Paper />} />
     <Route path = "/Waste/Cardboard" element = {<Cardboard />} />
     <Route path = "/Waste/Glass" element = {<Glass/>} />
     <Route path = "/Waste/Trash" element = {<Trash/>} />
     <Route path = "/Webcam" element={<WebcamData />} />
    

     </Routes>
    </div>


  );
}

export default App;
