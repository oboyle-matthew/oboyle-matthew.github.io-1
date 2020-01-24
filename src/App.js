import React from 'react';
import Title from './sections/Title/Title';
import About from './sections/About/About';
import Team from './sections/Team/Team';
import Navbar from "./sections/Navbar/components/navbar/Navbar";
import './App.js';

function App() {
  return (
    <div>
      <Navbar />
      <Title/>
        <About/>
        <Team/>
    </div>
  );
}

export default App;
