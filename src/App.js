import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './container/Home/Home';
import BGWrap from './wrapper/BGWrap';
import About from './container/About/About';

const App = () => {
  return (
    <BGWrap>
      <Navbar />
      <Home />
      <About />
    </BGWrap>
  );
}

export default App;
