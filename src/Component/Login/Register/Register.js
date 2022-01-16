import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  Alert,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";

const Register = () => {
  const { registerUser, user, isLoading, authError } = useAuth();
  const [userInfo, setUserInfo] = useState({});
  const history = useHistory();

  const handleBlur = e => {
    const newUserInfo = {...userInfo};
    newUserInfo[e.target.name] = e.target.value;
    setUserInfo(newUserInfo);
  }

  const handleRegister = e => {
    e.preventDefault();
    registerUser(userInfo.email, userInfo.password, userInfo.displayName, history);
  }

  return (
    <div className="second-bg-clr" style={{ height: "100vh" }}>
      <Container className="mx-auto d-flex justify-content-center align-items-center pt-5">
        <Card className="p-5 m-5 card-box">
          <Form onSubmit={handleRegister}>
            <h2 className="primary-clr">Please Register</h2>
            <Row className="mt-4 mb-3">
              <Col className="">
                <Form.Label>Your Name</Form.Label>
                <Form.Control onChange={handleBlur} type="text" name="displayName" placeholder="First name" />
              </Col>
            </Row>
            <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={handleBlur} type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={handleBlur} type="password" name="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control onChange={handleBlur} type="address" name="address" placeholder="1234 Main St" />
            </Form.Group>

            <Button className="button primary-bg-clr border-0" type="submit">
              Register
            </Button>
            <p className="mt-3">
              New Here?{" "}
              <Link to="/login" className="primary-clr">
                Please Login
              </Link>
            </p>
            <Link to="/home" className="primary-clr">
              Go Back To Home
            </Link>
          </Form>
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Added Successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Card>
      </Container>
    </div>
  );
};

export default Register;
