import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      className="d-flex justify-content-center container"
      style={{ height: "100vh" }}
    >
      <Form className="w-50 h-50 my-auto border border-dark p-5 rounded-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          <Link className="text-decoration-none text-white " to="/home">
            Submit
          </Link>
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
