import React, { useState } from 'react'
import { Col, Container, Row, Form, FloatingLabel, Button } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { api } from '../../api';
import "./style.css";
interface userDataModel {
    name: string,
    email: string,
    phone: string,
    city: string,
    district: string,
    number: number,
    password: string
}
export default function Register() {
    const [passForCheck, setPassForCheck] = useState<string>();
    const [userData, setUserData] = useState<userDataModel>(
        { name: "", email: "", phone: "", city: "", district: "", number: 0, password: "" }
    );
    const [checkBox, setCheckBox] = useState<boolean>(false);

    async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            if(userData.password === passForCheck && checkBox){
                const response = await api.post("/registerUser", userData);
                toast.success(response.data.message);
            }else{
                toast.error("Error: Verifique as informações inseridas e tente novamente")
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
        <Container className="border border-dark register-container">
            <Row>
                <Col className="text-center ">
                    <h1>Registre-se e venha ser um Imobi Client</h1>
                </Col>
            </Row>
            <Form onSubmit={handleOnSubmit}>
                <Row>
                    <Col xs={4}>
                        <FloatingLabel label="Nome">

                            <Form.Control type="text" placeholder="nome" value={userData.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, name: e.target.value })} />

                        </FloatingLabel>
                    </Col>
                    <Col xs={4}>
                        <FloatingLabel label="Email">

                            <Form.Control type="email" placeholder="Email" value={userData.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, email: e.target.value })} />

                        </FloatingLabel>
                    </Col>
                    <Col xs={4}>
                        <FloatingLabel label="Telefone">

                            <Form.Control type="text" placeholder="Email" value={userData.phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, phone: e.target.value })} />

                        </FloatingLabel>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={4}>
                        <FloatingLabel label="Cidade">

                            <Form.Control type="text" placeholder="nome" value={userData.city} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, city: e.target.value })} />

                        </FloatingLabel>
                    </Col>
                    <Col xs={4}>
                        <FloatingLabel label="Bairro">

                            <Form.Control type="text" placeholder="Email" value={userData.district} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, district: e.target.value })} />

                        </FloatingLabel>
                    </Col>

                    <Col xs={4}>
                        <FloatingLabel label="Numero">

                            <Form.Control type="number" placeholder="Email" value={userData.number} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, number: e.target.valueAsNumber })} />

                        </FloatingLabel>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={6}>
                        <FloatingLabel label="Senha">

                            <Form.Control type="password" placeholder="nome" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, password: e.target.value })} />

                        </FloatingLabel>
                    </Col>
                    <Col xs={6}>
                        <FloatingLabel label="Repita a Senha">

                            <Form.Control type="password" placeholder="password" value={passForCheck} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassForCheck(e.target.value)} />

                        </FloatingLabel>
                    </Col>
                </Row>
                <br />
                <Row>

                    <Col xs={1} style={{ marginRight: -70 }}>
                        <Form.Check aria-label="option 1" onChange={() => setCheckBox(!checkBox)}/>
                    </Col>
                    Eu aceito todos os termos de uso da Imobi Project
                </Row>

                <Row>
                    <Col className="text-center">
                        <Button variant="secondary" className="button-geral" type="submit">Registrar-se</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
