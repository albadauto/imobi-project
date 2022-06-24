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
            className="mx-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><LabelLink>Home</LabelLink></Nav.Link>
            <Nav.Link href="#action2"><LabelLink>Link</LabelLink></Nav.Link>
            <Nav.Link href="#" >
            <LabelLink>Sobre</LabelLink>
            <LabelLink>Login</LabelLink>

            </Nav.Link>
          </Nav>
          <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Procurar Imovel"
          className="me-2"
          aria-label="Search"
        />
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
