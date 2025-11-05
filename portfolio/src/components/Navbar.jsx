import React from 'react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
];

const Navbar = () => {
  return (
    <header className="navbar sticky-header">
      <div className="container nav-content">
        
        <div className="nav-logo">
          <a href="#hero">Melissa Abreu</a>
        </div>
    
        <nav className="nav-links-container">
          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:melissa.abreu84@gmail.com" 
              className="cta-button"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
