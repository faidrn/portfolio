import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Mi Portafolio</h1>
      <nav>
        <a href="#about">Sobre mí</a>
        <a href="#projects">Proyectos</a>
      </nav>
    </header>
  );
};

export default Header;