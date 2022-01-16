import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from '../../../images/blog/blog-img1.jpg'
import img2 from '../../../images/blog/blog-img2.jpg'
import img3 from '../../../images/blog/blog-img3.jpg'
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <p className="primary-clr text-center pt-5 fs-5">BLOG</p>
      <h2 className="text-center fw-bold">Latest Blog Post</h2>
      <Container className="mt-4">
        <Row className="g-4 pb-4 mb-5">
          <Col>
            <Card className="border-0 second-bg-clr card">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                  <p>January 1, 2022</p>
                <Card.Title>You Can Easily Change and Shift Your Home at Any Time</Card.Title>
                
                <Button className="button border-0 primary-bg-clr my-3"><Link className="text-decoration-none text-light">Read More</Link></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 second-bg-clr card">
              <Card.Img variant="top" src={img2} />
              <Card.Body>
              <p>January 5, 2022</p>
              <Card.Title>Global Organization Makes a Bit Safety Issue on Property</Card.Title>
                
                <Button className="button border-0 primary-bg-clr my-3"><Link className="text-decoration-none text-light">Read More</Link></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 second-bg-clr card">
              <Card.Img variant="top" src={img3} />
              <Card.Body>
              <p>January 8, 2022</p>
              <Card.Title>Be Safe and Be Happy on the Family Policy and Privacy</Card.Title>
                
                <Button className="button border-0 primary-bg-clr my-3"><Link className="text-decoration-none text-light">Read More</Link></Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
