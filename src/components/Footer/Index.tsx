import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FooterMain, NameOfSite } from './style'

export default function Footer() {
    return (
        <FooterMain>
            <Container>
                <NameOfSite>
                    Imobi Project
                </NameOfSite>
                <Row>
                    <Col>
                        Copyright {new Date().getFullYear()} Todos os Direitos Reservados - José Adauto (https://github.com/albadauto)
                    </Col>
                </Row>
            </Container>
        </FooterMain>
    )
}
