import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import Project from '../components/Project';
import axios from 'axios';


function HomeScreen() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data } = await axios.get('http://127.0.0.1:8000/api/projects/');
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    } fetchProjects();
  }, []);

  return (
    <main>
        {/* Hero Section */}
        <section className="hero-section text-center py-5 bg-light mb-5">
            <div className="section-content">

                <div className="hero-details">
                    <h1 className="display-4">ClickUp, a project management app.</h1>
                    <p className="lead">Effortlessly organize your work and boost productivity.</p>
                    <p className="description">Welcome to ClickUp, where you can manage your projects and tasks with ease.</p>
                </div>
                
            </div>
        </section>
        <section className="features-section py-5 mb-5 bg-white text-dark text-center">
            <div className="section-content">
                <h2 className="text-center mb-4">Key Features</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-card">
                            <h3>Task Management</h3>
                            <p>Organize and prioritize your tasks with ease.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-card">
                            <h3>Project Tracking</h3>
                            <p>Monitor your project progress in real-time.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-card">
                            <h3>Collaboration</h3>
                            <p>Work together with your team seamlessly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="section-content text-center">
              <h1>Latest Projects</h1>
              <p>Explore our latest projects and see how ClickUp can help you manage your work effectively.</p>
              <Row className='justify-content-md-center'>
                {projects.map((project) => (
                  <Col key={project._id} md={4} sm={6} xl={3} lg={3}>
                    <Project project={project} />
                  </Col>
                ))}
              </Row>
            </div>
        </section>
    </main>
  )
}

export default HomeScreen