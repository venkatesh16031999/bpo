import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navigation=(props)=>{

return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Bussiness Processing Outsourcing</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      
      <Nav.Link><Link to="/">Signin</Link></Nav.Link>
      
      <Nav.Link> <Link to="/login">Login</Link></Nav.Link>
        
        
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
     
    </Navbar.Collapse>
  </Navbar>
)

}

export default Navigation;