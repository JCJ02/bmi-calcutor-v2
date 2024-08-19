import React, { useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home.jsx';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    document.title = "BMI Calculator Application";
  }, []);
  return (
    <>
      <NavigationBar />
      <Home />
      <Footer />
    </>
  )
}

export default App
