import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navbar/Navbar';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <Navigation />
      <Routes />
    </div>
  );
}

export default App;
