import Header from '../components/sections/Header/Header';
import About from '../components/sections/About/About';
import Projects from '../components/sections/Projects/Projects';
import './App.css';

// portfolio ejemplo: https://github.com/berthutapea/berthutapea-portfolio
// portfolio example: https://mannatthemes.com/selfown/default/index.html
function App() {
  
  return (
    <>
      <div className="portfolio-app">
        <Header />
        <main>
          <About />
          <Projects />
        </main>
      </div>
    </>
  );
}

export default App;