import './App.css';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
