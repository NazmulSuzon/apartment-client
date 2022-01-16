import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Contact = () => {
  const { user } = useAuth();
  return (
    <div name="contact" className="my-5">
      <Container className="card-box py-5">
        <h2 className="text-center primary-clr mb-4">Contact Me</h2>
        <Form className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            {user?.email ? (
              <>
                <Form.Control type="email" placeholder={user.email} disabled />
              </>
            ) : (
              <>
                <Form.Control type="email" placeholder="Enter Email" />
              </>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <Button className="primary-bg-clr button border-0" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
