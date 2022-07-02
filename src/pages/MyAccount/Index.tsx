import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Form, FloatingLabel, Button, Table } from 'react-bootstrap'
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
interface IProperty {
    title: string,
    location: string,
    price: number,
    id: number
}
export default function MyAccount() {
    const [userData, setUserData] = useState<IUser>();
    const [property, setProperty] = useState<IProperty[]>([]);
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

        async function getAllProperties() {
            try {
                const response = await api.get(`/findAllPropertiesIdUser/${sessionStorage.getItem("id")}`)
                setProperty(response.data.propertySearch);
            } catch (err) {
                console.log(err);
            }
        }
        getAllProperties();
    }, [])
    async function handleDeleteProperty(id: number){
        try{
            await api.delete(`/deleteProperty/${id}`)
            window.location.href = "/MyAccount";
        }catch(err){
            console.log(err);
        }
    }
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
                        <Form.Control type="text" disabled placeholder="Telefone" value={userData?.phone} />
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
                        <Form.Control type="text" disabled placeholder="Bairro" value={userData?.district} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel label="Número">
                        <Form.Control type="number" disabled placeholder="Número" value={userData?.number} />
                    </FloatingLabel>
                </Col>
            </Row>
            <br />
            <Row>
                <Col className="text-center">
                    <h1>Meus anúncios</h1>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Localização</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {property.map((val) => {
                        return (
                            <tr>
                                <td>{val.title}</td>
                                <td>{val.price}</td>
                                <td>{val.location}</td>
                                <td className="text-center">
                                    <Button variant="danger" onClick={() => handleDeleteProperty(val.id)}>Deletar</Button>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </Table>
        </Container>
    )
}
