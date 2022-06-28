import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Form, FloatingLabel } from 'react-bootstrap'
import { api } from '../../api';
import "./style.css";
interface IUser {
    name: string,
    email: string,
    phone: string,
    city: string,
    district: string,
    number: number,
}
export default function MyAccount() {
    const [userData, setUserData] = useState<IUser>();
    useEffect(() => {
        async function findUserById() {
            try {
                const res = await api.get(`/user/findUserById/${sessionStorage.getItem("id")}`)
                setUserData(res.data.result)
            } catch (err) {
                console.log(err)
            }
        }
        findUserById();
    }, [])
    return (
        <Container className="myaccount-container border border-dark">
            <Row>
                <Col className="text-center mt-5">
                    <h1>Minha Conta</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel label="Nome">
                        <Form.Control type="text" disabled placeholder="Nome" value={userData?.name} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel label="Email">
                        <Form.Control type="text" disabled placeholder="Email" value={userData?.email} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel label="Telefone">
                        <Form.Control type="text" disabled placeholder="Telefone" value={userData?.phone}/>
                    </FloatingLabel>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <FloatingLabel label="Cidade">
                        <Form.Control type="text" disabled placeholder="Cidade" value={userData?.city} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel label="Bairro">
                        <Form.Control type="text" disabled placeholder="Bairro" value={userData?.district}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel label="Número">
                        <Form.Control type="number" disabled placeholder="Número" value={userData?.number} />
                    </FloatingLabel>
                </Col>
            </Row>
        </Container>
    )
}
