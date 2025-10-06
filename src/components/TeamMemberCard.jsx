import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const TeamMemberCard = ({ member }) => {
  if (!member) return null;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="team-card h-100 text-center border-0">
        <Card.Body className="p-4">
          <div className="mb-4">
            <img
              src={member.image}
              alt={`${member.name} portrait`}
              className="team-photo mx-auto"
              loading="lazy"
            />
          </div>
          
          <h5 className="mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            {member.name}
          </h5>
          
          <p className="text-primary fw-medium mb-3">
            {member.role}
          </p>
          
          <p className="text-muted small mb-4">
            {member.bio}
          </p>
          
          <div className="mb-4">
            <div className="d-flex flex-wrap justify-content-center gap-1">
              {member.skills.map((skill, index) => (
                <span
                  key={index}
                  className="badge bg-light text-dark small px-2 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="d-flex justify-content-center gap-3">
            {member.social.linkedin && (
              <motion.a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Visit ${member.name}'s LinkedIn`}
              >
                <i className="fab fa-linkedin fs-5"></i>
              </motion.a>
            )}
            
            {member.social.github && (
              <motion.a
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Visit ${member.name}'s GitHub`}
              >
                <i className="fab fa-github fs-5"></i>
              </motion.a>
            )}
            
            {member.social.twitter && (
              <motion.a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-info"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Visit ${member.name}'s Twitter`}
              >
                <i className="fab fa-twitter fs-5"></i>
              </motion.a>
            )}
            
            {member.social.dribbble && (
              <motion.a
                href={member.social.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Visit ${member.name}'s Dribbble`}
              >
                <i className="fab fa-dribbble fs-5"></i>
              </motion.a>
            )}
          </div>
          
          <div className="mt-3 pt-3 border-top">
            <small className="text-muted">
              <i className="fas fa-map-marker-alt me-1"></i>
              {member.location} • {member.experience} experience
            </small>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;
