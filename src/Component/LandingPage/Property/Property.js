import React, { useEffect, useState } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import Slider from "react-slick";
import PropertyData from "../../../FakeData/Property.json";
import PropertyCard from "./PropertyCard";

const Property = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    const url = `https://peaceful-ridge-61147.herokuapp.com/properties`
    fetch(url)
    .then(res => res.json())
    .then(data => setProperty(data))
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div name="property" style={{ backgroundColor: "rgb(254,249,235)" }}>
      <p className="primary-clr text-center pt-5 fs-5">OUR PROPERTY</p>
      <h2 className="text-center fw-bold">
        Our Property and Its Availabilities <br /> and All Other Details
      </h2>
      <Container className="my-5">
        <Slider {...settings}>
          {
              property.map((data => {
                  return(
                      <div>
                          <PropertyCard key={data.key} data={data} className={settings.className}></PropertyCard>
                      </div>
                  )
              }))
          }
        </Slider>
      </Container>
    </div>
  );
};

export default Property;
