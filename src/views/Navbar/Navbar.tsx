import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCog, FaTable } from 'react-icons/fa';
import './Navbar.css'; // Importiere die CSS-Datei

interface NavbarProps {
  setActiveComponent: (component: string) => void;
  activeComponent: string;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveComponent, activeComponent }) => {
  const location = useLocation();

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

  return (
    <div className="navbar">
      <Link to="/" className="icon" onClick={() => setActiveComponent("home")}>
        <FaHome size={30} color={getColor("home")} />
      </Link>
      <Link to="/tables" className="icon" onClick={() => setActiveComponent("tables")}>
        <FaTable size={30} color={getColor("tables")} />
      </Link>
      <Link to="/info" className="icon" onClick={() => setActiveComponent("info")}>
        <FaCog size={30} color={getColor("info")} />
      </Link>
    </div>
  );
};

export default Navbar;