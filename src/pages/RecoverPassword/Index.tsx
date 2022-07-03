import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { api } from '../../api';
import "./style.css";
interface IRecover {
    code?: string,
    password?: string,
    email?: string
}
interface IDisplay {
    display1: string;
    display2: string
}
export default function RecoverPassword() {
    const [email, setEmail] = useState<IRecover>({ email: "" });
    const [display, setDisplay] = useState<IDisplay>({
        display1: "block",
        display2: "none"
    });
    const [dataRecover, setDataRecover] = useState<IRecover>({
        code:"",
        password: ""
    })
    async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const result = api.post("/Recover/recoverPass", email);
            await toast.promise(result, {
                pending: "Verificando...",
                success: "Email enviado, verifique a caixa de entrada!",
                error: "Não foi possível encontrar o email informado"
            })

            setDisplay({ ...display, display1: "none", display2: "block" });

        } catch {
            console.log("erro!");
        }
    }

    async function handleVerifyCode(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const result = api.post("/Recover/verifyCode", dataRecover);
            await toast.promise(result, {
                pending: "Verificando...",
                success: "Senha atualizada!",
                error: "Não foi possivel verificar o código! tente novamente"
            })
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Container className="border border-dark recover-pass-main">
            <div style={{ display: display.display1 }}>
                <Row>
                    <Col className="text-center">
                        <h2>Recuperação de senha</h2>
                    </Col>
                </Row>
                <Form onSubmit={handleOnSubmit}>
                    <Row>
                        <Col className="text-center">
                            <FloatingLabel label="Digite o email para recuperação">
                                <Form.Control placeholder='Email' value={email.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail({ ...email, email: e.target.value })} />
                            </FloatingLabel>
                        </Col>

                    </Row>
                    <br />
                    <Row>
                        <Col className="text-center">
                            <Button variant="dark" className="button-geral" type="submit">Enviar código</Button>
                        </Col>
                    </Row>
                </Form>
            </div>

            <br />
            <div style={{ display: display.display2 }}>
                <Form onSubmit={handleVerifyCode}>
                    <Row>
                        <Col className="text-center">
                            <h3>Foi enviado um código de recuperação de senha para o seu email</h3>
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                            <FloatingLabel label="Código enviado no email">

                                <Form.Control placeholder="Código enviado no email" value={dataRecover?.code} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataRecover({...dataRecover, code: e.target.value})}/>

                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <FloatingLabel label="Nova senha">

                                <Form.Control placeholder="Nova senha" value={dataRecover?.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDataRecover({...dataRecover, password: e.target.value})}/>

                            </FloatingLabel>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col className="text-center">
                            <Button variant="dark" className="button-geral" type="submit">Enviar</Button>
                        </Col>
                    </Row>
                </Form>
            </div>

        </Container >
    )
}
