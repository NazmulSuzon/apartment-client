import React from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  Nav,
  NavDropdown,
  Row,
} from "react-bootstrap";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import house from '../../../images/home-one-img.png'
import "./Banner.css";

const Banner = () => {
  const [location, setLocation] = React.useState("");
  const [property, setProperty] = React.useState("");
  const [price, setPrice] = React.useState("");

  // const handleChange = (event) => {
  //   setLocation(event.target.value);
  //   setProperty(event.target.value);
  //   setPrice(event.target.value);
  // };

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={7} className="">
            <div>
              <h1 style={{ fontSize: "60px" }}>Find Your Comfort</h1>
              <h1 style={{ fontSize: "60px" }}>Home Easily in Here</h1>
              <h5 className="fw-normal mt-4">
                We are one of the best service & property provider on the <br />{" "}
                global market. We are effective.
              </h5>

              <div className="mt-5 d-flex">
                <Box sx={{ width: 1 / 4 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Location</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={location}
                      label="Location"
                      onChange={(e) => {setLocation(e.target.value)}}
                    >
                      <MenuItem value={10}>Dhaka</MenuItem>
                      <MenuItem value={20}>Chittagong</MenuItem>
                      <MenuItem value={30}>Sylhet</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: 1 / 4 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Property</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={property}
                      label="Property"
                      onChange={(e) => {setProperty(e.target.value)}}
                    >
                      <MenuItem value={10}>Triplex</MenuItem>
                      <MenuItem value={20}>Duplex</MenuItem>
                      <MenuItem value={30}>Multiplex</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ width: 1 / 4 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Price</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={price}
                      label="Price"
                      onChange={(e) => {setPrice(e.target.value)}}
                    >
                      <MenuItem value={10}>$500</MenuItem>
                      <MenuItem value={20}>$800</MenuItem>
                      <MenuItem value={30}>$1200</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Button className="primary-bg-clr border-0 button px-5">Search</Button>
              </div>

              {/* <h5 className="fw-normal">global market. We are effective.</h5> */}
              {/* <div className="border rounded-pill primary-clr mt-4">
                <Row className="mx-auto">
                  <Col md={3}>
                    <NavDropdown
                      style={{ color: "light" }}
                      title="Enter Location"
                      id="collasible-nav-dropdown"
                      
                    >
                      <NavDropdown.Item>Dhaka</NavDropdown.Item>
                      <NavDropdown.Item>Chittagong</NavDropdown.Item>
                      <NavDropdown.Item>Sylhet</NavDropdown.Item>
                    </NavDropdown>
                  </Col>

                  <Col md={3}>
                    <NavDropdown
                      style={{ color: "black" }}
                      title="Property-Type"
                      id="collasible-nav-dropdown"
                    >
                      <NavDropdown.Item>Triplex</NavDropdown.Item>
                      <NavDropdown.Item>Duplex</NavDropdown.Item>
                      <NavDropdown.Item>Multiplex</NavDropdown.Item>
                    </NavDropdown>
                  </Col>
                  <Col md={3}>
                    <NavDropdown
                      style={{ color: "black" }}
                      title="Pricing Range"
                      id="collasible-nav-dropdown"
                    >
                      <NavDropdown.Item>$500/m</NavDropdown.Item>
                      <NavDropdown.Item>$1000/m</NavDropdown.Item>
                      <NavDropdown.Item>$2000/m</NavDropdown.Item>
                    </NavDropdown>
                  </Col>
                  <Col md={3}>
                    <Button
                      className="rounded-pill px-5 py-2 border-0"
                      style={{ backgroundColor: "rgb(253,137,128)" }}
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </div> */}
            </div>
          </Col>
          <Col xs={6} md={5} className="banner py-4">
          {/* <img style={{height:"600px"}} src={house} alt="" /> */}
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
