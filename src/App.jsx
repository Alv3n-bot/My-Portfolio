import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx"
import TechStack from "./components/TechStack.jsx"
import Hero from "./components/Hero.jsx"

function App() {

   return (
    <>
    <div className="m-0 p-0">
   <Header />
      <Hero />
   <Projects />
   <TechStack />
   <Contact />
   </div>
    </>
  )
}

export default App;
