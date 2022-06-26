import React, { useState } from 'react'
import { Col, Container, Row, Form, FloatingLabel, Button } from 'react-bootstrap'
import "./style.css";
interface userModel{
  email:string,
  password: string
}
export default function Login() {
  const [userData, setUserData] = useState<userModel>({
    email:"",
    password:"",
  });

  function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
  }
  return (
    <div className="login-container border border-dark">
      <Container >
        <Form>
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
              <Form.Control type="password" placeholder='Password' value={userData.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({...userData, password: e.target.value})} />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-5 ">
           <Button className="button-login" variant="secondary" type="submit">Login</Button>
          </Col>
        </Row>
        </Form>
      </Container>
    </div>
  )
}
