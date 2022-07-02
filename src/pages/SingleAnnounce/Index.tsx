import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Nav, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { api } from '../../api';
import "./style.css";
interface IProperty {
    title: string,
    location: string,
    price: number,
    property_image: string,
    name: string,
    id: number,
    email: string
}
export default function SingleAnnounce() {
    const { id } = useParams();
    const [property, setProperty] = useState<IProperty>();
    useEffect(() => {
        api.get(`/properties/${id}`).then((response: AxiosResponse) => {
            setProperty(response.data.result[0])
        })
    }, [])

    return (
        <Container>
            <Card className="container-card">
                <Card.Img variant="top" src={api.defaults.baseURL ? api.defaults.baseURL.substring(0, api.defaults.baseURL.length - 4) + `uploads/${property?.property_image}` : ""} />
                <Card.Body>
                    <Card.Text>
                        <h1>{property?.title}</h1>
                        <h3>R$ {property?.price}</h3>
                        <h4>{property?.name} - {property?.email}</h4>
                        <h6>{property?.location}</h6>
                    </Card.Text>
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                </Card.Body>
            </Card>


        </Container>

    )
}
