import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import Typing from 'react-typing-effect';
import "./style.css";
interface ITyping {
    github: boolean,
    linkedin: boolean,
    person_site: boolean
}
export default function About() {
    const [typing, setTyping] = useState<ITyping>({ github: false, linkedin: false, person_site: false });
    return (
        <Container className="container-main-about">
            <Row>
                <Col className="text-center">
                    <h1>SOBRE O AUTOR (JOSÉ ADAUTO)</h1>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <h3>É um prazer ter você aqui :)</h3>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <Button variant="outline-dark" className="button-github" onClick={() => setTyping({ ...typing, github: true })}>Github</Button>
                </Col>
            </Row>

            <Row>
                {typing.github ?
                    <Col className="text-center">
                        <Typing
                            speed={50}
                            eraseSpeed={50}
                            text={["Confira mais projetos em https://github.com/albadauto"]}
                            displayTextRenderer={(text) => {
                                return (
                                    <h1>{text}</h1>
                                )
                            }} />
                    </Col>
                    : ""}

            </Row>
            <br /><br /><br />

            <Row>
                <Col className="text-center">
                    <Button variant="outline-primary" className="button-github" onClick={() => setTyping({ ...typing, linkedin: true })}>Linkedin</Button>
                </Col>
            </Row>
            <Row>
                {typing.linkedin ?
                    <Col className="text-center">
                        <Typing
                            speed={50}
                            eraseSpeed={50}
                            text={["Me siga no linkedin! https://www.linkedin.com/in/jose-adauto/"]}
                            displayTextRenderer={(text) => {
                                return (
                                    <h1>{text}</h1>
                                )
                            }} />
                    </Col>
                    : ""}

            </Row>


            <br /><br /><br /><br />

            <Row>
                <Col className="text-center">
                    <Button variant="outline-danger" className="button-github" onClick={() => setTyping({ ...typing, person_site: true })}>Site pessoal</Button>
                </Col>
            </Row>
            <Row>
                {typing.person_site ?
                    <Col className="text-center">
                        <Typing
                            speed={50}
                            eraseSpeed={50}
                            text={["Veja mais também em meu site: https://albadev.netlify.app/", "Portfólio, história e muito mais!"]}
                            displayTextRenderer={(text) => {
                                return (
                                    <h1>{text}</h1>
                                )
                            }} />
                    </Col>
                    : ""}

            </Row>
        </Container>

    )
}
