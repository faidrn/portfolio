import { usePortfolio } from './usePortfolio';
import Header from '../components/sections/Header/Header';
import About from '../components/sections/About/About';
import Projects from '../components/sections/Projects/Projects';
import './App.css';

// portfolio ejemplo: https://github.com/berthutapea/berthutapea-portfolio
// portfolio example: https://mannatthemes.com/selfown/default/index.html
// menu desplegable https://medium.com/@practicandoprogramacion/como-crear-header-o-men%C3%BA-responsive-en-react-effdc003d07e
function App() {
  const {
    collapseMenu, 
  } = usePortfolio();

  return (
    <>
      <div className="portfolio-app">
        <Header 
          onCollapseMenuClick={() => collapseMenu()}
        />
        <main>
          <About />
          <Projects />
        </main>
      </div>
    </>
  );
}

export default App;