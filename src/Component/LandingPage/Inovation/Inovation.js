import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import inovation from "../../../images/innovation-img.jpg";
import shape from "../../../images/shape2.png";
import check from '../../../images/check-mark.png'
import "./Inovation.css";

const Inovation = () => {
  return (
    <Container name="inovation" style={{width:"100%", height:"650px"}} className="mb-5">
      <Row>
        <Col style={{position:"relative"}} sm={8}>
            <img style={{width:"700px"}} src={inovation} className="innovation" alt="" />
            <img className="innovation-shape" src={shape} alt="" />
            <img className="innovation-shape2" src={shape} alt="" />
        </Col>
        <Col className="align-self-center pt-5" sm={4}>
            <p className="primary-clr">INNOVATION</p>
            <h2>Minimalism in Every Detail in an at a Glance</h2>
            <p>Interior of volumes, space, air, proportion, with certain light and mood. These interiors are meant to last forever. This is really effective and we can easily manage this for our clients.</p>
            <p className="innovation-offer"><img style={{width:"18px"}} src={check} alt="" /> Offers You the Best Category Home and Service</p>
            <p className="innovation-offer"><img style={{width:"18px"}} src={check} alt="" /> Offers You Buy One Get One in Lottery Service.</p>
            <p className="innovation-offer"><img style={{width:"18px"}} src={check} alt="" />  Primary in All and Whole Lottery Service.</p>
            <Button className="button primary-bg-clr border-0 my-3">Read More</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Inovation;
