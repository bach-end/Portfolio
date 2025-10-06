import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - BachEnd Team</title>
        <meta name="description" content="Privacy policy for BachEnd team portfolio website, covering data collection and usage practices" />
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
                  Privacy Policy
                </h1>
                <p className="lead mb-5">
                  Your privacy is important to us. This policy explains how we collect, 
                  use, and protect your information.
                </p>
                <p className="text-light">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="privacy-content">
                <Card className="mb-4">
                  <Card.Body>
                    <h3 className="h5 mb-3">
                      <i className="fas fa-info-circle text-primary me-2"></i>
                      Information I Collect
                    </h3>
                    <p className="text-muted">
                      When you visit my portfolio website, I may collect certain information automatically, 
                      including your IP address, browser type, operating system, and pages you visit. 
                      If you choose to contact me through the contact form, I collect the information you 
                      provide, such as your name, email address, and message.
                    </p>
                  </Card.Body>
                </Card>

                <Card className="mb-4">
                  <Card.Body>
                    <h3 className="h5 mb-3">
                      <i className="fas fa-cogs text-primary me-2"></i>
                      How I Use Your Information
                    </h3>
                    <p className="text-muted mb-3">
                      I use the information I collect to:
                    </p>
                    <ul className="text-muted">
                      <li>Respond to your inquiries and provide customer support</li>
                      <li>Improve my website and services</li>
                      <li>Analyze website usage and trends</li>
                      <li>Communicate with you about projects and opportunities</li>
                    </ul>
                  </Card.Body>
                </Card>

                <Card className="mb-4">
                  <Card.Body>
                    <h3 className="h5 mb-3">
                      <i className="fas fa-shield-alt text-primary me-2"></i>
                      Data Security
                    </h3>
                    <p className="text-muted">
                      I implement appropriate security measures to protect your personal information 
                      against unauthorized access, alteration, disclosure, or destruction. However, 
                      no method of transmission over the internet or electronic storage is 100% secure, 
                      so I cannot guarantee absolute security.
                    </p>
                  </Card.Body>
                </Card>

                <Card className="mb-4">
                  <Card.Body>
                    <h3 className="h5 mb-3">
                      <i className="fas fa-cookie-bite text-primary me-2"></i>
                      Cookies and Tracking
                    </h3>
                    <p className="text-muted">
                      My website may use cookies and similar tracking technologies to enhance your 
                      browsing experience. You can control cookie settings through your browser 
                      preferences. I do not use cookies to collect personally identifiable information 
                      without your consent.
                    </p>
                  </Card.Body>
                </Card>

                <Card className="mb-4">
                  <Card.Body>
                    <h3 className="h5 mb-3">
                      <i className="fas fa-share-alt text-primary me-2"></i>
                      Information Sharing
                    </h3>
                    <p className="text-muted">
                      I do not sell, trade, or otherwise transfer your personal information to third 
                      parties without your consent, except as described in this policy. I may share 
                      information with trusted service providers who assist me in operating my website 
                      or conducting business, as long as they agree to keep the information confidential.
                    </p>
                  </Card.Body>
                </Card>

                <Card className="mb-4">
                  <Card.Body>
                    <h3 className="h5 mb-3">
                      <i className="fas fa-user-check text-primary me-2"></i>
                      Your Rights (GDPR Compliance)
                    </h3>
                    <p className="text-muted mb-3">
                      If you are a resident of the European Economic Area (EEA), you have certain rights 
                      under the General Data Protection Regulation (GDPR):
                    </p>
                    <ul className="text-muted">
                      <li>Right to access your personal data</li>
                      <li>Right to rectify inaccurate personal data</li>
                      <li>Right to erasure ("right to be forgotten")</li>
                      <li>Right to restrict processing</li>
                      <li>Right to data portability</li>
                      <li>Right to object to processing</li>
                    </ul>
                    <p className="text-muted mt-3">
                      To exercise these rights, please contact me using the information provided below.
                    </p>
                  </Card.Body>
                </Card>

                <Card className="mb-4">
                  <Card.Body>
                    <h3 className="h5 mb-3">
                      <i className="fas fa-child text-primary me-2"></i>
                      Children's Privacy
                    </h3>
                    <p className="text-muted">
                      My website is not intended for children under 13 years of age. I do not 
                      knowingly collect personal information from children under 13. If you are 
                      a parent or guardian and believe your child has provided me with personal 
                      information, please contact me to have such information removed.
                    </p>
                  </Card.Body>
                </Card>

                <Card className="mb-4">
                  <Card.Body>
                    <h3 className="h5 mb-3">
                      <i className="fas fa-external-link-alt text-primary me-2"></i>
                      Third-Party Links
                    </h3>
                    <p className="text-muted">
                      My website may contain links to third-party websites. I am not responsible 
                      for the privacy practices or content of these external sites. I encourage 
                      you to review the privacy policies of any third-party sites you visit.
                    </p>
                  </Card.Body>
                </Card>

                <Card className="mb-4">
                  <Card.Body>
                    <h3 className="h5 mb-3">
                      <i className="fas fa-sync text-primary me-2"></i>
                      Changes to This Policy
                    </h3>
                    <p className="text-muted">
                      I may update this privacy policy from time to time. I will notify you of any 
                      changes by posting the new policy on this page and updating the "Last updated" 
                      date. Your continued use of my website after any changes constitutes acceptance 
                      of the updated policy.
                    </p>
                  </Card.Body>
                </Card>

                <Card className="mb-4">
                  <Card.Body>
                    <h3 className="h5 mb-3">
                      <i className="fas fa-envelope text-primary me-2"></i>
                      Contact Information
                    </h3>
                    <p className="text-muted">
                      If you have any questions about this privacy policy or my data practices, 
                      please contact me:
                    </p>
                    <div className="mt-3">
                      <p className="mb-2">
                        <strong>Email:</strong> 
                        <a href="mailto:your.email@example.com" className="text-decoration-none ms-2">
                          your.email@example.com
                        </a>
                      </p>
                      <p className="mb-0">
                        <strong>Address:</strong> 
                        <span className="ms-2">San Francisco, CA, USA</span>
                      </p>
                    </div>
                  </Card.Body>
                </Card>

                {/* Project-Specific Privacy Notes */}
                <Card className="mb-4 border-info">
                  <Card.Body>
                    <h3 className="h5 mb-3 text-info">
                      <i className="fas fa-code text-info me-2"></i>
                      Project-Specific Privacy Notes
                    </h3>
                    <div className="alert alert-info mb-3">
                      <strong>Analytics and Tracking:</strong> Some of my projects may use 
                      anonymized analytics services (such as Google Analytics) to understand 
                      user behavior and improve user experience. All data is collected anonymously 
                      and cannot be traced back to individual users.
                    </div>
                    <div className="alert alert-info mb-3">
                      <strong>Third-Party Services:</strong> Projects may integrate with 
                      third-party services (payment processors, authentication providers, etc.). 
                      These services have their own privacy policies, and I encourage you to 
                      review them.
                    </div>
                    <div className="alert alert-info mb-0">
                      <strong>Data Retention:</strong> I retain personal information only as 
                      long as necessary to fulfill the purposes outlined in this privacy policy 
                      or as required by law.
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Privacy;
