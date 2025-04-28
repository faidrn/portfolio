import { Routes, Route } from 'react-router-dom';
import Header from '../components/sections/Header/Header';
import About from '../components/sections/About/About';
import Projects from '../components/sections/Projects/Projects';
import { Home } from '../components/sections/Home/Home';
import { Contact } from '../components/sections/Contact/Contact';
import './App.css';

// portfolio ejemplo: https://github.com/berthutapea/berthutapea-portfolio
// portfolio example: https://mannatthemes.com/selfown/default/index.html
function App() {
  
  return (
    <>
      <div className="portfolio-app">
        <Header />
        <main>
          {/* <About />
          <Projects /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;