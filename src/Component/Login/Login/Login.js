import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const {loginUser} = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const handleLoginOnSubmit = e => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, history);
  }

  return (
    <div className="second-bg-clr" style={{ height: "100vh" }}>
      <Container className="mx-auto d-flex justify-content-center align-items-center pt-5">
        <Card className="p-5 m-5 card-box">
          <Form onSubmit={handleLoginOnSubmit}>
            <h2 className="text-center primary-clr">Login</h2>
            <Form.Group className="my-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={handleOnChange} type="email" name="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={handleOnChange} type="password" name="password" placeholder="Password" />
            </Form.Group>
            <Button className="button primary-bg-clr border-0" type="submit">
              Login
            </Button>
            <br />
            <Button className="mt-4 button primary-bg-clr border-0">Google SignIn</Button>
            <p className="mt-3">
              New Here? <Link to="/register" className="primary-clr">Please Register</Link>
            </p>
            <Link to="/home" className="primary-clr">Go Back To Home</Link>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
