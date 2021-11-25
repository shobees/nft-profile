import { Navbar, Container, Nav } from "react-bootstrap";
import "./style.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar-app">
        <Container>
          <Navbar.Brand className="logo">LOGO</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="" className="justify-content-end">
            <Nav>
              <Nav.Link href="#sports">Sports</Nav.Link>
              <Nav.Link href="#women">Women</Nav.Link>
              <Nav.Link href="#pop-culture">Pop Culture</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
