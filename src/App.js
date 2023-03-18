import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <NavBar/>

      <Hero/>

      <Skills/>

      <Projects/>
     
    </div>
  );
}

export default App;
