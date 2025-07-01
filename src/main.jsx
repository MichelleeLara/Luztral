import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './sections/navbar.jsx';
import Home from './pages/Home.jsx';
import Planes from './pages/Planes.jsx';
import './index.css';
import Footer from './sections/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/planes' element={<Planes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
