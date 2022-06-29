import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
export default function Property() {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5">
          <Button variant="secondary" className="button-geral" href="/Announce">Anúnciar Imóvel</Button>

        </Col>
      </Row>
    </Container>
  )
}
