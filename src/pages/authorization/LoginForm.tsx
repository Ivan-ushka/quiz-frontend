import React, {useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../state/store";
import {login} from "../../state/authAction";

function LoginForm() {
    const dispatch: AppDispatch = useDispatch();
    const error = useSelector((state: RootState) => state.auth.error);

    const [name, setName] = useState<string>('')
    const [validName, setValidName] = useState<boolean>(false)
    const [nameFocus, setNameFocus] = useState<boolean>(false);

    const [pwd, setPwd] = useState<string>('')
    const [validPwd, setValidPwd] = useState<boolean>(false)
    const [pwdFocus, setPwdFocus] = useState(false);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tempName = e.target.value;
        const isValidName = tempName.length > 3;

        setValidName(isValidName);
        setName(isValidName ? tempName : '');
    }

    const handleChangePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tempPwd = e.target.value;
        const isValidPwd = tempPwd.length > 3;

        setValidPwd(isValidPwd);
        setPwd(isValidPwd ? tempPwd : '');
    }

    return (
        <Container className="d-flex align-items-center flex-column p-md-5 p-3">
            <div className="d-flex flex-column p-5 border border-2 shadow rounded m-1 bg-white">
                <InputGroup className="input-group input-group-lg mb-3">
                    <InputGroup.Text id="basic-addon1">
                        <FontAwesomeIcon icon={faUser} color={validName ? 'green' : 'red'}/>
                    </InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-label="username"
                        aria-describedby="username"
                        onChange={handleChangeName}
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                    />
                </InputGroup>

                <InputGroup className="input-group input-group-lg mb-3">
                    <InputGroup.Text id="basic-addon1">
                        <FontAwesomeIcon icon={faLock} color={validPwd ? 'green' : 'red'}/>
                    </InputGroup.Text>
                    <Form.Control
                        placeholder="Password"
                        aria-label="password"
                        aria-describedby="password"
                        type="password"
                        onChange={handleChangePwd}
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                </InputGroup>

                <div className="d-flex justify-content-center text-center">
                    <div style={{maxWidth: "250px"}}>
                        {error && <p className="text-danger">{error}</p>}
                        {nameFocus && !validName && <p>Your username should consist at least 4 letters</p>}
                        {pwdFocus && !validPwd && <p>Your password should consist at least 4 letters</p>}
                    </div>
                </div>

                <Button
                    type="submit"
                    className="btn-lg"
                    disabled={!validName || !validPwd}
                    onClick={() => dispatch(login(name, pwd))}>
                    Login
                </Button>

                <div className="d-flex justify-content-center flex-column align-items-center flex-md-row mt-3">
                    <p className="m-0">Don`t have an account?</p>
                    <Link to="/auth/register"
                          className="ps-1">
                       <h6 className="m-0"> Sign up!</h6>
                    </Link>
                </div>
            </div>
        </Container>
    );
}

export default LoginForm;