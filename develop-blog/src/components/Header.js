import React, { Component } from 'react';
import {Button, Container, FormControl, Nav, Navbar, Form,} from 'react-bootstrap';
import logo from './logo192.png';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Blog from '../pages/Blog';



export default class Header extends Component {
  render() {
    return (
      <> 
      {/* Сокращенная запись объявления фрагментов, (для роутера) фрагмет позваляет форматировать список дочерних элементов, не создавая лишних узлов дом*/}
        <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />React site
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
            {/* Navbar.Toggle - кнопка которая будет отображаться при изменении масштаба(раскрывает) */}
            <Navbar.Collapse id="responsive-navbar-nav">
              {/*Navbar.Collapse - Как и что будет видно при нажатии на клавишу  */}
              <Nav className="mr-auto">
                <Nav.Link href="/">
                  Home
                </Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          {/* Определяет набор маршрутов, и кода какой то маршрут совпадает с url адресом, то этот маршрут выбирается для обработки */}
          <Switch>
            {/* Позволяет выбрать первый попавшийся маршрут и использоваться его ддя обработки */}
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/blog" component={Blog}/>
          </Switch>
        </Router>
      </>
    )
  }
}
