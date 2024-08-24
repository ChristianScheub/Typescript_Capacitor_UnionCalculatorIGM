import React from 'react';
import { FaHome, FaBriefcase, FaUniversity } from 'react-icons/fa';
import { NavbarProps } from './NavbarProps';

const Navbar: React.FC<NavbarProps> = ({ setActiveComponent, activeComponent }) => {
  const getColor = (component: string) => (activeComponent === component ? '#d3d3d3' : '#ffffff');

  return (
    <div style={styles.navbar}>
      <div style={styles.icon} onClick={() => setActiveComponent("home")}>
        <FaHome size={30} color={getColor("home")} />
      </div>
      <div style={styles.icon} onClick={() => setActiveComponent("salary")}>
        <FaBriefcase size={30} color={getColor("salary")} />
      </div>
      <div style={styles.icon} onClick={() => setActiveComponent("government")}>
        <FaUniversity size={30} color={getColor("government")} />
      </div>
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
    position: 'fixed' as 'fixed', // Fixiert die Navbar
    bottom: 0, // Positioniert die Navbar am unteren Rand des Viewports
    left: 0, // Setzt die Navbar an den linken Rand
    zIndex: 1000, // Stellt sicher, dass die Navbar über anderen Inhalten liegt
  },

  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default Navbar;