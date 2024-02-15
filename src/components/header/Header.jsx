import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar, Stack} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import './header.css'
import CustomButton from "./CustomButton";

const Header = () => {

    const {store} = useContext(Context)
    return (
        <Navbar expand="lg" className="mx-4 mx-md-0 text-light">
            <Container className="py-2">
                <Navbar.Brand href="/" className="text-light">
                    <Button className="hover-effect text-decoration-none py-1 px-2" variant="link"><h2 className="mb-0">Quiz</h2></Button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <Nav.Link href="/">
                            <CustomButton data="Seacrh" />
                        </Nav.Link>
                        <Nav.Link href="/about">
                            <CustomButton data="About" />
                        </Nav.Link>
                        {store.isAuth &&
                            <Nav.Link href="/account"><CustomButton data="Account" /></Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {!store.isAuth ?
                            <Stack direction="horizontal" gap={2} className="m-auto">
                                <Nav.Link href="/authorization/register"> <Button variant="secondary">Sign in</Button></Nav.Link>
                                <Nav.Link href="/authorization/login"><Button variant="secondary">Log in</Button></Nav.Link>
                            </Stack> :
                            <Stack direction="horizontal" gap={2} className="m-auto">
                                <Button variant="secondary"  onClick={() => store.logout()}>Log out </Button>
                            </Stack>
                        }
                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default observer(Header);