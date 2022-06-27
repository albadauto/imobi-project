import React, { useState } from 'react'
import { Col, Container, Row, Form, FloatingLabel, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { toast } from "react-toastify";
import "./style.css";
interface userModel{
  email:string,
  password: string
}
export default function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<userModel>({
    email:"",
    password:"",
  });

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try{
      const result = await api.post("/authenticate", userData);
      sessionStorage.setItem("token", result.data.token.token)
      navigate("/");
    }catch(err: any){
      toast.error(err.response.data.message);
    }
  }

  //console.log("email" in userData)
  return (
    <div className="login-container border border-dark">
      <Container >
        <Form onSubmit={handleOnSubmit}>
        <Row >
          <Col className="text-center">
            <h1>Login na Imobi Project</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel label="Email">
              <Form.Control type="email" placeholder='Email' value={userData.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, email: e.target.value})}/>
            </FloatingLabel>
          </Col>
        </Row>
        <br />
        <Row>
          <Col >
            <FloatingLabel label="Senha">
              <Form.Control type="password" placeholder='Password' value={userData.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, password: e.target.value})}/>
            </FloatingLabel>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center mt-5 ">
           <Button className="button-login" variant="secondary" type="submit">Login</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="text-center m">
           <Link to="/">Esqueci a senha</Link>
          </Col>
        </Row>

        <Row>
          <Col className="text-center m">
           <Link to="/Register">Não tem conta? Registre-se Já!</Link>
          </Col>
        </Row>

        
        </Form>
      </Container>
    </div>
  )
}
