import React from "react";
import img from '../../../images/about-img.png'
import { Button, Col, Container, Row } from "react-bootstrap";
import './About.css'

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={7}>
          <img className="img-fluid" src={img} alt="" />
        </Col>
        <Col className=" align-self-center" xs={6} md={5}>
          <p className="primary-clr">ABOUT US</p>
          <h3>We Are the Best Service Provider All <br /> Over the World</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi saepe enim vero ipsam eius nulla animi assumenda eaque aspernatur nihil obcaecati quam exercitationem laboriosam harum, consequatur praesentium! Nemo, porro.</p>
          <Button className="primary-bg-clr border-0 rounded-pill px-3 button">Read More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
