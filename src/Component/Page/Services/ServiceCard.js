import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServiceCard = ({data}) => {
  // const { img, title, details } = props?.data;
  return (
    
      <>
        <Col className="">
          <Card
            style={{
              minHeight: "550px",
            }}
          >
            <Card.Img style={{ height: "250px" }} variant="top" src={data?.img} />
            <Card.Body className="text-center mt-2">
              <Card.Title>{data?.title}</Card.Title>
              <Card.Text>{data?.details}</Card.Text>
            </Card.Body>
            <div className="d-flex justify-content-center">
            <Link href="/" className="text-decoration-none text-center mb-5 py-2 text-light primary-bg-clr w-50 button rounded-pill">Read More</Link>
            </div>
          </Card>
        </Col>
        
      </>
    
  );
};

export default ServiceCard;
