
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Head() {
  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">VITSI</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Info</Nav.Link>
          <Nav.Link href="#features">Noticias</Nav.Link>
          <Nav.Link href="#pricing">APP</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <br />
    </Container>
  );
}

export default Head;

