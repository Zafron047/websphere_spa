import React from 'react';
import '../App.css';

const BGWrap = ({ children }) => {
  return (
    <div className="App-BG">
      {children}
    </div>
  );
}

export default BGWrap;
