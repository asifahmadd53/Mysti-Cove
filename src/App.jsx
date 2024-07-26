import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Hotels from './components/Hotels';
import Tours from './components/Tours';
import Posts from './components/Posts';
import Testimonials from './components/Testimonials';
import Questions from './components/Questions';
import Footer from './components/Footer';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Hero />} />
      <Route path='hotels' element={<Hotels />} />
      <Route path='tours' element={<Tours />} />
      <Route path='post' element={<Posts />} />
      <Route path='testimonials' element={<Testimonials />} />
     
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
