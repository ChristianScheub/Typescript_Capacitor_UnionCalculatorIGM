import React, { useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaCog, FaTable, FaArrowLeft } from 'react-icons/fa';
import './Navbar.css'; // Importiere die CSS-Datei

interface NavbarProps {
  setActiveComponent: (component: string) => void;
  activeComponent: string;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveComponent, activeComponent }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // useMemo für navLinks
  const navLinks = useMemo(() => [
    { path: '/', component: 'home', icon: <FaHome size={30} />, key: 'home' },
    { path: '/tables', component: 'tables', icon: <FaTable size={30} />, key: 'tables' },
    { path: '/info', component: 'info', icon: <FaCog size={30} />, key: 'info' }
  ], []);

  React.useEffect(() => {
    const pathToComponentMap: Record<string, string> = {
      '/': 'home',
      '/tables': 'tables',
      '/government': 'info',
      '/salary': 'info',
      '/info': 'info',
      '/impressum': 'info',
      '/datenschutz': 'info',
    };
    setActiveComponent(pathToComponentMap[location.pathname] || 'home');
  }, [location, setActiveComponent]);

  const getColor = (component: string) => (activeComponent === component ? '#d3d3d3' : '#ffffff');

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!location.pathname.includes('Start')) {
        const currentIndex = navLinks.findIndex(link => link.component === activeComponent);
        
        if (event.key === 'ArrowLeft' && currentIndex > 0) {
          // Move to the previous link
          const previousLink = navLinks[currentIndex - 1];
          setActiveComponent(previousLink.component);
          navigate(previousLink.path);
        } else if (event.key === 'ArrowRight' && currentIndex < navLinks.length - 1) {
          // Move to the next link
          const nextLink = navLinks[currentIndex + 1];
          setActiveComponent(nextLink.component);
          navigate(nextLink.path);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeComponent, location, navigate, setActiveComponent, navLinks]); // useMemo prevents navLinks from causing issues

  return (
    <div className="navbar">
      {location.pathname.includes('Start') && (
        <Link to="/" className="icon" onClick={() => navigate(-1)}>
          <FaArrowLeft size={30} color={"#ffffff"} />
        </Link>
      )}
      {!location.pathname.includes('Start') && (
        <>
          {navLinks.map((link) => (
            <Link
              to={link.path}
              className="icon"
              onClick={() => setActiveComponent(link.component)}
              key={link.key}
            >
              {React.cloneElement(link.icon, { color: getColor(link.component) })}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Navbar;