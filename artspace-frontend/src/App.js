import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import RevolutionaryFeatures from "./components/RevolutionaryFeatures";
import FeaturedExhibitions from "./components/FeaturedExhibitions";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RevolutionaryFeatures />
      <FeaturedExhibitions />
      <Testimonials />
    </>
  );
}

export default App;