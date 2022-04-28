import React, { useRef, useState } from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext";
import { Link } from 'react-router-dom'


export default function Login() {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event) {
        // cannot submit a blank form
        event.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

  return (
    <div>
        <Card>
            <Card.Body>
                <h2 className = "mb-5"> Login </h2> 
                <Form className= " mb-3 w-50" onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>        
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>        
                    </Form.Group>
                    <Button className="w-20 mt-3" type="submit"> Login </Button>
                </Form>
            </Card.Body>
        </Card>
        <div>
        Don't have an account? <Link to="/signup"> Create Account </Link>
        </div>
    </div>
  )
}
