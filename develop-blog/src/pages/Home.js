import React, { Component } from 'react';
import CarouselBox from '../components/carouselBox';
import {Container, CardDeck, Card, Button} from 'react-bootstrap';
export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4"> Our team</h2>
                <CardDeck className="m-4">
                    <Card bg="warning">
                        <Card.Img variant="top"
                        src="https://bi-school.ru/wp-content/uploads/2018/02/beskonfliktnaya-komanda.jpg"/>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            14 февраля 2018 года. 
                            Бесплатный вебинар: Как создавать беск
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>    
                    </Card>
                    <Card bg="info"> 
                        <Card.Body>
                            <Card.Title>QA</Card.Title>
                            <Card.Text>
                            Синергия команды: кейс применения супервизии в бизнесе

                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>    
                        <Card.Img variant="bottom"
                        src="https://coachuniver.ru/wp-content/uploads/2020/10/1558355479_807140_ea3e2870c2b94fb8a6ab747058f4246f_mv2.jpg"/>
                    </Card>
                    <Card border="succes" text="primary">
                        <Card.Img variant="top"
                        src="https://d1ac9zce9817ms.cloudfront.net/images/5-reasons-to-work-in-canada-1.jpg"/>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                            14 февраля 2018 года. 
                            Бесплатный вебинар: Как создавать беск
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>    
                    </Card>
                </CardDeck>
            </Container>
            </>
        );
    }
}
