import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import './App.css'
import Skills from './components/Skills';
import '../src/App.css'
import Work from './components/Work';


function App() {
  console.log("working")
  return (
    <main className='container'>
      <Navbar />
      <About />
      <Skills />
      <Work/>
      <Contact />
    </main>
  );
}

export default App;