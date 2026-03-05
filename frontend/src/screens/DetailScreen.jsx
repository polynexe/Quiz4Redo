import React from 'react'
import TaskCreateModal from '../components/TaskCreateModal'
import { Button, Col, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function DetailScreen() {
  const storedUser = localStorage.getItem('userInfo')
  let isSuperuser = false

  if (storedUser) {
    try {
      const parsedUser = JSON.parse(storedUser)
      isSuperuser = Boolean(
        parsedUser?.is_superuser ?? parsedUser?.isSuperuser ?? parsedUser?.superuser
      )
    } catch (error) {
      isSuperuser = false
    }
  }

  const project = {
    
  }
  return (
    <main>
      <section className="detail-hero-section text-center py-5 bg-light mb-5">
        <div className="section-content">
          <h1 className="display-4">Project Details</h1>
          <p className="lead">View and manage your project details and tasks.</p>
          <Button variant='secondary' as={Link} to='/'>Back to Projects</Button>
        </div>
      </section>
      <div className="detail-content container">
        <Row className='justify-content-md-center'>
          <Col md={8} className='text-center'>
            <ListGroup>
              <ListGroup.Item><strong>Project Name:</strong><h3>{project.project_name}</h3></ListGroup.Item>
              <ListGroup.Item><strong>Description:</strong> <strong>{project.project_description}</strong></ListGroup.Item>
              <ListGroup.Item><strong>Start Date:</strong> {new Date(project.start_date).toLocaleDateString()}</ListGroup.Item>
              <ListGroup.Item><strong>End Date:</strong> {new Date(project.end_date).toLocaleDateString()}</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
      <div className="detail-content container">
        {isSuperuser && <TaskCreateModal />}
      </div>
    </main>
  )
}

export default DetailScreen