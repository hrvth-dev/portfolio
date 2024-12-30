import React from 'react';
import Header from "../src/components/Header.jsx";
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import "../src/App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Skills/>
    </div>
  );
}

export default App;
