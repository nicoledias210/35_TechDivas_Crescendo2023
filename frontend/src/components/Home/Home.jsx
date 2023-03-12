import React from 'react';
import Report from '../../pages/Report';
import Auth from '../../pages/Auth'
import Analytics from '../../pages/Analytics'
import {Routes, Route } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";
import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";


function Home() {
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
    <div><ThemeProvider theme={theme}>
    <CssBaseline />
    <Navbar />
    <Hero />
    <Categories />
    <Team />
    <Footer />
  </ThemeProvider></div>
  )
}

export default Home