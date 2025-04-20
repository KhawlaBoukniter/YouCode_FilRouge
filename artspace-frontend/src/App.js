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
import ArtistEvents from './pages/ArtistEvents';
import EventDetails from './pages/EventDetails';
import ArtistDash from './pages/ArtistDash';
import ArtistArtworks from './pages/ArtistArtworks';
import CreateArtwork from './pages/CreateArtwork';
import CreateEvent from './pages/CreateEvent';
import Portfolio from './pages/Portfolio';
import AdminDash from './pages/AdminDash';
import AdminUsersPage from './pages/AdminUsersPage';
import AdminArtistsPage from './pages/AdminArtistsPage';
import AdminEvents from './pages/AdminEvents';
import AdminStats from './pages/AdminStats';
import AllEvents from './pages/AllEvents';
import TicketReservation from './pages/TicketReservation';
import ArtistPortfolioEditor from './pages/ArtistPortfolioEditor';
import UserEdit from './pages/UserEdit';

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
      <Route path='/user/artworks/saved' element={<UserFavoriteArtworksPage />} />
      <Route path='/user/artworks/purchased' element={<UserPurchaseHistoryPage />} />
      <Route path='/user/edit' element={<UserEdit />} />

      <Route path='/artworks/:id' element={<Artwork />} />
      <Route path='/artworks/create' element={<CreateArtwork />} />
      <Route path='/artworks/edit/:id' element={<CreateArtwork />} />

      <Route path='/events/:id' element={<EventDetails />} />
      <Route path='/events/create' element={<CreateEvent />} />
      <Route path='/events' element={<AllEvents />} />

      <Route path='/artist-dash' element={<ArtistDash />} />
      <Route path='/artist/artworks' element={<ArtistArtworks />} />
      <Route path='/artist/events' element={<ArtistEvents />} />
      <Route path='/artist/:id/portfolio' element={<Portfolio />} />
      <Route path='/artist/:id/portfolio/editor' element={<ArtistPortfolioEditor />} />

      <Route path='/admin-dash' element={<AdminDash />} />
      <Route path='/admin/users' element={<AdminUsersPage />} />
      <Route path='/admin/artists' element={<AdminArtistsPage />} />
      <Route path='/admin/events' element={<AdminEvents />} />
      <Route path='/admin/stats' element={<AdminStats />} />

      <Route path='/tickets/:id/reserve' element={<TicketReservation />} />

    </Routes>
  );
}

export default App;