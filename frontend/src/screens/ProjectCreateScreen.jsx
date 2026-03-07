import React from 'react'
import {Form, Button, Alert} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Success from '../components/Success';


function ProjectCreateScreen() {
    const navigate = useNavigate();
    const [project_name, setName] = useState('');
    const [project_description, setDescription] = useState('');
    const [status, setStatus] = useState('in_progress');
    const [hours_spent, setHoursSpent] = useState(0);
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [user, setUser] = useState(1); // Default to user ID 1 for testing
    const [showSuccess, setShowSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/projects/create/', {
                project_name: project_name,
                project_description: project_description,
                status: status,
                hours_spent: hours_spent,
                start_date: start_date,
                end_date: end_date,
                user: user
                });
            console.log('Project created:', response.data);
            setShowSuccess(true);
            } catch (error) {
                console.error('Error creating project:', error);
                const apiError = error.response?.data;
                if (apiError?.project_name?.length) { // Check if project_name field has errors, and if so, display the first error message related to project_name
                    setErrorMessage(apiError.project_name[0]);
                } else if (apiError?.error) {
                    setErrorMessage(apiError.error);
                } else {
                    setErrorMessage('Failed to create project. Please check your inputs.');
                }
            }
        
    }

    const handleCloseSuccess = () => {
        setShowSuccess(false);
        navigate('/');
    }


return (
<div>
<Success show={showSuccess} handleClose={handleCloseSuccess} />
<FormContainer>
    <h1>Create Project</h1>
    {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
    <Form onSubmit={submitHandler}>
        <Form.Group controlId='user'>
            <Form.Label>User ID</Form.Label>
            <Form.Control type='number' placeholder='Enter user ID' value={user} onChange={(e) => setUser(parseInt(e.target.value))}></Form.Control>
        </Form.Group>
        <Form.Group controlId='project_name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
                type='name'
                placeholder='Enter name'
                value={project_name}
                onChange={(e) => {
                    setName(e.target.value);
                    if (errorMessage) setErrorMessage('');
                }}
                isInvalid={errorMessage.toLowerCase().includes('project name')}
            ></Form.Control>
        </Form.Group>
        <Form.Group controlId='project_description'>
            <Form.Label>Description</Form.Label>
            <Form.Control type='description' placeholder='Enter description' value={project_description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='status'>
            <Form.Label>Status</Form.Label>
            <Form.Control as='select' value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value='in_progress'>In Progress</option>
                <option value='completed'>Completed</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId='hours_spent'>
            <Form.Label>Hours Spent</Form.Label>
            <Form.Control type='number' placeholder='Enter hours spent' value={hours_spent} onChange={(e) => setHoursSpent(parseInt(e.target.value))}></Form.Control>
        </Form.Group>
        <Form.Group controlId='start_date'>
            <Form.Label>Start Date</Form.Label>
            <Form.Control type='date' placeholder='Enter start date' value={start_date} onChange={(e) => setStartDate(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='end_date'>
            <Form.Label>End Date</Form.Label>
            <Form.Control type='date' placeholder='Enter end date' value={end_date} onChange={(e) => setEndDate(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>Create</Button>
        <Button variant='secondary' href='/'>Back</Button>
    </Form>
</FormContainer>
</div>
)
}

export default ProjectCreateScreen