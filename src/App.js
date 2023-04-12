import './App.scss';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';




function App() {
  const [theme, setTheme] = useState(false)

  const handleChange = (e) => {
    const {checked} = e.target

    setTheme(checked)
  }
  return (
<>
<label for="darkMode" className='menu-mode'>
{theme ? <i class="fa-solid fa-sun" style={{color: "#e7f524",}}></i> : <i class="fa-solid fa-moon" style={{color: "#000000",}}></i>}
{/* <i class="fa-solid fa-toggle-on "></i> */}
  </label>
    <input type="checkbox"className='dark-mode-checkbox' id="check" onChange={handleChange}/>


    {/* <div className='mobileNav'>

    <div className=" mobilenav-icon">
                <a href="#home"><i class="fa-solid fa-house"></i></a>
                <a href="#skills" ><i class="fa-sharp fa-solid fa-laptop-code"></i></a>
                <a href="#project" ><i class="fa-solid fa-diagram-project"></i></a>
                <a href="#about" ><i class="fa-solid fa-user"></i></a>
                <a href="#contact" ><i class="fa-solid fa-message"></i></a>


              </div>

              </div> */}


      


    <div className='wrapper'>

      <NavBar/>

      <Hero/>

      <Skills/>

      <Projects/>

      <About/>

      <Contact/>

      <Footer/>

    
     
    </div>
    </>
  );
}

export default App;
