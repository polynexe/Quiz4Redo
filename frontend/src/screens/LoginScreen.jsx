import React from 'react'
import { Form } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../actions/userActions.js';

function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Login form submitted')
        dispatch(login(username, password));
    }
  return (
    <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' value={username} onChange={(e) => setUsername(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
            </Form.Group>
            <button type='submit' className='btn btn-primary'>Sign In</button>
        </Form>
    </FormContainer>
  )
}
export default LoginScreen