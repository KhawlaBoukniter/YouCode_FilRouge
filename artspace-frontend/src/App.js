import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import RevolutionaryFeatures from "./components/RevolutionaryFeatures";
// import FeaturedExhibitions from "./components/FeaturedExhibitions";
// import Testimonials from "./components/Testimonials";
// import CallToAction from "./components/CallToAction";
// import Footer from "./components/Footer";
import Museum3D from './pages/3D/Museum3D'

// function App() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <RevolutionaryFeatures />
//       <FeaturedExhibitions />
//       <Testimonials />
//       <CallToAction />
//       <Footer />
//     </>
//   );
// }

function App() {
  return (
    <Routes>
      <Route path="/museum" element={<Museum3D />} />
    </Routes>
  )
}

export default App;