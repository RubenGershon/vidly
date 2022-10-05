import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/movies">Vidly</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/movies" as={NavLink}>
            Movies
          </Nav.Link>
          <Nav.Link to="/customers" as={NavLink}>
            Customers
          </Nav.Link>
          <Nav.Link to="/rentals" as={NavLink}>
            Rentals
          </Nav.Link>
          <Nav.Link to="/login" as={NavLink}>
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
