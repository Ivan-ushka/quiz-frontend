import React from 'react';
import {Button, Container, Dropdown, DropdownButton, Nav, Navbar, Stack} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {logout} from "../state/authAction";

const Header = () => {
    const dispatch: any = useDispatch();
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);
    const isLoading: boolean = useSelector((state: RootState) => state.auth.loading);
    console.log('auth', isAuth)
    console.log('load', isLoading)


    return (
        <Navbar expand="lg" className=" text-dark mx-md-0  bg-light">
            <Container className="py-2">
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <h2>Quiz</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">
                            <h3>Search</h3>
                        </Nav.Link>
                        <Nav.Link href="/my-quizzes">
                            <h3>My quizzes</h3>
                        </Nav.Link>
                        <Nav.Link href="/information">
                            <h3>Information</h3>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {isLoading ? <></> :
                            <div>
                                <Stack direction="horizontal" gap={2} className="m-auto">
                                    {!isAuth ?
                                        <>
                                            <Nav.Link href="/authorization/register"> <Button variant="warning">Sign
                                                in</Button></Nav.Link>
                                            <Nav.Link href="/authorization/login"><Button>Log
                                                in</Button></Nav.Link></>
                                        :
                                        <>
                                            <DropdownButton title={<FontAwesomeIcon icon={faUser} fontSize={25}/>}
                                                            drop="down-centered" className="px-5">
                                                <Dropdown.Item href="/profile"> Profile </Dropdown.Item>
                                                <Dropdown.Divider/>
                                                <Dropdown.Item onClick={() => dispatch(logout())}>Log
                                                    out</Dropdown.Item>
                                            </DropdownButton>
                                        </>

                                    }
                                </Stack>
                            </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;