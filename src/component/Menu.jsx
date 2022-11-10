import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              {" "}
              <Link
                id="bt-home"
                className="btn btn-secondary"
                role="button"
                to="/"
              >
                Ejemplo 1
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                id="bt-home"
                className="btn btn-secondary"
                role="button"
                to="/Line"
              >
                Ejemplo 2
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                id="bt-home"
                className="btn btn-secondary"
                role="button"
                to="/Imagen"
              >
                Ejemplo 3
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
