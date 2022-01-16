import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import img1 from "../../../images/team/team-img1.jpg";
import img4 from "../../../images/team/team-img4.jpg";
import img3 from "../../../images/team/team-img3.jpg";

const OurTeam = () => {
  return (
    <div className="second-bg-clr">
      <p className="primary-clr text-center pt-5 fs-5">Our Team</p>
      <h2 className="text-center fw-bold mb-4">Let's Meet Our Expert team</h2>
      <Container>
        <Row className="g-4 pb-4 mb-5">
          <Col>
            <Card>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Kilin Ward</Card.Title>
                <Card.Text>Manager</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>jenifer Ambrina</Card.Title>
                <Card.Text>Chief Executive</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Johan Henry</Card.Title>
                <Card.Text>Managing Director</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;
