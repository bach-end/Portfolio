import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'hello@bachend.com',
      link: 'mailto:hello@bachend.com',
      description: 'Send us an email anytime'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Available during business hours'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Remote Team',
      link: '#',
      description: 'Distributed across the US'
    },
    {
      icon: 'fas fa-clock',
      title: 'Availability',
      value: 'Mon - Fri, 9AM - 6PM EST',
      link: '#',
      description: 'Eastern Standard Time'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/bachend',
      icon: 'fab fa-linkedin',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/bachend',
      icon: 'fab fa-github',
      color: '#333'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/bachend',
      icon: 'fab fa-twitter',
      color: '#1da1f2'
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/bachend',
      icon: 'fab fa-dribbble',
      color: '#ea4c89'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - BachEnd Team</title>
        <meta name="description" content="Get in touch with the BachEnd team for project collaborations, partnerships, or just to say hello" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding animated-bg text-white">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="display-4 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Get in Touch
                </h1>
                <p className="lead mb-5">
                  We're always excited to take on new challenges and collaborate on 
                  interesting projects. Let's discuss how we can work together!
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding">
        <Container>
          <Row className="g-5">
            {/* Contact Form */}
            <Col lg={8}>
              <ContactForm />
            </Col>

            {/* Contact Information */}
            <Col lg={4}>
              <div className="mb-5">
                <h3 className="h4 mb-4">Let's Connect</h3>
                <p className="text-muted mb-4">
                  Whether you have a project in mind, want to collaborate, or just 
                  want to say hello, I'd love to hear from you!
                </p>

                {/* Contact Info Cards */}
                <div className="mb-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="mb-3 border-0 shadow-sm">
                      <Card.Body className="p-3">
                        <div className="d-flex align-items-center">
                          <div 
                            className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{ width: '45px', height: '45px' }}
                          >
                            <i className={info.icon}></i>
                          </div>
                          <div>
                            <h6 className="mb-1">{info.title}</h6>
                            <a 
                              href={info.link}
                              className="text-decoration-none text-muted"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.value}
                            </a>
                            <br />
                            <small className="text-muted">{info.description}</small>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h5 className="mb-3">Follow Me</h5>
                  <div className="d-flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                        aria-label={`Visit my ${social.name} profile`}
                      >
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{ 
                            width: '50px', 
                            height: '50px',
                            backgroundColor: social.color,
                            transition: 'transform 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        >
                          <i className={`${social.icon} text-white`}></i>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col className="text-center mb-4">
              <h3 className="h4 mb-3">My Location</h3>
              <p className="text-muted">
                Based in San Francisco, CA • Open to remote work and relocation
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col>
              <div className="bg-white rounded shadow-sm p-4">
                <div className="text-center">
                  <i className="fas fa-map-marker-alt text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                  <h5>San Francisco, CA</h5>
                  <p className="text-muted mb-0">
                    Available for both remote and on-site opportunities
                  </p>
                </div>
                
                {/* Embedded Map Placeholder */}
                <div className="mt-4">
                  <div 
                    className="bg-light rounded d-flex align-items-center justify-content-center"
                    style={{ height: '300px' }}
                  >
                    <div className="text-center">
                      <i className="fas fa-map text-muted mb-2" style={{ fontSize: '2rem' }}></i>
                      <p className="text-muted">
                        Interactive map would be embedded here
                        <br />
                        <small>(Replace with actual Google Maps embed)</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
              <p className="lead text-muted">
                Quick answers to common questions
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={8} className="mx-auto">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq1"
                    >
                      What types of projects do you work on?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      I work on a variety of projects including web applications, mobile apps, 
                      data visualization dashboards, e-commerce platforms, and custom software solutions. 
                      I'm particularly interested in projects that solve real-world problems and 
                      have a positive impact.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq2"
                    >
                      What's your typical project timeline?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Project timelines vary depending on scope and complexity. A typical web application 
                      might take 2-6 months, while a mobile app could take 3-8 months. I always provide 
                      detailed project estimates during our initial consultation.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq3"
                    >
                      Do you work with teams or solo?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      I'm comfortable working both independently and as part of a team. I have experience 
                      leading development teams and collaborating with designers, product managers, and 
                      other stakeholders. I adapt my communication style to work effectively with different 
                      team dynamics.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#faq4"
                    >
                      What's your availability for new projects?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      I typically have availability for new projects starting 2-4 weeks out. For urgent 
                      projects or consultations, I can often accommodate shorter timelines. Let's discuss 
                      your timeline during our initial conversation.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
