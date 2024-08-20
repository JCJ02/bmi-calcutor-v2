import React, { useEffect } from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home.jsx';
import Footer from './components/Footer';

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
