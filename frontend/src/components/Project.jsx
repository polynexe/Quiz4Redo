import React from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Project({ project }) {
  return (
    <Accordion className='mb-3' style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{project.project_name}</Accordion.Header>
        <Accordion.Body>
          <p><strong>Description:</strong> {project.project_description}</p>
          <p><strong>Start Date:</strong> {new Date(project.start_date).toLocaleDateString()}</p>
          <p><strong>End Date:</strong> {new Date(project.end_date).toLocaleDateString()}</p>
          <Button variant='primary' as={Link} to={`/projects/${project._id}`}>View Details</Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default Project