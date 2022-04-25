import React, { useRef } from 'react'
import {Form, Button, Card} from 'react-bootstrap'
//import { useAuth } from "../components/contexts/AuthContext";


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    
  return (
    <div>
        <Card>
            <Card.Body>
                <h2 className = "mb-5"> Sign Up </h2>
                <Form className= " mb-3 w-50">
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
                </Form>
                    <Button className="w-20" type="submit"> Submit </Button>
            </Card.Body>
        </Card>
        <div>

        </div>
    </div>
  )
}
