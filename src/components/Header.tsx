import React from 'react';
import {Button, Container, Dropdown, DropdownButton, Nav, Navbar, Stack} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {logout} from "../state/authAction";

const Header = () => {
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);
    const dispatch: any = useDispatch();

    return (
        <Navbar expand="lg" className="mx-4 mx-md-0 text-light">
            <Container className="py-2">
                <Navbar.Brand href="/" className="text-light">
                    <Button className="hover-effect text-decoration-none py-1 px-2" variant="link"><h2
                        className="mb-0">Quiz</h2></Button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <Nav.Link href="/">
                            <Button> Search </Button>
                        </Nav.Link>
                        <Nav.Link href="/about">
                            <Button>Your quizzes</Button>
                        </Nav.Link>
                        <Nav.Link href="/information">
                            <Button>Information</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {!isAuth ?
                            <Stack direction="horizontal" gap={2} className="m-auto">
                                <Nav.Link href="/authorization/register"> <Button variant="secondary">Sign
                                    in</Button></Nav.Link>
                                <Nav.Link href="/authorization/login"><Button variant="secondary">Log
                                    in</Button></Nav.Link>
                            </Stack> :
                            <Stack direction="horizontal" gap={2} className="m-auto">
                                <DropdownButton title={<FontAwesomeIcon icon={faUser} fontSize={25}/>}
                                                drop="down-centered" variant="secondary">
                                    <Dropdown.Item href="/profile"> Profile </Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item onClick={() => dispatch(logout())}>Log out</Dropdown.Item>
                                </DropdownButton>
                            </Stack>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;