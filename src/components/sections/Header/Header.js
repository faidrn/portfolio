import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import './Header.css';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  // Efecto para detectar cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Cerrar el menú si cambiamos a vista desktop
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    // Establecer el item activo basado en la ruta actual
    /* const currentPath = window.location.pathname;
    setActiveItem(currentPath); */

    // Verificar al montar el componente
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path) => {
    setActiveItem(path);
    if (isMobile){
      setIsOpen(false);
    }
  };

  // Lista de items del menú
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const RESUME_URL = "https://www.linkedin.com/in/fredy-izquierdo-897740344/";

  return (
    <header className="header">
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo'>
            <Link to={'/'} className='nav-links'>
              <h1>Fredy Izquierdo</h1>
            </Link>
          </div>
          
          {/* Menú para desktop (siempre visible en pantallas grandes) */}
          <div 
            className="navbar-links" 
            style={{ display: !isMobile ? 'flex' : 'none' }}
          >
            <ul>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={activeItem === item.path ? 'active' : ''} 
                    onClick={() => handleItemClick(item.path)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Button 
                  text="Resume" 
                  className="resume cursor-pointer"
                  onClick={() => {
                    window.open(RESUME_URL, '_blank', 'noopener, noreferrer')
                  }} 
                />
              </li>
            </ul>
          </div>

          {/* Botón hamburguesa solo móvil */}
          {isMobile && (
            <button
              className={`hamburger ${isOpen ? 'hamburger-open' : ''}`}
              onClick={toggleMenu}
              aria-label='Menú'
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>

        {/* Menú desplegable para móvil */}
        {isMobile && (
          <div 
            className="mobile-menu" 
            style={{ maxHeight: isOpen ? '500px' : '0' }}
          >
            <ul>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={activeItem === item.path ? 'active' : ''} 
                    onClick={() => handleItemClick(item.path)}
                  >
                      {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Button 
                  text="Resume" 
                  className="resume cursor-pointer"
                  onClick={() => {
                    window.open(RESUME_URL, '_blank', 'noopener, noreferrer')
                  }} 
                />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;