import React from 'react'
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import "./style.css";
export default function Home() {
  return (
    <>
      <div className="container-main">
        <Container>
          
          <Row>
            <Col className="text-center welcome">
              <h1>Bem vindo(a) à sua nova Casa!</h1>
              <h2>Aqui fazemos seu lar, sua propriedade!</h2>

              <h2>Confira os melhores preços na Imobi Project!</h2>
              <Button variant="secondary" className='button-start'>Começar</Button>
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
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://fotos.vivadecora.com.br/decoracao-casas-modernas-escada-de-alvenaria-com-iluminacao-e-canteiros-revistavd-201900-proportional-height_cover_medium.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://vejasp.abril.com.br/wp-content/uploads/2021/06/roberto-migotto-casa-de-praia-1.jpg?quality=70&strip=info"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.meujardins.com.br/img/casa_jardins_fachada_modelo_2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br /><br /><br />
      <Container>
        <Row>
          <Col className="text-center">
            <h1>O que é a Imobi Project?</h1>
          </Col>

          <Col className="border border-dark">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida nibh sit amet porttitor vestibulum. Vestibulum placerat malesuada massa at mollis. Proin imperdiet mauris sit amet maximus facilisis. In hac habitasse platea dictumst. Pellentesque sit amet erat id orci tincidunt lobortis. Etiam pulvinar tortor elit, ac placerat mi imperdiet hendrerit. </h4>
          </Col>

        </Row>
        <br /><br />
        <Row>

          <Col className="border border-dark">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida nibh sit amet porttitor vestibulum. Vestibulum placerat malesuada massa at mollis. Proin imperdiet mauris sit amet maximus facilisis. In hac habitasse platea dictumst. Pellentesque sit amet erat id orci tincidunt lobortis. Etiam pulvinar tortor elit, ac placerat mi imperdiet hendrerit. </h4>
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
