import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import "./style.css";
export default function RecoverPassword() {
  return (
    <Container className="border border-dark recover-pass-main">
        <Row>
            <Col className="text-center">
                <h2>Recuperação de senha</h2>
            </Col>
        </Row>

        <Row>
            <Col className="text-center">
                <FloatingLabel label="Digite o email para recuperação">
                    <Form.Control placeholder='Email'/>
                </FloatingLabel>
            </Col>
        </Row>
        <br />
        <Row>
            <Col className="text-center">
                <Button variant="dark"className="button-geral">Enviar código</Button>
            </Col>
        </Row>
    </Container>
  )
}
