/* eslint-disable no-unused-vars */
import React from 'react';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Dashboard from '../src/components/Dashboard';
import Listing from './components/Listing';
import Thankyou from './components/Thankyou';
import PreviewPage from './components/PreviewPage';
import PropertyOverview from './components/PropertyOverview';

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      </>
  );
}

export default App;