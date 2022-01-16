import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import img1 from '../../../images/gallery/gallery-img1.jpg'
import img2 from '../../../images/gallery/gallery-img2.jpg'
import img3 from '../../../images/gallery/gallery-img3.jpg'
import img4 from '../../../images/gallery/gallery-img4.jpg'
import pdf from '../../../images/pdf-icon.png'
import galleryData from "../../../FakeData/Gallery.json";


const Gallery = () => {
  const [key, setKey] = useState('triplex');

  return (
    <div name="gallery" style={{ backgroundColor: "rgb(254,249,235)" }}>
      <Container>
        <p className="primary-clr text-center pt-5 fs-5">PREVIEW GALLERY</p>
        <h2 className="text-center fw-bold">Lets See All of Our Resources at a Glance</h2>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="my-4 justify-content-center border-0"
        >
          <Tab className="mb-5" eventKey="triplex" title="Triplex">
          <Row className="bg-light">
              <Col className="align-self-center" xs={12} md={5}>
                <h2>Royal Triplex House and It's All Details at a Glance</h2>
                <p>We have a lot of good property and one of that is this property and for that we have arranged a catalogue for your. Please click on below!</p>
                <div className="d-flex justify-content-between">
                  <a className="text-decoration-none primary-clr" href="https://drive.google.com/file/d/12UvmQlPIJQxAc--01LJJnTDRRVbBhdet/view?usp=sharing" target="_blank" rel="noreferrer"><img className="me-3" style={{width:"48px"}} src={pdf} alt="" />Property Description</a>

                  <a className="text-decoration-none primary-clr" href="https://drive.google.com/file/d/12UvmQlPIJQxAc--01LJJnTDRRVbBhdet/view?usp=sharing" target="_blank" rel="noreferrer"><img className="me-3" style={{width:"48px"}} src={pdf} alt="" />Energetic Certificate</a>
                </div>
              </Col>
              <Col xs={6} md={7}>
                <img className="" style={{width:"800px", height:"600px"}} src={img1} alt="" />
              </Col>
            </Row>
          </Tab>
          <Tab className="mb-5" eventKey="duplex" title="Duplex">
            <Row className="bg-light">
              <Col className="align-self-center" xs={12} md={5}>
                <h2>Royal Duplex House and It's All Details at a Glance</h2>
                <p>We have a lot of good property and one of that is this property and for that we have arranged a catalogue for your. Please click on below!</p>
                <div className="d-flex justify-content-between">
                  <a className="text-decoration-none primary-clr" href="https://drive.google.com/file/d/12UvmQlPIJQxAc--01LJJnTDRRVbBhdet/view?usp=sharing" target="_blank" rel="noreferrer"><img className="me-3" style={{width:"48px"}} src={pdf} alt="" />Property Description</a>

                  <a className="text-decoration-none primary-clr" href="https://drive.google.com/file/d/12UvmQlPIJQxAc--01LJJnTDRRVbBhdet/view?usp=sharing" target="_blank" rel="noreferrer"><img className="me-3" style={{width:"48px"}} src={pdf} alt="" />Energetic Certificate</a>
                </div>
              </Col>
              <Col xs={6} md={7}>
                <img style={{width:"800px", height:"600px"}} src={img2} alt="" />
              </Col>
            </Row>
          </Tab>
          <Tab className="mb-5" eventKey="multiplex" title="Multiplex">
          <Row className="bg-light">
              <Col className="align-self-center" xs={12} md={5}>
                <h2>Multiplex House and It's All Details at a Glance</h2>
                <p>We have a lot of good property and one of that is this property and for that we have arranged a catalogue for your. Please click on below!</p>
                <div className="d-flex justify-content-between">
                  <a className="text-decoration-none primary-clr" href="https://drive.google.com/file/d/12UvmQlPIJQxAc--01LJJnTDRRVbBhdet/view?usp=sharing" target="_blank" rel="noreferrer"><img className="me-3" style={{width:"48px"}} src={pdf} alt="" />Property Description</a>

                  <a className="text-decoration-none primary-clr" href="https://drive.google.com/file/d/12UvmQlPIJQxAc--01LJJnTDRRVbBhdet/view?usp=sharing" target="_blank" rel="noreferrer"><img className="me-3" style={{width:"48px"}} src={pdf} alt="" />Energetic Certificate</a>
                </div>
              </Col>
              <Col xs={6} md={7}>
                <img style={{width:"800px", height:"600px"}} src={img3} alt="" />
              </Col>
            </Row>
          </Tab>
          <Tab className="mb-5" eventKey="luxury" title="Luxury">
          <Row className="bg-light">
              <Col className="align-self-center" xs={12} md={5}>
                <h2>Luxury House and It's All Details at a Glance</h2>
                <p>We have a lot of good property and one of that is this property and for that we have arranged a catalogue for your. Please click on below!</p>
                <div className="d-flex justify-content-between">
                  <a className="text-decoration-none primary-clr" href="https://drive.google.com/file/d/12UvmQlPIJQxAc--01LJJnTDRRVbBhdet/view?usp=sharing" target="_blank" rel="noreferrer"><img className="me-3" style={{width:"48px"}} src={pdf} alt="" />Property Description</a>

                  <a className="text-decoration-none primary-clr" href="https://drive.google.com/file/d/12UvmQlPIJQxAc--01LJJnTDRRVbBhdet/view?usp=sharing" target="_blank" rel="noreferrer"><img className="me-3" style={{width:"48px"}} src={pdf} alt="" />Energetic Certificate</a>
                </div>
              </Col>
              <Col xs={6} md={7}>
                <img style={{width:"800px", height:"600px"}} src={img4} alt="" />
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default Gallery;
