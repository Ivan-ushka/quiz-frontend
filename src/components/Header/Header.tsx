import React from 'react';
import {Button, Container, Dropdown, Nav, Navbar, Stack} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {logout} from "../../state/authAction";
import {Link} from "react-router-dom";
import '../style.css'
import useIsMobile from "../../hooks/useIsMobile";
import './style.css'

const Header = () => {
    const dispatch: any = useDispatch();
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);
    const isLoading: boolean = useSelector((state: RootState) => state.auth.isLoading);
    const isMobile = useIsMobile()

    return (
        <Navbar expand="md" className="text-dark mx-md-0 bg-light">
            <Container className="py-3 px-md-0 px-5">
                <Navbar.Brand>
                    <Link className="text-decoration-none text-black" to="/">
                        <h3>Quiz</h3>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle/>

                <Navbar.Collapse>
                    <Nav>
                        <Link to="/search" className="link-dark text-decoration-none mx-md-2 mx-0">
                            <h3 className="adaptive-font-size">Search</h3>
                        </Link>
                        <Link to="/information" className="link-dark text-decoration-none mx-md-2 mx-0">
                            <h3 className="adaptive-font-size">Information</h3>
                        </Link>
                        {
                            isMobile && !isLoading && isAuth &&
                            <Link to="/profile" className="link-dark text-decoration-none mx-md-2 mx-0">
                                <h3 className="adaptive-font-size">Profile</h3>
                            </Link>
                        }
                        {
                            isMobile && !isLoading && isAuth &&
                            <div onClick={() => dispatch(logout())}
                                 className="link-dark text-decoration-none mx-md-2 mx-0">
                                <h3 className="adaptive-font-size">Logout</h3>
                            </div>
                        }
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Stack direction={isMobile ? "vertical" : "horizontal"} gap={isMobile ? 0 : 2} className={isMobile ? "m-0" : "m-auto"}>
                            {!isLoading && !isAuth ?
                                <>
                                    {
                                        isMobile ?
                                            <>
                                                <div>
                                                    <Link to="/auth/register" className="link-dark text-decoration-none mx-md-2 mx-0">
                                                        <h3 className="adaptive-font-size text-primary"> Sign in</h3>
                                                    </Link>
                                                </div>

                                                <Link to="/auth/login" className="link-dark text-decoration-none mx-md-2 mx-0">
                                                    <h3 className="adaptive-font-size text-primary"> Log in</h3>
                                                </Link>
                                            </>
                                            :
                                            <>
                                                <Link to="/auth/register">
                                                    <Button variant="warning">
                                                        Sign in
                                                    </Button>
                                                </Link>
                                                <Link to="/auth/login">
                                                    <Button variant="primary">
                                                        Log in
                                                    </Button>
                                                </Link>
                                            </>
                                    }


                                </>
                                :
                                <Dropdown drop="down-centered">
                                    {
                                        !isMobile && <Dropdown.Toggle
                                            id="circle-dropdown-toggle"
                                            className="p-2 px-3 mx-5 rounded-circle"
                                        >
                                            <FontAwesomeIcon icon={faUser} fontSize={25}/>
                                        </Dropdown.Toggle>

                                    }

                                    <Dropdown.Menu>
                                        <Dropdown.Item as="button">
                                            <Link to="/profile"
                                                  className="text-decoration-none link-dark rounded-circle">
                                                <p className="w-100 mb-0">
                                                    Profile
                                                </p>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Divider/>

                                        <Dropdown.Item onClick={() => dispatch(logout())}>
                                            Log out
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            }
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Header;