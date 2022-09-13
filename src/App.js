import React from 'react';
import './App.css';
import Banner from './Components/Banner';
import Homepage from './Components/Homepage';
import PopularItems from './Components/PopularItems';
import TrendingPage from './Components/TrendingPage';

function App() {
  return (
    <React.Fragment>
      <Homepage />
      <Banner />
      <TrendingPage />
      <PopularItems />
    </React.Fragment>
  );
}

export default App;
