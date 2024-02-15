import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, InputGroup, Nav} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faArrowRight, faLock} from "@fortawesome/free-solid-svg-icons";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {Link} from "react-router-dom";

function LoginForm() {
    const [name, setName] = useState('')
    const [validName, setValidName] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)

    const {store} = useContext(Context)

    useEffect(() => {
        pwd.length > 3 ? setValidPwd(true) : setValidPwd(false)
    }, [pwd])


    useEffect(() => {
        name.length > 3 ? setValidName(true) : setValidName(false)
    }, [name])

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center flex-column" style={{height: 600}}>
                <div
                    className="d-flex p-5  border border-2 border-light-purple shadow rounded flex-column m-1 bg-white">
                    <InputGroup className="input-group input-group-lg mb-3">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faUser}
                                                                            color={validName ? 'green' : 'red'}/></InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={e => setName(e.target.value)}
                        />
                    </InputGroup>

                    <InputGroup className="input-group input-group-lg mb-3">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock}
                                                                            color={validPwd ? 'green' : 'red'}/></InputGroup.Text>
                        <Form.Control
                            placeholder="Password"
                            aria-label="Password"
                            type="password"
                            aria-describedby="basic-addon1"
                            onChange={e => setPwd(e.target.value)}
                        />
                    </InputGroup>


                    {store.error && <div className="text-center my-2 text-danger">{store.error}</div>}


                    <Button
                        type="submit"
                        className="btn-lg"
                        variant="secondary"
                        onClick={() => store.login(name, pwd)}>
                        Login
                    </Button>

                    <p className="m-0 text-center mt-3">Dont have an Account?
                        <Link to="/authorization/register" className="ps-1" style={{fontWeight: 500}}>Sign up!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default observer(LoginForm);