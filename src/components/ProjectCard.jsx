import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
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

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className="project-card h-100 shadow-sm"
        role="article"
        aria-labelledby={`project-${project.id}-title`}
      >
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={project.thumbnail}
          alt={`${project.title} project thumbnail`}
          loading="lazy"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <Badge 
          bg={getStatusBadgeVariant(project.status)}
          className="position-absolute top-0 end-0 m-2"
        >
          {project.status}
        </Badge>
      </div>
      
      <Card.Body className="d-flex flex-column">
        <div className="mb-3">
          <div className="d-flex align-items-center mb-2">
            <i className={`${getCategoryIcon(project.category)} text-primary me-2`}></i>
            <small className="text-muted">{project.category}</small>
          </div>
          
          <Card.Title 
            id={`project-${project.id}-title`}
            className="h5 mb-2"
          >
            {project.title}
          </Card.Title>
          
          <Card.Text className="text-muted small">
            {project.shortDescription}
          </Card.Text>
        </div>
        
        <div className="mb-3">
          <div className="d-flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge 
                key={tech}
                bg="light" 
                text="dark" 
                className="tech-badge"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge 
                bg="light" 
                text="dark" 
                className="tech-badge"
              >
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
        
        <div className="mt-auto">
          <Button
            as={Link}
            to={`/projects/${project.id}`}
            variant="primary"
            size="sm"
            className="w-100 fw-medium"
            aria-label={`View details for ${project.title} project`}
          >
            <i className="fas fa-eye me-2"></i>
            View Details
          </Button>
        </div>
      </Card.Body>
    </Card>
    </motion.div>
  );
};

export default ProjectCard;
