import React from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const navItems = ['Home', 'Projects', 'Contact'];
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-item ${activeSection === item ? 'active' : ''}`}
            onClick={() => scrollToSection(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;