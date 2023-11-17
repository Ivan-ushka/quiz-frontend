import React from 'react';
import {Button, Container, Form, Nav, Navbar, NavDropdown, Stack} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar expand="lg" className="mx-4 mx-md-0" style={{fontSize: '1.5rem'}}>
            <Container className="py-2">
                <Navbar.Brand href="Quiz" style={{fontSize: '1.5rem'}}>Quiz</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <Nav.Link href="/">Search</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/about">Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">

                        {/*<Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-secondary">Search</Button>
                        </Form>*/}
                        <Nav>
                            <Stack direction="horizontal" gap={2} className="m-auto">
                                <Nav.Link href="/sign-in"> <Button variant="secondary">Sign in</Button></Nav.Link>
                                <Nav.Link href="/"><Button variant="secondary">Log in</Button></Nav.Link>
                            </Stack>
                        </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;