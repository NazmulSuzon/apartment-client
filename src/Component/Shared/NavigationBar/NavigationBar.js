import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import useAuth from "../../hooks/useAuth";

const NavigationBar = () => {
  const { logOut, user } = useAuth();
  console.log(user);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className="primary-clr">
                Home
              </Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Pages" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link>Appointment</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link>Property</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link>Gallery</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link>Team</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/about">About</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/services" className="text-decoration-none text-dark">
                  Services
                </Link>
              </Nav.Link>

              <Nav.Link href="/about">Blog</Nav.Link>
              <Nav.Link href="/about">Shop</Nav.Link>
              <Nav.Link href="/about">Contact</Nav.Link>
              
            </Nav>
            <Nav>
              {user?.email ? (
                <>
                <Link to="/dashboard" className="text-decoration-none primary-clr me-3 my-auto fs-5 fw-bold">Dashboard</Link>
                  <Button
                    onClick={logOut}
                    className="button primary-bg-clr border-0"
                    variant="dark"
                  >
                    Logout
                  </Button>
                  <p className="ms-2 mt-2 primary-clr fs-5 text-light ps-3">
                    Signed in as:{" "}
                    {user.displayName ? `${user.displayName}` : `${user.email}`}
                  </p>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-decoration-none text-light button primary-bg-clr px-4 py-2 rounded"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-decoration-none text-light button primary-bg-clr px-4 py-2 rounded ms-3"
                  >
                    Register
                  </Link>
                </>
              )}

              {/* <Link
                to="/login"
                className="text-decoration-none text-light button primary-bg-clr px-4 py-2 rounded"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-decoration-none text-light button primary-bg-clr px-4 py-2 rounded ms-3"
              >
                Register
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
