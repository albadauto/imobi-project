import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LabelLink, Logo } from './style';
export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
      <Logo>
        Imobi Project
      </Logo>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/"><LabelLink>Home</LabelLink></Nav.Link>
            <Nav.Link href="#action2"><LabelLink>Imóveis</LabelLink></Nav.Link>
            <Nav.Link href="#" >
            <LabelLink>Sobre</LabelLink>
            <LabelLink>Login</LabelLink>

            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
