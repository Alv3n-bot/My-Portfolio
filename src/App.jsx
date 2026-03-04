import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx"
import TechStack from "./components/TechStack.jsx"


function App() {

   return (
    <>
   <Header />
   <Projects />
   <TechStack />
   <Contact />
    </>
  )
}

export default App;
