import React, { Component } from 'react'
import {Button, Container, FormControl, Nav, Navbar, Form,} from 'react-bootstrap'
import logo from './logo192.png'
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
      </>
    )
  }
}
