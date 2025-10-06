import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (filter !== 'all') {
      filtered = filtered.filter(project => 
        project.category.toLowerCase().includes(filter.toLowerCase())
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    setFilteredProjects(filtered);
  }, [projects, filter, searchTerm]);


  const categories = ['all', 'Web Application', 'Mobile Application', 'Data Visualization'];
  const statuses = ['Completed', 'In Progress', 'Planned'];

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'web application':
        return 'fas fa-globe';
      case 'mobile application':
        return 'fas fa-mobile-alt';
      case 'data visualization':
        return 'fas fa-chart-bar';
      default:
        return 'fas fa-code';
    }
  };

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

  const projectStats = {
    total: projects.length,
    completed: projects.filter(p => p.status.toLowerCase() === 'completed').length,
    inProgress: projects.filter(p => p.status.toLowerCase() === 'in progress').length,
    technologies: [...new Set(projects.flatMap(p => p.technologies))].length
  };

  return (
    <>
      <Helmet>
        <title>Projects - BachEnd Team</title>
        <meta name="description" content="Explore our portfolio of collaborative web applications, mobile apps, and data visualization projects" />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="display-4 fw-bold mb-4 gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Our Projects
                </h1>
                <p className="lead text-muted mb-5">
                  A collection of projects that showcase our team's collaborative approach to 
                  full-stack development, mobile applications, and data visualization.
                </p>
              </motion.div>
            </Col>
          </Row>

              {/* Project Stats */}
              <Row className="g-4 mb-5">
                <Col md={3} sm={6}>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-primary fw-bold">{projectStats.total}</h3>
                    <p className="text-muted mb-0">Total Projects</p>
                  </motion.div>
                </Col>
                <Col md={3} sm={6}>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-success fw-bold">{projectStats.completed}</h3>
                    <p className="text-muted mb-0">Completed</p>
                  </motion.div>
                </Col>
                <Col md={3} sm={6}>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-warning fw-bold">{projectStats.inProgress}</h3>
                    <p className="text-muted mb-0">In Progress</p>
                  </motion.div>
                </Col>
                <Col md={3} sm={6}>
                  <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-info fw-bold">{projectStats.technologies}</h3>
                    <p className="text-muted mb-0">Technologies</p>
                  </motion.div>
                </Col>
              </Row>
        </Container>
      </section>

      {/* Filters Section */}
      <section className="py-4 border-bottom">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <div className="d-flex flex-wrap align-items-center gap-3">
                <span className="text-muted">Filter by:</span>
                
                {/* Category Filter */}
                <div className="d-flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={filter === category ? 'primary' : 'outline-primary'}
                      size="sm"
                      onClick={() => setFilter(category)}
                      className="text-capitalize"
                    >
                      <i className={`${getCategoryIcon(category)} me-1`}></i>
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </Col>
            
            <Col lg={4}>
              <Form.Control
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-100"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <Container>
          {filteredProjects.length === 0 ? (
            <Row>
              <Col className="text-center">
                <div className="py-5">
                  <i className="fas fa-search text-muted" style={{ fontSize: '4rem' }}></i>
                  <h4 className="mt-3 text-muted">No projects found</h4>
                  <p className="text-muted">
                    Try adjusting your search criteria or browse all projects.
                  </p>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setFilter('all');
                      setSearchTerm('');
                    }}
                  >
                    Show All Projects
                  </Button>
                </div>
              </Col>
            </Row>
          ) : (
            <>
              <Row className="mb-4">
                <Col>
                  <p className="text-muted mb-0">
                    Showing {filteredProjects.length} of {projects.length} projects
                  </p>
                </Col>
              </Row>

              <Row className="g-4">
                {filteredProjects.map((project, index) => (
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
            </>
          )}
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold mb-3">Technologies I Use</h2>
              <p className="lead text-muted">
                A comprehensive list of technologies and tools in my toolkit
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fab fa-react" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5>Frontend</h5>
                <div className="d-flex flex-wrap justify-content-center gap-1">
                  {['React', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3'].map((tech) => (
                    <Badge key={tech} bg="light" text="dark" className="small">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fab fa-node-js" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5>Backend</h5>
                <div className="d-flex flex-wrap justify-content-center gap-1">
                  {['Node.js', 'Python', 'Express.js', 'Django', 'MongoDB'].map((tech) => (
                    <Badge key={tech} bg="light" text="dark" className="small">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-mobile-alt" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5>Mobile</h5>
                <div className="d-flex flex-wrap justify-content-center gap-1">
                  {['React Native', 'Flutter', 'Ionic', 'PWA'].map((tech) => (
                    <Badge key={tech} bg="light" text="dark" className="small">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} className="mb-4">
              <div className="text-center">
                <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-cloud" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5>Cloud & Tools</h5>
                <div className="d-flex flex-wrap justify-content-center gap-1">
                  {['AWS', 'Docker', 'Git', 'Figma'].map((tech) => (
                    <Badge key={tech} bg="light" text="dark" className="small">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Projects;
