import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Helmet>
        <title>BachEnd - Our Journey | Full-Stack Development & Design Team</title>
        <meta name="description" content="Our journey in creating beautiful, functional digital experiences." />
      </Helmet>
      
      <Navbar 
        expand="lg" 
        fixed="top" 
        className={`${isScrolled ? 'navbar-scrolled' : ''}`}
        variant={isScrolled ? 'light' : 'dark'}
        bg={isScrolled ? 'light' : 'transparent'}
      >
        <Container>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Navbar.Brand 
              as={Link}
              to="/"
              className="fw-bold d-flex align-items-center"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem'
              }}
            >
              <i className="fas fa-bolt text-warning me-2"></i>
              BachEnd
            </Navbar.Brand>
          </motion.div>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.path}
                  as={Link}
                  to={item.path}
                  className={`mx-2 fw-medium ${
                    isActive(item.path) ? 'active' : ''
                  }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
            
            <div className="ms-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  as={Link}
                  to="/contact"
                  variant="warning" 
                  size="sm"
                  className="fw-medium"
                  aria-label="Get in touch"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
