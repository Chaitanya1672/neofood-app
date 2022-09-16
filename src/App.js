import React from 'react';
import './App.css';
import Banner from './Components/Banner';
import Homepage from './Components/Homepage';
import PopularItems from './Components/PopularItems';
import TrendingPage from './Components/TrendingPage';
import ContactUs from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <React.Fragment>
      <Homepage />
      <Banner />
      <TrendingPage />
      <PopularItems />
      <ContactUs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
