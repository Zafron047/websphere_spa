import React from 'react';

import './App.scss';
import BGWrap from './wrapper/BGWrap';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import { About, Contact, FAQ, Home, Services, Work } from './container';

const App = () => {
  return (
    <>
      <Navbar />
      <BGWrap>
        <Home />
        <About />
        <Services />
        <Work />
        <FAQ />
        <Contact />
      </BGWrap>
      <Footer />
    </>
  );
};

export default App;
