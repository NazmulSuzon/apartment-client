import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from '../../../images/features/duplex.png'
import img2 from '../../../images/features/verified.png'
import img3 from '../../../images/features/crown.png'
import img4 from '../../../images/features/playground.png'
import arrow from '../../../images/features/right-arrow.png'
import { Link } from "react-router-dom";
import './Features.css'

const Features = () => {
  return (
    <Container>
      <p className="primary-clr text-center pt-5 fs-5">Features</p>
      <h2 className="text-center fw-bold">Our Property Features</h2>
      <Row className="g-4 my-5">
        <Col>
          <Card className="features border-0">
            <Card.Img variant="top" style={{width:"48px" }} className="ms-3 mt-3 features-img" src={img1} />
            <Card.Body>
              <Card.Title>Duplex Layout</Card.Title>
              <Card.Text>
              We have a lot of duplex and luxury rooms for you and you can easily buy this.
              </Card.Text>
              <Link className="text-decoration-none text-dark">Read More <img style={{width:"12px" }} src={arrow} alt="" /></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="features border-0">
            <Card.Img variant="top" style={{width:"48px" }} className="ms-3 mt-3" src={img2} />
            <Card.Body>
              <Card.Title>High-Level Security</Card.Title>
              <Card.Text>
              We have a lot of duplex and luxury rooms for you and you can easily buy this.
              </Card.Text>
              <Link className="text-decoration-none text-dark">Read More <img style={{width:"12px" }} src={arrow} alt="" /></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="features border-0">
            <Card.Img variant="top" style={{width:"48px" }} className="ms-3 mt-3" src={img3} />
            <Card.Body>
              <Card.Title>Royal Touch Paint</Card.Title>
              <Card.Text>
              We have a lot of duplex and luxury rooms for you and you can easily buy this.
              </Card.Text>
              <Link className="text-decoration-none text-dark">Read More <img style={{width:"12px" }} src={arrow} alt="" /></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="features border-0">
            <Card.Img variant="top" style={{width:"48px" }} className="ms-3 mt-3" src={img4} />
            <Card.Body>
              <Card.Title>Large Playground</Card.Title>
              <Card.Text>
              We have a lot of duplex and luxury rooms for you and you can easily buy this.
              </Card.Text>
              <Link className="text-decoration-none text-dark read-more-btn">Read More <img style={{width:"12px" }} src={arrow} alt="" /></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
