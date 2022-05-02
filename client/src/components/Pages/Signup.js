import React, { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Card, Alert} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom"


export default function Signup() {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    let navigate = useNavigate();

    async function handleSubmit(event) {
        // cannot submit a blank form
        event.preventDefault()
        if (passwordConfirmRef.current.value !== passwordRef.current.value){
            return setError("Passwords do not match")
        }

        try {
            setError('')
            signup(emailRef.current.value, passwordRef.current.value)
            navigate("/");
        } catch {
            setError('Failed to create an account')
        }
    }

  return (
    <div>
        <Card>
            <Card.Body>
                <h2 className = "mb-5"> Sign Up </h2>
                    {currentUser && currentUser.email} 
                    {error && <Alert variant="danger"> {error}</Alert>}
                <Form className= "mb-3 w-50" onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>        
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>        
                    </Form.Group>
                    <Form.Group id="email">
                        <Form.Label>Password Confirm</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required/>        
                    </Form.Group>
                    <Button className="w-20 mt-3" type="submit"> Submit </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className='mt-2 ml-2'>
        Already have an Account? <Link to="/login"> Log in</Link>
        </div>
    </div>
  )
}
