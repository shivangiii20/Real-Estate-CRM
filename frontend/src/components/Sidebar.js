import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Button, Offcanvas } from "react-bootstrap";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
   
 const hideSidebar = () => {
    setShowSidebar(false);
  }

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="d-flex align-items-center">
            <Button variant="outline-light" onClick={() => setShowSidebar(true)}>
              ☰
            </Button>
            <Navbar.Brand href="#home">&nbsp;Real Estate CRM Dashboard</Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar */}
      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} backdrop={false} scroll={true} className="bg-dark text-white" style={{ width: "233px" }}>
      <Offcanvas.Header>
          <Offcanvas.Title className="text-white">Menu</Offcanvas.Title>
          <button type="button" className="btn-close btn-close-white" onClick={() => hideSidebar()}></button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Item>
              <Link to="/" className="nav-link text-white" onClick={ () => hideSidebar()}>→  Dashboard</Link>
              <Link to="/leads" className="nav-link text-white" onClick={() => hideSidebar()}>→ Leads Sections</Link>
              <Link to="/properties" className="nav-link text-white" onClick={() => hideSidebar()}>→ Property Sections</Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
