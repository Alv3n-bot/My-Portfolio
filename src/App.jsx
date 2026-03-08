import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx"
import TechStack from "./components/TechStack.jsx"
import Hero from "./components/Hero.jsx"
import Resume from "./components/Resume.jsx"
function App() {

   return (
    <>

   <Header />
   <Hero />
   <Projects />
   <TechStack />
   <Resume />
   <Contact />

  </>
  )
}

export default App;
