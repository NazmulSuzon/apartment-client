import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const PropertyCard = (props) => {
  const { img, size, title, location, dining, bed, bathroom, price } =
    props.data;
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
      <Col>
            <Card style={{width:"400px"}}>
              <Card.Img variant="top" style={{width:"400px"}} src={img} />
              <Card.Body>
                <Container>
                <div className="d-flex justify-content-between">
                    <p>Apartment</p>
                    <p>{size}</p>
                </div>
                <Card.Title>{title}</Card.Title>
                <p>{location}</p>
                <div className="d-flex justify-content-between">
                    <p>Dining:{dining}</p>
                    <p>Bed:{bed}</p>
                    <p>Bathroom:{bathroom}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <h2>{price}</h2>
                    <Button className="button primary-bg-clr border-0 rounded-pill">Book Now</Button>
                </div>
                </Container>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
  );
};

export default PropertyCard;
