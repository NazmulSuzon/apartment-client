import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import next from "../../../images/next.png";
import clock from "../../../images/clock.png";
import location from "../../../images/location.png";
import phone from "../../../images/cell-phone.png";
import email from "../../../images/email.png";

const Footer = () => {
  return (
    <div className="second-bg-clr">
      <Container>
        <Row className="py-5">
          <Col sm={3}>
            <img src={logo} alt="" />
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              dicta eos ipsum ipsam consequuntur, maxime asperiores fuga aliquid
              qui commodi!
            </p>
          </Col>
          <Col sm={3}>
            <h3 className="fw-bold">Useful Links</h3>
            <Link className="text-decoration-none text-dark">
              <img style={{ width: "24px" }} src={next} alt="" />
              About US
            </Link>
            <br />
            <Link className="text-decoration-none text-dark">
              <img style={{ width: "24px" }} src={next} alt="" />
              Services
            </Link>
            <br />
            <Link className="text-decoration-none text-dark">
              <img style={{ width: "24px" }} src={next} alt="" />
              Team
            </Link>
            <br />
            <Link className="text-decoration-none text-dark">
              <img style={{ width: "24px" }} src={next} alt="" />
              Agents
            </Link>
            <br />
            <Link className="text-decoration-none text-dark">
              <img style={{ width: "24px" }} src={next} alt="" />
              Gallery
            </Link>
            <br />
            <Link className="text-decoration-none text-dark">
              <img style={{ width: "24px" }} src={next} alt="" />
              Contact US
            </Link>
          </Col>
          <Col sm={3}>
            <h3 className="fw-bold">Address</h3>
            <p>
              <img style={{ width: "20px" }} src={clock} alt="" /> Wed - Mon:
              10.00am - 5.00pm
            </p>
            <p>
              <img style={{ width: "20px" }} src={location} alt="" /> Shekhertek
              02, Dhaka, Bangladesh
            </p>
            <p>
              <img style={{ width: "20px" }} src={phone} alt="" />{" "}
              +8801824876735
            </p>
            <p>
              <img style={{ width: "20px" }} src={email} alt="" />{" "}
              nazmulsuzon100@gmail.com
            </p>
            <p>
              <img style={{ width: "20px" }} src={email} alt="" />{" "}
              nazmulhasan.suzon@gmail.com
            </p>
          </Col>
          <Col sm={3}>
            <h3 className="fw-bold">Newsletter</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus sint numquam recusandae fugiat cupiditate error ullam
              eaque reprehenderit aperiam ab.
            </p>
            <Form>
              <Form.Group
                className="mb-3 border-info"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" className="fw-bold fs-5 border-0 rounded-pill" placeholder="Your Email*" />
                <Button className="button mt-4 px-4 primary-bg-clr border-0 rounded-pill">Subscrive</Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
