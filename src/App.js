import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './container/Home/Home';
import Work from './container/Work/Work';
import BGWrap from './wrapper/BGWrap';
import About from './container/About/About';
import Services from './container/Services/Services';
import Footer from './components/Footer/Footer';
import FAQ from './container/FAQ/FAQ';
import Contact from './container/Contact/Contact';

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
