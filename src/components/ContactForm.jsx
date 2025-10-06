import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log form data to console (replace with actual submission)
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="contact-form">
      <h4 className="mb-4">Get in Touch</h4>
      
      {submitStatus === 'success' && (
        <Alert variant="success" className="mb-4">
          <i className="fas fa-check-circle me-2"></i>
          Thank you for your message! I'll get back to you as soon as possible.
        </Alert>
      )}

      {submitStatus === 'error' && (
        <Alert variant="danger" className="mb-4">
          <i className="fas fa-exclamation-triangle me-2"></i>
          Sorry, there was an error sending your message. Please try again.
        </Alert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                aria-describedby="name-help"
              />
              <Form.Text id="name-help" className="text-muted">
                Please enter your full name
              </Form.Text>
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                aria-describedby="email-help"
              />
              <Form.Text id="email-help" className="text-muted">
                I'll use this to respond to your message
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="subject">Subject</Form.Label>
          <Form.Control
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            aria-describedby="subject-help"
          />
          <Form.Text id="subject-help" className="text-muted">
            Optional: Brief description of your inquiry
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label htmlFor="message">
            Message <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or just say hello..."
            rows={5}
            required
            aria-describedby="message-help"
          />
          <Form.Text id="message-help" className="text-muted">
            Please provide details about your project or inquiry
          </Form.Text>
        </Form.Group>

        <div className="d-grid">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={!isFormValid || isSubmitting}
            aria-describedby="submit-help"
          >
            {isSubmitting ? (
              <>
                <span className="loading me-2" aria-hidden="true"></span>
                Sending...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane me-2"></i>
                Send Message
              </>
            )}
          </Button>
          <Form.Text id="submit-help" className="text-muted text-center mt-2">
            I typically respond within 24 hours
          </Form.Text>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
