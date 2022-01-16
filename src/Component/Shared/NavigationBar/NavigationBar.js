import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-scroll";
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
              <Nav.Link href="/home" className="primary-clr fw-bold">
                Home
              </Nav.Link>
              <Nav.Link><Link activeClass="active-class" spy={true} className="text-decoration-none text-dark" offset={-55} exact to="about" smooth={true} duration={800}>About</Link></Nav.Link>
              <NavDropdown title="Pages" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Nav.Link><Link activeClass="active-class" spy={true} className="text-decoration-none text-dark" offset={-55} exact to="property" smooth={true} duration={800}>Property</Link></Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link><Link activeClass="active-class" spy={true} className="text-decoration-none text-dark" offset={-55} exact to="features" smooth={true} duration={800}>Features</Link></Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link><Link activeClass="active-class" spy={true} className="text-decoration-none text-dark" offset={-55} exact to="gallery" smooth={true} duration={800}>Gallery</Link></Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link><Link activeClass="active-class" spy={true} className="text-decoration-none text-dark" offset={-55} exact to="inovation" smooth={true} duration={800}>Inovation</Link></Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link><Link activeClass="active-class" spy={true} className="text-decoration-none text-dark" offset={-55} exact to="team" smooth={true} duration={800}>Our Team</Link></Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/services">Services</Nav.Link>

              <Nav.Link href="/blog"><Link activeClass="active-class" spy={true} className="text-decoration-none text-dark" offset={-55} exact to="blog" smooth={true} duration={800}>Blog</Link></Nav.Link>
              <Nav.Link href="/blog"><Link activeClass="active-class" spy={true} className="text-decoration-none text-dark" offset={-55} exact to="contact" smooth={true} duration={800}>Contact</Link></Nav.Link>
            </Nav>
            <Nav>
              {user?.email ? (
                <>
                  <Nav.Link
                    href="/dashboard"
                    className="text-decoration-none primary-clr me-3 my-auto fs-5 fw-bold"
                  >
                    Dashboard
                  </Nav.Link>
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
                  <Nav.Link
                    href="/login"
                    className="text-decoration-none text-light button primary-bg-clr px-4 py-2 rounded"
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    href="/register"
                    className="text-decoration-none text-light button primary-bg-clr px-4 py-2 rounded ms-3"
                  >
                    Register
                  </Nav.Link>
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
