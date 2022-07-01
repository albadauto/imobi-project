import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { api } from '../../api';
interface IProperty {
  title: string,
  location: string,
  prince: number,
  property_image: string
}
export default function Property() {
  const [properties, setProperties] = useState<IProperty[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    api.get("/properties").then((response: AxiosResponse) => {
      setProperties(response.data.result)
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
                <Card.Title>{val.title}</Card.Title>
                <Card.Text>
                  {val.location}
                </Card.Text>
                <Button variant="primary">Conferir</Button>
              </Card.Body>
            </Card>
          )
        })}
      </Row>

    </Container>
  )
}
