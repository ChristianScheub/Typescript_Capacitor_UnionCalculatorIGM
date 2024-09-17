import React, { useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaCog, FaTable, FaArrowLeft } from 'react-icons/fa';
import './Navbar.css';
import { Navbar } from "react-bootstrap";

interface NavbarViewProps {
  setActiveComponent: (component: string) => void;
  activeComponent: string;
}

const NavbarView: React.FC<NavbarViewProps> = ({ setActiveComponent, activeComponent }) => {
  const location = useLocation();
  const navigate = useNavigate();

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

  const getColor = (component: string) => (activeComponent === component ? '#66B0B0' : '#ffffff');

  return (
    <Navbar
    variant="dark"
    className="navbarElement width100 shadow"
  >
    <div className="navbarContainer">
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
    </Navbar>
  );
};

export default NavbarView;