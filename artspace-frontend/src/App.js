import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Museum3D from './pages/3D/Museum3D';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import UserDash from './pages/UserDash';
import Artwork from './pages/Artwork';
import UserFavoriteArtworksPage from './pages/UserFavoriteArtworksPage';
import UserPurchaseHistoryPage from './pages/PurchaseHistoryPage';
import Events from './pages/Events';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/museum/:roomId" element={<Museum3D />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/user-dash' element={<UserDash />} />
      <Route path='/artworks/{artwork}' element={<Artwork />} />
      <Route path='/artworks/saved' element={<UserFavoriteArtworksPage />} />
      <Route path='/artworks/purshased' element={<UserPurchaseHistoryPage />} />
      <Route path='/events' element={<Events />} />
    </Routes>
  );
}

export default App;