import Header from './components/sections/Header/Header';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;