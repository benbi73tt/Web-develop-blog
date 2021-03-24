import React, { Component } from 'react';
import {Container,Tab, Nav,Row,Col } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
          <Container className="cont">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant='pills' className='flex-column mt-2'>
                            <Nav.Item>
                                <Nav.Link eventKey="first" >Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" >Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >Programming</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth " >Fraemwors</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth" >Libraries</Nav.Link>
                            </Nav.Item>
                            
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <img src="https://artimpl.ru/upload/iblock/c58/c58844d13a89b98298096ea667b125ec.jpg"/>
                                <p>Одностраничный адаптивный сайт "Bumblebee"</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img src="https://biznes-po-franshize.ru/wp-content/uploads/2017/06/depositphotos_18177429-web-design-concept.jpg"/>
                                <p>Одностраничный адаптивный сайт "Bumblebee"</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img src="https://up-sait.ru/wp-content/uploads/2020/01/14467646_1920.jpg"/>
                                <p>Одностраничный адаптивный сайт "Bumblebee"</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img src="https://lk-tricolor.ru/wp-content/uploads/2020/08/razrabotka-saitov-poltava-price.jpg"/>
                                <p>Одностраничный адаптивный сайт "Bumblebee"</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <img src="https://artimpl.ru/upload/iblock/c58/c58844d13a89b98298096ea667b125ec.jpg"/>
                                <p>Одностраничный адаптивный сайт "Bumblebee"</p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
              </Tab.Container>
          </Container>
        )
    }
}
