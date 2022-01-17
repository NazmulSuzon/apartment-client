import React, { useEffect } from "react";
import { Container, Pagination, Row } from "react-bootstrap";
import "./Services.css";
import services from "../../../FakeData/services.json";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    const url = `https://peaceful-ridge-61147.herokuapp.com/services`
    fetch(url)
    .then(res => res.json())
    .then(data => setServiceData(data))
  }, []);

  return (
    <div className="">
      <div className="service-img">
        {/* Here I use a background image in css */}
      </div>
      <Container className="mb-5">
        <h2 className="text-center primary-clr my-5">Our All Services</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {serviceData.map((data) => {
            return (
              
                <ServiceCard key={data.id}  data={data}></ServiceCard>
              
            );
          })}
        </Row>
        <div className="d-flex justify-content-center my-4">
          <Pagination className="primary-clr">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            {/* <Pagination.Ellipsis /> */}

            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item >{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item disabled>{6}</Pagination.Item>

            {/* <Pagination.Ellipsis /> */}
            <Pagination.Item>{7}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </Container>
    </div>
  );
};

export default Services;
