import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RevolutionaryFeatures from "./components/RevolutionaryFeatures";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RevolutionaryFeatures />
    </>
  );
}

export default App;