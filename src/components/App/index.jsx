import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Reservation } from '../../Reservation/reservation';

export const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);
