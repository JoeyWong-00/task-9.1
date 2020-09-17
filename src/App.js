import React from 'react';
import './App.css';
import Header from './components/Header';
import LandingImage from './components/LandingImage';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingImage />
      <h2>Featured Requesters</h2>
      <Gallery/>
      <Footer />
    </div>
  );
}

export default App;
