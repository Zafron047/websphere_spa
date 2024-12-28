import React from 'react';
import '../App.scss';

const BGWrap = ({ children }) => {
  return (
    <div className="App-BG">
      {children}
    </div>
  );
}

export default BGWrap;
