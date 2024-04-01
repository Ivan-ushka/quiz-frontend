import React, {useEffect, useState} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";

import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {registration} from "../../state/authAction";


function SignInForm() {
    const [name, setName] = useState('')
    const [validName, setValidName] = useState(false)
    const [nameFocus, setNameFocus] = useState(false);

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false);

    const [confirmPwd, setConfirmPwd] = useState('')
    const [validConfirmPwd, setValidConfirmPwd] = useState(false)
    const [confirmPwdFocus, setConfirmPwdFocus] = useState(false);

    useEffect(() => {
        pwd.length > 3 ? setValidPwd(true) : setValidPwd(false)
    }, [pwd])

    useEffect(() => {
        pwd === confirmPwd ? setValidConfirmPwd(true) : setValidConfirmPwd(false)
    }, [pwd, confirmPwd])

    useEffect(() => {
        name.length > 3 ? setValidName(true) : setValidName(false)
    }, [name])

    const error = useSelector((state: RootState) => state.auth.error);
    const dispatch: any = useDispatch();

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center flex-column" style={{height: 600}}>
                <div className="d-flex p-5  border border-2 border-light-purple shadow rounded flex-column m-1 bg-white">
                    <InputGroup className="input-group input-group-lg mb-3">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faUser}
                                                                            color={validName ? 'green' : 'red'}/></InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={e => setName(e.target.value)}
                            onFocus={() => setNameFocus(true)}
                            onBlur={() => setNameFocus(false)}
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
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                    </InputGroup>

                    <InputGroup className="input-group input-group-lg mb-3">
                        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock}
                                                                            color={validConfirmPwd && pwd ? 'green' : 'red'}/></InputGroup.Text>
                        <Form.Control
                            placeholder="Repeat password"
                            aria-label="Checkpassword"
                            aria-describedby="basic-addon1"
                            type="password"
                            onChange={e => setConfirmPwd(e.target.value)}
                            onFocus={() => setConfirmPwdFocus(true)}
                            onBlur={() => setConfirmPwdFocus(false)}
                        />
                    </InputGroup>

                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>

                    <div style={{fontWeight: 300, fontSize: 20}}
                         className="d-flex align-items-center justify-content-center flex-column">
                        {nameFocus && !validName ? <p>Your username should consist at least 4 letters</p> : <></>}
                        {pwdFocus && !validPwd ? <p>Your password should consist at least 4 letters</p> : <></>}
                        {confirmPwdFocus && !validConfirmPwd ?
                            <p>Must match the first password input field.</p> : <></>}
                    </div>

                    {error && <div className="text-center my-2 text-danger">{error}</div>}

                    <Button type="submit"
                            className="btn-lg "
                            variant="warning"
                            onClick={() => dispatch(registration(name, pwd))}>Sign in

                    </Button>
                    <p  className="m-0 text-center mt-3">Already have an Account?
                        <Link to="/authorization/login" className="ps-1" style={{fontWeight: 500}}>Login now!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;