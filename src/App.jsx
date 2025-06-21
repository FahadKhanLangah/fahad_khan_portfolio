import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MyProjects from "./components/MyProjects"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Skills from "./components/Skills"
import SocialProfiles from "./components/SocialProfiles"




function App() {
const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <Services></Services>
      <MyProjects></MyProjects>
      <SocialProfiles/>
      <Footer></Footer>
    </div>
  )
}

export default App
