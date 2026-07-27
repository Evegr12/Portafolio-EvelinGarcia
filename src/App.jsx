import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Traits from "./components/Traits";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      
      <Header/>

      <main>
        <Hero/>
        <Traits/>
        <Projects/>
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
