import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import TeamMemberCard from '../components/TeamMemberCard';
import teamData from '../data/team.json';

const About = () => {
  const experience = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Co.',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and collaborated with design teams.',
      technologies: ['React', 'Vue.js', 'TypeScript', 'SASS']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Built web applications and learned modern development practices.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'PHP']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      year: '2019',
      description: 'Graduated with honors, focused on software engineering and web development.'
    },
    {
      degree: 'AWS Certified Solutions Architect',
      school: 'Amazon Web Services',
      year: '2022',
      description: 'Certified in designing and deploying scalable systems on AWS.'
    }
  ];

  const skills = {
    frontend: ['React', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'SASS', 'Bootstrap'],
    backend: ['Node.js', 'Python', 'PHP', 'Express.js', 'Django', 'Laravel'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    tools: ['Git', 'Docker', 'AWS', 'Azure', 'VS Code', 'Figma', 'Photoshop'],
    mobile: ['React Native', 'Flutter', 'Ionic', 'PWA']
  };

  const achievements = [
    {
      icon: 'fas fa-trophy',
      title: 'Best Project Award 2023',
      description: 'Recognized for innovative e-commerce solution'
    },
    {
      icon: 'fas fa-users',
      title: 'Team Leadership',
      description: 'Led 5+ successful project deliveries'
    },
    {
      icon: 'fas fa-code',
      title: 'Open Source Contributor',
      description: 'Active contributor to 10+ repositories'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Performance Optimization',
      description: 'Improved app performance by 40%+'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - BachEnd Team</title>
        <meta name="description" content="Meet the BachEnd team - passionate developers and designers creating exceptional digital experiences" />
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
                <h1 
                  className="display-4 fw-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  About Our Team
                </h1>
                <p className="lead mb-5">
                  We're a passionate team of developers and designers with a shared vision 
                  of creating exceptional digital experiences that make a difference.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Mission Section */}
      <section className="section-padding bg-light">
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
                  Our Mission
                </h2>
                <p className="lead text-muted mb-4">
                  We are a passionate team of developers and AI enthusiasts with over 5 years of combined experience creating innovative digital solutions. Based in Singapore, our diverse crew includes experts in web development, AI model training, and content strategy.
                </p>
                <p className="text-muted mb-4">
                  Led by visionary founder Jia Wei, we thrive on collaboration and cutting-edge technology to deliver impactful results for our clients. Our journey began as a newsletter organization and has evolved into AI-focused initiatives.
                </p>
                <p className="text-muted mb-4">
                  We're committed to continuous learning, staying current with the latest 
                  technologies, and sharing knowledge within our team and the broader 
                  developer community.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => {
                      const teamSection = document.getElementById('team-members');
                      if (teamSection) {
                        teamSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
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
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://source.unsplash.com/600x400/?team,office,meeting"
                  alt="BachEnd team working together"
                  className="img-fluid rounded shadow-lg custom-shadow"
                  loading="lazy"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Members Section */}
      <section id="team-members" className="section-padding">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold mb-3 gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                Meet Our Team
              </h2>
              <p className="lead text-muted">
                The talented individuals behind BachEnd's success
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {teamData.map((member, index) => (
              <Col key={member.id} lg={3} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard member={member} />
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Experience Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold mb-3 gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Journey
              </h2>
              <p className="lead text-muted">
                Key milestones in our team's growth and development
              </p>
            </Col>
          </Row>

          <Row>
            {experience.map((job, index) => (
              <Col key={index} lg={4} md={6} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-100 shadow-sm team-card">
                    <Card.Body>
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                             style={{ width: '50px', height: '50px' }}>
                          <i className="fas fa-briefcase"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">{job.title}</h5>
                          <small className="text-muted">{job.company}</small>
                        </div>
                      </div>
                      
                      <Badge bg="light" text="dark" className="mb-3">
                        {job.period}
                      </Badge>
                      
                      <p className="text-muted small mb-3">{job.description}</p>
                      
                      <div className="d-flex flex-wrap gap-1">
                        {job.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} bg="primary" className="small">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold mb-3 gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Expertise
              </h2>
              <p className="lead text-muted">
                Technologies and tools our team specializes in
              </p>
            </Col>
          </Row>

          <Row>
            {Object.entries(skills).map(([category, skillList]) => (
              <Col key={category} lg={4} md={6} className="mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: Object.keys(skills).indexOf(category) * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-100 team-card">
                    <Card.Body>
                      <h5 className="text-capitalize mb-3">{category}</h5>
                      <div className="d-flex flex-wrap gap-2">
                        {skillList.map((skill, index) => (
                          <Badge key={index} bg="primary" className="px-3 py-2">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold mb-3">Education & Certifications</h2>
              <p className="lead text-muted">
                My educational background and professional certifications
              </p>
            </Col>
          </Row>

          <Row>
            {education.map((edu, index) => (
              <Col key={index} lg={6} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <div className="d-flex align-items-start">
                      <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                           style={{ width: '50px', height: '50px' }}>
                        <i className="fas fa-graduation-cap"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">{edu.degree}</h5>
                        <p className="text-muted mb-2">{edu.school} • {edu.year}</p>
                        <p className="small text-muted">{edu.description}</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold mb-3">Achievements & Recognition</h2>
              <p className="lead text-muted">
                Some highlights from my career journey
              </p>
            </Col>
          </Row>

          <Row>
            {achievements.map((achievement, index) => (
              <Col key={index} lg={3} md={6} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Body>
                    <div className="mb-3">
                      <i className={`${achievement.icon} text-primary`} style={{ fontSize: '2rem' }}></i>
                    </div>
                    <h6 className="mb-2">{achievement.title}</h6>
                    <p className="small text-muted">{achievement.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-5 fw-bold mb-3 gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
                Our Values
              </h2>
              <p className="lead text-muted">
                The principles that guide our team's work and collaboration
              </p>
            </Col>
          </Row>

          <Row>
            <Col lg={4} className="mb-4">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-code" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5>Quality Code</h5>
                <p className="text-muted">
                  We believe in writing clean, maintainable, and well-documented code 
                  that stands the test of time and serves our clients well.
                </p>
              </motion.div>
            </Col>
            
            <Col lg={4} className="mb-4">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-users" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5>User-Centered</h5>
                <p className="text-muted">
                  Every decision we make is guided by the end user's needs and 
                  the value we can provide to them through thoughtful design.
                </p>
              </motion.div>
            </Col>
            
            <Col lg={4} className="mb-4">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-lightbulb" style={{ fontSize: '2rem' }}></i>
                </div>
                <h5>Continuous Learning</h5>
                <p className="text-muted">
                  Technology evolves rapidly, and we're committed to staying 
                  current with the latest trends and sharing knowledge within our team.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
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
                  Ready to Work With Us?
                </h2>
                <p className="lead mb-4">
                  Let's collaborate on your next project and create something amazing together.
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
                    <i className="fas fa-handshake me-2"></i>
                    Start a Project
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

export default About;
