import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { api } from '../../api';
import "./style.css";
interface IProperty {
  title: string,
  location: string,
  price: number,
  property_image: string,
  name: string,
  id: number
}
export default function Property() {
  const [properties, setProperties] = useState<IProperty[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    api.get("/findAllPropertiesWithUser").then((response: AxiosResponse) => {
      setProperties(response.data.propertySearch)
      setLoading(false);
    })
      .catch((err: AxiosError) => console.log(err));
  }, [])
  return (
    <Container>
      <Row>

        <Col className="text-center mt-5">
          <Button variant="secondary" className="button-geral" href="/Announce">Anúnciar Imóvel</Button>

        </Col>
      </Row>
      {loading &&
        <Row>
          <Col className="text-center">
            <h2>Carregando...</h2>
          </Col>

        </Row>
      }
      <Row>

        {properties.map((val) => {
          return (
            <Card style={{ width: '18rem', marginBottom: "200px", marginTop: "100px" }}>
              <Card.Img variant="top" src={api.defaults.baseURL ? api.defaults.baseURL.substring(0, api.defaults.baseURL.length - 4) + `uploads/${val.property_image}` : ""} />
              <Card.Body>
              <Card.Title><b>R$ {val.price}</b></Card.Title>
                <Card.Title>{val.title} - {val.location}</Card.Title>
                <Card.Text>
                  {val.name}
                </Card.Text>
                <div className="text-center">
                <Button variant="outline-dark" href={`/SingleAnnounce/${val.id}`}>Conferir</Button>
                </div>
              </Card.Body>
            </Card>
          )
        })}
      </Row>

    </Container>
  )
}
