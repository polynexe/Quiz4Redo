import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function TaskCreateModal() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [task_name, setTaskName] = React.useState('');
    const [task_description, setTaskDescription] = React.useState('');
    const [start_date, setStartDate] = React.useState('');
    const [end_date, setEndDate] = React.useState('');
    const [project_id, setProjectId] = React.useState(1); // Default to project ID 1 for testing
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/tasks/create/', {
                task_name: task_name,
                task_description: task_description,
                start_date: start_date,
                end_date: end_date,
                project: project_id
            });
            console.log('Task created:', response.data);
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <>
        <Button variant="primary" onClick={() => setShow(true)}>
          Create Task
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="task_name">
            <Form.Label>Task Name</Form.Label>
            <Form.Control type="text" placeholder="Enter task name" value={task_name} onChange={(e) => setTaskName(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="task_description">
            <Form.Label>Task Description</Form.Label>
            <Form.Control type="text" placeholder="Enter task description" value={task_description} onChange={(e) => setTaskDescription(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="start_date">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" placeholder="Enter start date" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="end_date">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" placeholder="Enter end date" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button type="submit" variant="primary" onClick={handleClose}>
          Create Task
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default TaskCreateModal