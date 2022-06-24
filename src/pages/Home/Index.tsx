import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5">
          <h1>Bem vindo(a) à sua nova Casa!</h1>
        </Col>
      </Row>
    </Container>
  )
}
