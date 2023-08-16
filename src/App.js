import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
