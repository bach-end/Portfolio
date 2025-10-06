import React, { useState } from 'react';
import { 
  Modal, 
  Tab, 
  Tabs, 
  Row, 
  Col, 
  Badge, 
  Carousel,
  ProgressBar,
  Alert
} from 'react-bootstrap';

const ProjectModal = ({ project, show, onHide }) => {
  const [activeTab, setActiveTab] = useState('details');

  if (!project) return null;

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

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="xl"
      centered
      aria-labelledby={`project-modal-${project.id}`}
      role="dialog"
      aria-modal="true"
    >
      <Modal.Header closeButton>
        <Modal.Title id={`project-modal-${project.id}`}>
          <div className="d-flex align-items-center">
            <img
              src={project.thumbnail}
              alt=""
              className="rounded me-3"
              style={{ width: '40px', height: '40px', objectFit: 'cover' }}
            />
            <div>
              <div className="d-flex align-items-center gap-2">
                <h5 className="mb-0">{project.title}</h5>
                <Badge bg={getStatusBadgeVariant(project.status)}>
                  {project.status}
                </Badge>
              </div>
              <small className="text-muted">{project.category} • {project.duration}</small>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-4"
          id={`project-tabs-${project.id}`}
        >
          {/* Details Tab */}
          <Tab eventKey="details" title="Details">
            <Row>
              <Col lg={8}>
                <div className="mb-4">
                  <h6>Project Overview</h6>
                  <p className="text-muted">{project.description}</p>
                </div>

                <div className="mb-4">
                  <h6>Objectives</h6>
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
                  <h6>Technologies Used</h6>
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
                  <h6>Key Outcomes</h6>
                  {project.details.outcomes.map((outcome, index) => (
                    <Alert key={index} variant="success" className="mb-2">
                      <i className="fas fa-trophy me-2"></i>
                      {outcome}
                    </Alert>
                  ))}
                </div>
              </Col>

              <Col lg={4}>
                <div className="mb-4">
                  <h6>Project Screenshots</h6>
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
                  <h6>Challenges Faced</h6>
                  <ul className="list-unstyled">
                    {project.details.challenges.map((challenge, index) => (
                      <li key={index} className="mb-2">
                        <i className="fas fa-exclamation-triangle text-warning me-2"></i>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Tab>

          {/* Contributions Tab */}
          <Tab eventKey="contributions" title="Contributions">
            <Row>
              <Col lg={8}>
                <div className="mb-4">
                  <h6>My Role</h6>
                  <Alert variant="info">
                    <strong>{project.contributions.role}</strong>
                    <br />
                    <small>Team Size: {project.contributions.teamSize} members</small>
                  </Alert>
                </div>

                <div className="mb-4">
                  <h6>Key Contributions</h6>
                  <ul className="list-unstyled">
                    {project.contributions.myContributions.map((contribution, index) => (
                      <li key={index} className="mb-3">
                        <div className="d-flex align-items-start">
                          <i className="fas fa-star text-warning me-3 mt-1"></i>
                          <span>{contribution}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              <Col lg={4}>
                <div className="mb-4">
                  <h6>Project Timeline</h6>
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
              </Col>
            </Row>
          </Tab>

          {/* About Tab */}
          <Tab eventKey="about" title="About">
            <Row>
              <Col lg={8}>
                <div className="mb-4">
                  <h6>Architecture Overview</h6>
                  <div className="bg-light p-3 rounded">
                    <code>{project.about.architecture}</code>
                  </div>
                </div>

                <div className="mb-4">
                  <h6>Case Study</h6>
                  <p className="text-muted">{project.about.caseStudy}</p>
                </div>

                <div className="mb-4">
                  <h6>Lessons Learned</h6>
                  <ul className="list-unstyled">
                    {project.about.lessonsLearned.map((lesson, index) => (
                      <li key={index} className="mb-2">
                        <i className="fas fa-lightbulb text-warning me-2"></i>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              <Col lg={4}>
                <div className="mb-4">
                  <h6>Project Links</h6>
                  <div className="d-grid gap-2">
                    {project.about.githubUrl && (
                      <a
                        href={project.about.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark"
                        aria-label="View source code on GitHub"
                      >
                        <i className="fab fa-github me-2"></i>
                        View Source Code
                      </a>
                    )}
                    
                    {project.about.liveDemo && (
                      <a
                        href={project.about.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                        aria-label="View live demo"
                      >
                        <i className="fas fa-external-link-alt me-2"></i>
                        Live Demo
                      </a>
                    )}

                    {project.about.appStoreUrl && (
                      <a
                        href={project.about.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-success"
                        aria-label="Download from App Store"
                      >
                        <i className="fab fa-apple me-2"></i>
                        App Store
                      </a>
                    )}

                    {project.about.playStoreUrl && (
                      <a
                        href={project.about.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-success"
                        aria-label="Download from Play Store"
                      >
                        <i className="fab fa-google-play me-2"></i>
                        Play Store
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h6>Privacy & Analytics</h6>
                  <Alert variant="light" className="small">
                    <i className="fas fa-shield-alt me-2"></i>
                    This project uses anonymized analytics and respects user privacy. 
                    No personal data is collected without explicit consent.
                  </Alert>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
