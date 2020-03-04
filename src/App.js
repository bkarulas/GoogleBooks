import React from 'react';
import './App.css';
import Banner from './components/Banner'
import Navigation from './components/Nav'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Search />
    </div>
  );
}

export default App;
