import React, { useEffect } from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHeader } from '../../providers/HeaderProvider';
import { LabelLink, Logo } from './style';
export default function Header() {
  const { bar, setBar }: any = useHeader();
  if (sessionStorage.getItem("token")) {
    setBar({ ...bar, title: "Minha conta", url: "/MyAccount" })
  } else {
    setBar({ ...bar, title: "Login", url: "/Login" })
  }

  function handleUnsign(){
    sessionStorage.clear();
    window.location.href = "/";
    console.log("ta funfando!")
    }
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
            <Nav.Link href="/Property"><LabelLink>Imóveis</LabelLink></Nav.Link>
            <Nav.Link  >
              <LabelLink >Sobre</LabelLink>

            </Nav.Link>
            <Nav.Link href={bar.url} >
              <LabelLink>{bar.title}</LabelLink>


            </Nav.Link>
            {sessionStorage.getItem("token") &&
              <Nav.Link onClick={handleUnsign}>
                <LabelLink >Sair</LabelLink>
              </Nav.Link>
            }
        </Nav>



        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
