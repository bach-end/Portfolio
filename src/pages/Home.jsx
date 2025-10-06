import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    // Get featured projects
    const featured = projectsData.filter(project => project.featured);
    setFeaturedProjects(featured);
  }, []);

  const skills = [
    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'AI/ML', icon: 'fas fa-brain', color: '#ff6b6b' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
    { name: 'Newsletter', icon: 'fas fa-envelope', color: '#4ecdc4' },
    { name: 'Content Strategy', icon: 'fas fa-edit', color: '#f7df1e' }
  ];

  const journeyMilestones = [
    {
      year: 'May 2025',
      title: 'BachEnd Founded',
      description: 'Our team came together with a shared vision of creating exceptional digital experiences, starting as a newsletter organization.',
      icon: 'fas fa-flag-checkered'
    },
    {
      year: 'Aug 2025',
      title: 'First Project Launch',
      description: 'Successfully launched our first newsletter platform, setting the foundation for future growth.',
      icon: 'fas fa-rocket'
    },
    {
      year: 'Dec 2025',
      title: 'Team Expansion',
      description: 'Welcomed new talent and expanded our capabilities into AI-focused initiatives.',
      icon: 'fas fa-users'
    }
  ];

  const getDateParts = (value) => {
    if (!value) {
      return { month: '', year: '' };
    }

    const segments = value.split(' ');
    const year = segments.pop() || '';
    const month = segments.join(' ').trim();

    return {
      month,
      year
    };
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>BachEnd - Our Journey | Full-Stack Development & Design Team</title>
        <meta name="description" content="Our journey in creating beautiful, functional digital experiences." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <motion.div 
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 
                  className="display-4 fw-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  variants={itemVariants}
                >
                  Hi, We're <span className="text-warning">BachEnd</span>
                </motion.h1>
                <motion.h2 
                  className="h4 mb-4 text-light"
                  variants={itemVariants}
                >
                  Full-Stack Development & Design Team
                </motion.h2>
                        <motion.p 
                          className="lead mb-5 text-light"
                          variants={itemVariants}
                        >
                          We are passionate developers and AI enthusiasts creating innovative digital solutions. 
                          Starting as a newsletter organization and evolving into AI-focused initiatives, 
                          we help businesses bring their ideas to life through cutting-edge technology.
                        </motion.p>
                
                <motion.div 
                  className="d-flex flex-wrap justify-content-center gap-3 mb-5"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      as={Link}
                      to="/projects"
                      variant="warning"
                      size="lg"
                      className="fw-medium"
                    >
                      <i className="fas fa-code me-2"></i>
                      View Our Work
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      as={Link}
                      to="/contact"
                      variant="outline-light"
                      size="lg"
                      className="fw-medium"
                    >
                      <i className="fas fa-envelope me-2"></i>
                      Get in Touch
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Skills Icons */}
                <motion.div 
                  className="skills-preview"
                  variants={itemVariants}
                >
                  <h6 className="text-light mb-3">Technologies We Work With</h6>
                  <div className="d-flex flex-wrap justify-content-center gap-4">
                    {skills.map((skill, index) => (
                      <motion.div 
                        key={index} 
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div 
                          className="skill-icon"
                          style={{ color: skill.color }}
                          title={skill.name}
                        >
                          <i className={skill.icon}></i>
                        </div>
                        <small className="text-light">{skill.name}</small>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Journey Timeline */}
      <section className="section-padding animated-bg">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Journey
              </h2>
              <p className="lead text-light">
                Key milestones in our team's growth and achievements
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={8} className="mx-auto">
              <div className="journey-timeline">
                {journeyMilestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="journey-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {(() => {
                      const { month, year } = getDateParts(milestone.year);

                      return (
                        <div className="d-flex align-items-start gap-3">
                          <div className="timeline-date d-flex flex-column align-items-center justify-content-center text-white">
                            {month && <span className="timeline-date-month">{month}</span>}
                            <span className="timeline-date-year">{year}</span>
                          </div>
                          <div>
                            <div className="d-flex align-items-center gap-2 mb-2">
                              {milestone.icon && (
                                <span className="timeline-icon">
                                  <i className={milestone.icon}></i>
                                </span>
                              )}
                              <h5 className="mb-0">{milestone.title}</h5>
                            </div>
                            <p className="text-muted mb-0">{milestone.description}</p>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="display-5 fw-bold mb-3 gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                Featured Projects
              </h2>
              <p className="lead text-muted">
                Here are some of our recent projects that showcase our team's skills and collaborative approach.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {featuredProjects.map((project, index) => (
              <Col key={project.id} lg={4} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              </Col>
            ))}
          </Row>

          <Row className="mt-5">
            <Col className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  as={Link}
                  to="/projects"
                  variant="primary"
                  size="lg"
                  className="fw-medium"
                >
                  <i className="fas fa-th-large me-2"></i>
                  View All Projects
                </Button>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="display-6 fw-bold mb-4 gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                  About Our Team
                </h2>
                        <p className="lead text-muted mb-4">
                          We're passionate developers and AI enthusiasts with over 5 years of combined experience 
                          creating innovative digital solutions. Based in Singapore, we specialize in web development, 
                          AI model training, and content strategy.
                        </p>
                        <p className="text-muted mb-4">
                          Led by visionary founder Jia Wei, our diverse backgrounds and complementary skills allow us to tackle complex projects 
                          with confidence, delivering exceptional results that exceed our clients' expectations.
                        </p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <Badge bg="primary" className="px-3 py-2">
                    <i className="fas fa-users me-1"></i>
                    4 Team Members
                  </Badge>
                  <Badge bg="success" className="px-3 py-2">
                    <i className="fas fa-brain me-1"></i>
                    AI Focused
                  </Badge>
                  <Badge bg="info" className="px-3 py-2">
                    <i className="fas fa-map-marker-alt me-1"></i>
                    Singapore Based
                  </Badge>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    as={Link}
                    to="/about"
                    variant="outline-primary"
                    size="lg"
                    className="fw-medium"
                  >
                    <i className="fas fa-users me-2"></i>
                    Meet Our Team
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://source.unsplash.com/600x400/?team,meeting,collaboration"
                  alt="BachEnd team collaboration"
                  className="img-fluid rounded shadow-lg custom-shadow"
                  style={{ maxWidth: '100%' }}
                  loading="lazy"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding animated-bg text-white">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="display-6 fw-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ready to Work Together?
                </h2>
                <p className="lead mb-4">
                  We're always excited to take on new challenges and help bring 
                  innovative ideas to life. Let's discuss your project!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    as={Link}
                    to="/contact"
                    variant="warning"
                    size="lg"
                    className="fw-medium"
                  >
                    <i className="fas fa-rocket me-2"></i>
                    Let's Start a Conversation
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
