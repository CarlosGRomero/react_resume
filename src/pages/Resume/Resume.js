import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Resume.css';  // Custom CSS file for additional styles

const resumeData = {
  contactInformation: {
    name: "Carlos Romero",
    email: "carlos@romerolabs.com",
    phone: "(832) 489-1007",
    location: "Austin, TX"
  },
  professionalSummary: "Accomplished Software Engineer with over 10 years of experience specializing in backend development and API integration. Adept at utilizing a diverse set of tools and technologies including Docker, Kubernetes, React, Node.js, Python, GitLab, and PostgreSQL. Proven track record in delivering robust, secure, and scalable software solutions. Recently contributed to the Dell Product Application Security Team, emphasizing security-first principles in software development. Highly skilled in learning and leveraging new programming languages, tools, and infrastructure to drive innovative solutions and meet complex project requirements.",
  workExperience: [
    {
      title: "Principle Software Engineer",
      company: "Dell",
      date: "Nov 2019 - Oct 2024",
      responsibilities: [
        "Control Verification Framework",
        "Plextrac Jira Integration",
        "Unified Enrollment for security tools: AppScan, Blackduck, Checkmarx"
      ]
    },
    {
      title: "Software Engineer",
      company: "General Motors",
      date: "Jan 2016 - March 2019",
      responsibilities: [
        "Social Engineering Team",
        "Wrote Facebook Chat Bots"
      ]
    },
    {
      title: "Software Engineer",
      company: "Viking Cold Solutions",
      date: "May 2015 - Dec 2015",
      responsibilities: [
        "Write back end API for our Portal",
      ]
    }
  ],
  skills: [
    "React",
    "Javascript",
    "Node",
    "Python",
    "Docker",
    "Kubernetes",
    "redis",
    "postgreSQL",
    "NoSQL",
    "AWS",
    "AWS EC2",
    "Route 53"
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Houston",
      year: "2015"
    }
  ],
  certifications: [
  ],
  technicalProficiency: [
    "Microsoft Excel",
    "Data Analysis Tools"
  ],
  softSkills: [
    "Strong Communication",
    "Analytical Thinking",
    "Problem-Solving"
  ],
  attentionToDetail: "Ability to review and analyze technical documents accurately.",
  regulatoryKnowledge: "Understanding of security regulations and compliance requirements."
};

const Resume = () => {
  return (
    <Container className="resume-container my-5">
      <Card className="resume-card shadow">
        <Card.Body>
          <h1 className="text-center mb-4 text-primary">Resume</h1>
          <section className="mb-4">
            <h2 className="text-secondary">Contact Information</h2>
            <Row>
              <Col>
                <p><strong>Name:</strong> {resumeData.contactInformation.name}</p>
                <p><strong>Email:</strong> {resumeData.contactInformation.email}</p>
                <p><strong>Phone:</strong> {resumeData.contactInformation.phone}</p>
                <p><strong>Location:</strong> {resumeData.contactInformation.location}</p>
              </Col>
            </Row>
          </section>
          <section className="mb-4">
            <h2 className="text-secondary">Professional Summary</h2>
            <p>{resumeData.professionalSummary}</p>
          </section>
          <section className="mb-4">
            <h2 className="text-secondary">Work Experience</h2>
            {resumeData.workExperience.map((job, index) => (
              <Row key={index}>
                <Col>
                  <h5>{job.title}, {job.company}</h5>
                  <p><em>{job.date}</em></p>
                  <ul>
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </Col>
              </Row>
            ))}
          </section>
          <section className="mb-4">
            <h2 className="text-secondary">Skills</h2>
            <Row>
              <Col>
                <ul className="inline-skills">
                  {resumeData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </section>
          <section className="mb-4">
            <h2 className="text-secondary">Education</h2>
            <Row>
              <Col>
                {resumeData.education.map((edu, index) => (
                  <p key={index}>{edu.degree}, {edu.institution}, {edu.year}</p>
                ))}
              </Col>
            </Row>
          </section>
          <section className="mb-4">
            <h2 className="text-secondary">Certifications</h2>
            <Row>
              <Col>
                <ul>
                  {resumeData.certifications.map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </section>
          <section className="mb-4">
            <h2 className="text-secondary">Technical Proficiency</h2>
            <Row>
              <Col>
                <ul>
                  {resumeData.technicalProficiency.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </section>
          <section className="mb-4">
            <h2 className="text-secondary">Soft Skills</h2>
            <Row>
              <Col>
                <ul>
                  {resumeData.softSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </section>
          <section className="mb-4">
            <h2 className="text-secondary">Attention to Detail</h2>
            <Row>
              <Col>
                <p>{resumeData.attentionToDetail}</p>
              </Col>
            </Row>
          </section>
          <section className="mb-4">
            <h2 className="text-secondary">Regulatory Knowledge</h2>
            <Row>
              <Col>
                <p>{resumeData.regulatoryKnowledge}</p>
              </Col>
            </Row>
          </section>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Resume;
