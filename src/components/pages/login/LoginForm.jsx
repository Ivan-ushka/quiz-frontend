import React, {useContext, useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";

function LoginForm() {
    const [name, setName] = useState('')
    const [validName, setValidName] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)

    const {store} = useContext(Context)

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center flex-column" style={{height: 600}}>
                <div className="d-flex p-5  border border-2 border-light-purple shadow rounded flex-column m-1 bg-white " style={{width: 600}}>
                    <InputGroup className="input-group input-group-lg mb-3">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faUser}  color={validName ? 'green' : 'red'}/></InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={e => setName(e.target.value)}
                        />
                    </InputGroup>

                    <InputGroup className="input-group input-group-lg mb-3">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock}  color={validPwd ? 'green' : 'red'}/></InputGroup.Text>
                        <Form.Control
                            placeholder="Password"
                            aria-label="Password"
                            type="password"
                            aria-describedby="basic-addon1"
                            onChange={e => setPwd(e.target.value)}
                        />
                    </InputGroup>

                    <div className="d-flex justify-content-center align-items-center">
                        <Button type="submit" className="w-25 btn-lg" onClick={() => store.login(name, pwd)}>Log in</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(LoginForm);