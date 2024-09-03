import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBriefcase, FaUniversity, FaInfoCircle } from 'react-icons/fa';

interface NavbarProps {
  setActiveComponent: (component: string) => void;
  activeComponent: string;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveComponent, activeComponent }) => {
  const location = useLocation(); // Hook to get the current location

  React.useEffect(() => {
    // Set active component based on the current route
    const pathToComponentMap: Record<string, string> = {
      '/': 'home',
      '/salary': 'salary',
      '/government': 'government',
      '/info': 'info',
      '/impressum': 'info',
      '/datenschutz': 'info',
    };
    setActiveComponent(pathToComponentMap[location.pathname] || 'home');
  }, [location, setActiveComponent]);

  const getColor = (component: string) => (activeComponent === component ? '#d3d3d3' : '#ffffff');

  return (
    <div style={styles.navbar}>
      <Link to="/" style={styles.icon} onClick={() => setActiveComponent("home")}>
        <FaHome size={30} color={getColor("home")} />
      </Link>
      <Link to="/salary" style={styles.icon} onClick={() => setActiveComponent("salary")}>
        <FaBriefcase size={30} color={getColor("salary")} />
      </Link>
      <Link to="/government" style={styles.icon} onClick={() => setActiveComponent("government")}>
        <FaUniversity size={30} color={getColor("government")} />
      </Link>
      <Link to="/info" style={styles.icon} onClick={() => setActiveComponent("info")}>
        <FaInfoCircle size={30} color={getColor("info")} />
      </Link>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '13vw',
    width: '100%',
    backgroundColor: '#66B0B0',
    borderTop: '1px solid #ddd',
    position: 'fixed' as 'fixed',
    bottom: 0,
    left: 0,
    zIndex: 1000,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#ffffff',
  }
};

export default Navbar;