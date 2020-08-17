import React from 'react';
import './App.css';

import SideBar from './features/SideBar/SideBar'
import SpreadSheet from './features/SpreadSheet/SpreadSheet'

function App() {
  return (
    <div className="App">
      <SpreadSheet></SpreadSheet>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
