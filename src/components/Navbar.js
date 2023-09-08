import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary justify-content-center ">
        <Container>
          <Navbar.Brand href="/" className='nav-logo'>REPS2023</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item href="/"> About REPS </NavDropdown.Item>
                <NavDropdown.Item href="/">About MarketPlace Alliance</NavDropdown.Item>
                <NavDropdown.Item href="/">About Our Partner</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/" className='link-item'>Topics</Nav.Link>
            <Nav.Link href="/" className='link-item'>Speakers</Nav.Link>
            <Nav.Link href="/" className='link-item'>Objectives</Nav.Link>
            <Nav.Link className='nav-reg-button' href="/" >Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default BasicExample;