import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, Carousel, ProgressBar } from 'react-bootstrap';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const getStatusBadgeVariant = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'in progress':
        return 'warning';
      case 'planned':
        return 'info';
      default:
        return 'secondary';
    }
  };

  const getProgressPercentage = (timeline) => {
    const completed = timeline.filter(phase => phase.completed).length;
    return Math.round((completed / timeline.length) * 100);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <>
      <Helmet>
        <title>{project.title} - BachEnd Portfolio</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {/* Hero Section */}
        <section className="section-padding animated-bg text-white">
          <Container>
            <Row className="mb-4">
              <Col>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Button
                    as={Link}
                    to="/projects"
                    variant="outline-light"
                    size="sm"
                    className="mb-4"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back to Projects
                  </Button>
                </motion.div>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col lg={8}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <Badge bg={getStatusBadgeVariant(project.status)} className="me-3">
                      {project.status}
                    </Badge>
                    <small className="text-light">{project.category} • {project.duration}</small>
                  </div>
                  
                  <h1 
                    className="display-4 fw-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.title}
                  </h1>
                  
                  <p className="lead text-light mb-4">
                    {project.description}
                  </p>
                </motion.div>
              </Col>
              
              <Col lg={4}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded shadow-lg"
                    style={{ maxHeight: '300px', objectFit: 'cover' }}
                  />
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Project Details */}
        <section className="section-padding">
          <Container>
            <Tabs
              defaultActiveKey="details"
              id="project-tabs"
              className="mb-4"
            >
              {/* Details Tab */}
              <Tab eventKey="details" title="Details">
                <Row className="mt-4">
                  <Col lg={8}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="mb-4">
                        <h4>Project Overview</h4>
                        <p className="text-muted">{project.description}</p>
                      </div>

                      <div className="mb-4">
                        <h5>Objectives</h5>
                        <ul className="list-unstyled">
                          {project.details.objectives.map((objective, index) => (
                            <li key={index} className="mb-2">
                              <i className="fas fa-check-circle text-success me-2"></i>
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h5>Technologies Used</h5>
                        <div className="d-flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} bg="primary" className="px-3 py-2">
                              <i className="fas fa-code me-1"></i>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5>Key Outcomes</h5>
                        {project.details.outcomes.map((outcome, index) => (
                          <Alert key={index} variant="success" className="mb-2">
                            <i className="fas fa-trophy me-2"></i>
                            {outcome}
                          </Alert>
                        ))}
                      </div>
                    </motion.div>
                  </Col>

                  <Col lg={4}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="mb-4">
                        <h5>Project Screenshots</h5>
                        <Carousel fade>
                          {project.details.screenshots.map((screenshot, index) => (
                            <Carousel.Item key={index}>
                              <img
                                className="d-block w-100 rounded"
                                src={screenshot}
                                alt={`${project.title} screenshot ${index + 1}`}
                                style={{ height: '250px', objectFit: 'cover' }}
                              />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      </div>

                      <div className="mb-4">
                        <h5>Challenges Faced</h5>
                        <ul className="list-unstyled">
                          {project.details.challenges.map((challenge, index) => (
                            <li key={index} className="mb-2">
                              <i className="fas fa-exclamation-triangle text-warning me-2"></i>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </Col>
                </Row>
              </Tab>

              {/* Contributions Tab */}
              <Tab eventKey="contributions" title="Contributions">
                <Row className="mt-4">
                  <Col lg={8}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="mb-4">
                        <h4>Team Collaboration</h4>
                        <Alert variant="info">
                          <strong>{project.contributions.role}</strong>
                          <br />
                          <small>Team Size: {project.contributions.teamSize} members</small>
                        </Alert>
                      </div>

                      <div className="mb-4">
                        <h5>Team Contributions</h5>
                        <ul className="list-unstyled">
                          {project.contributions.teamContributions.map((contribution, index) => (
                            <li key={index} className="mb-3">
                              <div className="d-flex align-items-start">
                                <i className="fas fa-star text-warning me-3 mt-1"></i>
                                <span>{contribution}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </Col>

                  <Col lg={4}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="mb-4">
                        <h5>Project Timeline</h5>
                        <div className="mb-3">
                          <div className="d-flex justify-content-between mb-1">
                            <small>Progress</small>
                            <small>{getProgressPercentage(project.contributions.timeline)}%</small>
                          </div>
                          <ProgressBar 
                            now={getProgressPercentage(project.contributions.timeline)}
                            variant="primary"
                          />
                        </div>
                        
                        <div className="timeline">
                          {project.contributions.timeline.map((phase, index) => (
                            <div key={index} className="mb-3">
                              <div className="d-flex align-items-center">
                                <i className={`fas fa-circle me-2 ${
                                  phase.completed ? 'text-success' : 'text-secondary'
                                }`}></i>
                                <div>
                                  <div className="fw-bold small">{phase.phase}</div>
                                  <small className="text-muted">{phase.duration}</small>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                </Row>
              </Tab>

              {/* About Tab */}
              <Tab eventKey="about" title="About">
                <Row className="mt-4">
                  <Col lg={8}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="mb-4">
                        <h4>Architecture Overview</h4>
                        <div className="bg-light p-3 rounded">
                          <code>{project.about.architecture}</code>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5>Case Study</h5>
                        <p className="text-muted">{project.about.caseStudy}</p>
                      </div>

                      <div className="mb-4">
                        <h5>Lessons Learned</h5>
                        <ul className="list-unstyled">
                          {project.about.lessonsLearned.map((lesson, index) => (
                            <li key={index} className="mb-2">
                              <i className="fas fa-lightbulb text-warning me-2"></i>
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </Col>

                  <Col lg={4}>
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="mb-4">
                        <h5>Project Links</h5>
                        <div className="d-grid gap-2">
                          {project.about.githubUrl && (
                            <Button
                              as="a"
                              href={project.about.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="outline-dark"
                              className="fw-medium"
                            >
                              <i className="fab fa-github me-2"></i>
                              View Source Code
                            </Button>
                          )}
                          
                          {project.about.liveDemo && (
                            <Button
                              as="a"
                              href={project.about.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="outline-primary"
                              className="fw-medium"
                            >
                              <i className="fas fa-external-link-alt me-2"></i>
                              Live Demo
                            </Button>
                          )}

                          {project.about.appStoreUrl && (
                            <Button
                              as="a"
                              href={project.about.appStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="outline-success"
                              className="fw-medium"
                            >
                              <i className="fab fa-apple me-2"></i>
                              App Store
                            </Button>
                          )}

                          {project.about.playStoreUrl && (
                            <Button
                              as="a"
                              href={project.about.playStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="outline-success"
                              className="fw-medium"
                            >
                              <i className="fab fa-google-play me-2"></i>
                              Play Store
                            </Button>
                          )}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5>Privacy & Analytics</h5>
                        <Alert variant="light" className="small">
                          <i className="fas fa-shield-alt me-2"></i>
                          This project uses anonymized analytics and respects user privacy. 
                          No personal data is collected without explicit consent.
                        </Alert>
                      </div>
                    </motion.div>
                  </Col>
                </Row>
              </Tab>
            </Tabs>
          </Container>
        </section>
      </motion.div>
    </>
  );
};

export default ProjectDetail;
