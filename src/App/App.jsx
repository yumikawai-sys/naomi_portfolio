import React from 'react';
import NavBar from '../Components/nav/NavBar';
import Hero from '../Pages/Hero';
import Projects from '../Pages/Projects';
import About from '../Pages/About';
// import Skills from '../Pages/Skills';
import Contact from '../Pages/Contact';
import MainPage from '../Pages/MainPage';

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      {/* <Skills /> */}
      {/* <Hero /> */}
      <About />
      <Hero />
      <Projects />
      {/* <Skills /> */}
      <Contact />
    </>
  );
}

export default App;
