import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Bag from './component/Bag';
import Bill from './component/Bill';

function App() {
  return (
    <div>
      <Navbar />
      <Bag />
      <Bill />
    </div>
  );

}

export default App;
