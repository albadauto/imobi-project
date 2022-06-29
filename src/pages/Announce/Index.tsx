import React, { useState } from 'react'
import { Col, Container, Row, Form, FloatingLabel, Button } from 'react-bootstrap'
import { api } from '../../api';
import "./style.css";
interface IProperty{
  title: string,
  price: number,
  location: string,
  image: string
}
export default function Announce() {
  const [propertyData, setPropertyData] = useState<IProperty>({title: "", price: 0, location:"", image:""});
  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try{
      const response = api.post("/properties")
    }catch(err){
      console.log(err);
    }
  }
  return (
    <Container className="border border-dark announce-container">
      <Row>
        <Col className='text-center mt-5'>
          <h1>Anúnciar um novo imóvel</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <FloatingLabel label="Título">
            <Form.Control type="text" placeholder="title"/>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel label="Localização">
            <Form.Control type="text" placeholder="Location"/>
          </FloatingLabel>
        </Col>
      </Row>
     <br />
      <Row>
        <Col>
          <FloatingLabel label="Preço">
            <Form.Control type="text" placeholder="title"/>
          </FloatingLabel>
        </Col>
        <Col className="mt-3">
            <Form.Control type="file" placeholder="Location"/>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="text-center">
          <Button className="button-geral">Enviar</Button>
        </Col>
      </Row>
    </Container>
  )
}
