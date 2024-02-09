import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar, Stack} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const Header = () => {

    const {store} = useContext(Context)
    return (
        <Navbar expand="lg" className="mx-4 mx-md-0" style={{fontSize: '1.5rem'}}>
            <Container className="py-2">
                <Navbar.Brand href="/" style={{fontSize: '1.5rem'}}>Quiz</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <Nav.Link href="/">Search</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        { store.isAuth && <Nav.Link href="/account">Account</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">

                       {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-secondary">Search</Button>
                        </Form>*/}
                    {
                        !store.isAuth ?
                        <Nav>
                            <Stack direction="horizontal" gap={2} className="m-auto">
                                <Nav.Link href="/sign-in"> <Button variant="secondary">Sign in</Button></Nav.Link>
                                <Nav.Link href="/login"><Button variant="secondary">Log in</Button></Nav.Link>
                            </Stack>
                        </Nav> :
                            <Button onClick={() => store.logout()}>Log out</Button>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default observer(Header);