import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar/>

      <Hero/>

      <Skills/>

      <Projects/>

      <About/>

      <Contact/>

      <Footer/>
     
    </div>
  );
}

export default App;
