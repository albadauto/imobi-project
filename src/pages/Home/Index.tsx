import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
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
export default function Home() {
  const [propertyData, setPropertyData] = useState<IProperty[]>([]);

  useEffect(() => {
    api.get("/findAllPropertiesWithUser").then((response) => {
      setPropertyData(response.data.propertySearch.slice(0, 8));
    })
  }, [])

  return (
    <>
      <div className="container-main">
        <Container>

          <Row>
            <Col className="text-center welcome">
              <h1>Bem vindo(a) a sua nova Casa!</h1>
              <h2>Aqui fazemos seu lar, sua propriedade!</h2>

              <h2>Confira os melhores preços na Imobi Project!</h2>
              <Button variant="secondary" className='button-start' href="/Login">Começar</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <br /><br />

      <Container>
        <Row>
          <Col className="text-center">
            <h1>Nossos ultimos anúncios</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {propertyData.length > 0 ? propertyData.map((val) => {
            return (
              <Col>
                <Card border="dark" style={{ width: '18rem', marginBottom: 20 }}>
                  <Card.Img variant="top" src={api.defaults.baseURL ? api.defaults.baseURL.substring(0, api.defaults.baseURL.length - 4) + `uploads/${val.property_image}` : ""} />
                  <Card.Body>
                    <Card.Title>R$ {val.price}</Card.Title>
                    <Card.Text>
                      <h5>{val.title}</h5>
                      <h5>{val.location}</h5>

                    </Card.Text>
                    <div className='text-center'>
                      <Button variant="outline-dark" href={`/SingleAnnounce/${val.id}`}>Conferir</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )

          }) : <Row><Col className="text-center no-announces"><h1>Não há anúncios no momento :(</h1></Col></Row>}


        </Row>


      </Container>

      <br /><br /><br /><br /><br />
      <Container>
        <Row>
          <Col className="text-center">
            <h1>O que é a Imobi Project?</h1>
          </Col>

          <Col className="border border-dark">
            <h4>A Imobi Project é um projeto de site de imobiliarias criado e projetado por José Adauto Albarraz. O intuito do site é simples, simular de forma prática um site de compra e venda de imovéis, apenas auxiliando na comunicação entre comprador/vendedor. Além disso, o projeto é feito para complemento de portfólio, treino e composição de conhecimento</h4>
          </Col>

        </Row>
        <br /><br /><br /><br />
        <Row>

          <Col className="border border-dark">
            <h4>O Objetivo principal do site é demonstrar de forma prática o desenvolvimento de um sistema pequeno mas completo, de uma plataforma de ecommerce de vendas. Além disso, é importante dizer que o site não está no ar para fins comerciais, apenas para estudo. </h4>
          </Col>

          <Col className="text-center">
            <h1>Qual é o nosso objetivo?</h1>
          </Col>

        </Row>

      </Container>

      <br /><br /><br />
    </>
  )
}
