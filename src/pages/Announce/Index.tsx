import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Form, FloatingLabel, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../api';
import "./style.css";
interface IProperty {
  title: string,
  price: number,
  location: string,
}
export default function Announce() {
  const [files, setFiles] = useState<any>(null);
  const [propertyData, setPropertyData] = useState<IProperty>({ title: "", price: 0, location: ""});
  const navigate = useNavigate();
  useEffect(() => {
    if(!sessionStorage.getItem("token")){
      navigate("/Login");
    }
  }, [])
  
  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("property_image", files);
      form.append("title", propertyData.title);
      form.append("price", propertyData.price.toString());
      form.append("location", propertyData.location);
      form.append("user_id", sessionStorage.getItem("id") as string | Blob)
      await toast.promise(api.post("/properties", form), {
        error: "Deu erro!",
        success: "Anúncio criado!",
        pending: "Criando anúncio..."
      });
    } catch (err) {
      console.log(err);
    }
  }
  function handleOnSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }
    setFiles(e.target.files[0]);
  }
  

  return (
    <Container className="border border-dark announce-container">
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col className='text-center mt-5'>
            <h1>Anúnciar um novo imóvel</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel label="Título">
              <Form.Control type="text" placeholder="title" value={propertyData.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPropertyData({ ...propertyData, title: e.target.value })} />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel label="Localização">
              <Form.Control type="text" placeholder="Location" value={propertyData.location} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPropertyData({ ...propertyData, location: e.target.value })} />
            </FloatingLabel>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <FloatingLabel label="Preço">
              <Form.Control type="number" placeholder="title" value={propertyData.price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPropertyData({ ...propertyData, price: e.target.valueAsNumber })} />
            </FloatingLabel>
          </Col>
          <Col className="mt-3">
            <Form.Control type="file" placeholder="Location" onChange={handleOnSelectFile} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="text-center">
            <Button className="button-geral" type="submit">Enviar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
