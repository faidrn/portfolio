import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div>
        <h1>Fredy Izquierdo</h1>
        </div>
        <a href='#' className='navbar-toggler'>
          <span className='navbar-toggle-icon'>icono hambuerguesa</span>
        </a>
        <div className='collapse navbar-collapse' id='navbar-menus'>
          <ul className='navbar-menus-list'>
            <li className='nav-item'>
              <a href="#home" className='nav-link active'>Home</a>
            </li>
            <li className='nav-item'>
              <a href="#about" className='nav-link'>About</a>
            </li>
            <li className='nav-item'>
              <a href="#projects" className='nav-link'>Projects</a>
            </li>
            <li className='nav-item'>
              <a href="#contact" className='nav-link'>Contact</a>
            </li>
            <li className='nav-item'>
              <a href="#resume" className='nav-link resume'>Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;