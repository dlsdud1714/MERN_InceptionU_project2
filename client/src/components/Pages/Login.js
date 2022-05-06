import React, { useContext, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext_derick";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const authContext = useContext(AuthContext);
    const login = authContext.login;
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = { 
            username: username, 
            password: password 
        };
        const data = JSON.stringify(user);
        const response = await fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data,
        });
        const userData = await response.json();
        login(userData)
    if (response.status === 200) {
       navigate("/");
    } else {
        alert("Login Failed");
    }
}

  return (
    <div style={{height:650}}>
      <Card>
        <Card.Body>
          <h2 className="mb-5"> Login </h2>
          <Form className=" mb-3 w-50" onSubmit={handleSubmit}>
            <Form.Group id="text">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                onChange={(event) => {
                    setUsername(event.target.value)
                    
                }}
                required
              />
            </Form.Group>
            <Form.Group id="test">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </Form.Group>
            <Button className="w-20 mt-3" type="submit">
              {" "}
              Login{" "}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div>
      </div>
    </div>
  );
}
