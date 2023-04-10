import './App.scss';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';



function App() {
  return (
<>
<label for="darkMode" className='menu-mode'>
<i class="fa-solid fa-toggle-on "></i>
  </label>
    <input type="checkbox"className='dark-mode-checkbox'  id="check"/>


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

      <MobileNav/>
     
    </div>
    </>
  );
}

export default App;
