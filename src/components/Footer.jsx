import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/bachend',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/bachend',
      icon: 'fab fa-github'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/bachend',
      icon: 'fab fa-twitter'
    },
    {
      name: 'Email',
      url: 'mailto:hello@bachend.com',
      icon: 'fas fa-envelope'
    }
  ];

  return (
    <footer className="footer mt-5">
      <Container>
        <Row className="py-4">
          <Col md={4} className="mb-4">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.path} className="mb-2">
                  <Link
                    to={link.path}
                    className="text-light text-decoration-none"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5 className="text-white mb-3">Connect With Us</h5>
            <div className="d-flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light fs-4"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5 className="text-white mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/privacy"
                  className="text-light text-decoration-none"
                  aria-label="View privacy policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <small className="text-muted">
                  All rights reserved © {currentYear}
                </small>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0 text-muted">
              © {currentYear} BachEnd. Built with React & Bootstrap.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0 text-muted">
              Made with ❤️ for the web
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
