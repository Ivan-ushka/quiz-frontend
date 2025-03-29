import React, {useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../state/store";
import {registration} from "../../state/authAction";


function SignInForm() {
    const dispatch: AppDispatch = useDispatch();
    const error = useSelector((state: RootState) => state.auth.error);

    const [name, setName] = useState<string>('')
    const [validName, setValidName] = useState<boolean>(false)
    const [nameFocus, setNameFocus] = useState<boolean>(false);

    const [pwd, setPwd] = useState<string>('')
    const [validPwd, setValidPwd] = useState<boolean>(false)
    const [pwdFocus, setPwdFocus] = useState<boolean>(false);

    const [validConfirmPwd, setValidConfirmPwd] = useState<boolean>(false)
    const [confirmPwdFocus, setConfirmPwdFocus] = useState<boolean>(false);

    const [isCheckedTerms, setIsCheckedTerms] = useState<boolean>(false);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tempName = e.target.value;
        const isValidName = tempName.length > 3;

        setName(tempName);
        setValidName(isValidName);
    }

    const handleChangePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tempPwd = e.target.value;
        const isValidPwd = tempPwd.length > 3;

        setPwd(tempPwd);
        setValidPwd(isValidPwd);
    }

    const handleConfirmPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tempConfirmPwd = e.target.value;

        setValidConfirmPwd(tempConfirmPwd === pwd);
    }

    return (
        <Container className="d-flex align-items-center flex-column p-md-5 p-3">
            <div className="d-flex flex-column p-5 border border-2 shadow rounded m-1 bg-white">
                <InputGroup className="input-group input-group-lg mb-3">
                    <InputGroup.Text id="username">
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
                    <InputGroup.Text id="password">
                        <FontAwesomeIcon icon={faLock} color={validPwd ? 'green' : 'red'}/>
                    </InputGroup.Text>
                    <Form.Control
                        placeholder="Password"
                        aria-label="password"
                        type="password"
                        aria-describedby="password"
                        onChange={handleChangePwd}
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                </InputGroup>

                <InputGroup className="input-group input-group-lg mb-3">
                    <InputGroup.Text id="confirm password">
                        <FontAwesomeIcon icon={faLock} color={validConfirmPwd && pwd ? 'green' : 'red'}/>
                    </InputGroup.Text>
                    <Form.Control
                        placeholder="Repeat password"
                        aria-label="confirm password"
                        aria-describedby="confirm password"
                        type="password"
                        onChange={handleConfirmPwd}
                        onFocus={() => setConfirmPwdFocus(true)}
                        onBlur={() => setConfirmPwdFocus(false)}
                    />
                </InputGroup>

                <div className="d-flex justify-content-center text-center" style={{minHeight: '55px'}}>
                    <div style={{maxWidth: "250px"}}>
                        {error && <p className="text-danger mb-0">{error}</p>}
                        {nameFocus && !validName &&
                            <p className="mb-0">Your username should consist at least 4 letters</p>}
                        {pwdFocus && !validPwd &&
                            <p className="mb-0">Your password should consist at least 4 letters</p>}
                        {confirmPwdFocus && !validConfirmPwd &&
                            <p className="mb-0">Must match the first password input field</p>}
                    </div>
                </div>

                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        onChange={(e) => setIsCheckedTerms(e.target.checked)}
                    />
                </Form.Group>

                <Button type="submit"
                        className="btn-lg "
                        variant="warning"
                        disabled={!validName || !validPwd || !validConfirmPwd || !isCheckedTerms}
                        onClick={() => dispatch(registration(name, pwd))}>Sign in

                </Button>

                <div className="d-flex justify-content-center flex-column align-items-center flex-md-row mt-3">
                    <p className="m-0">Already have an Account?</p>
                    <Link to="/auth/login"
                          className="ps-1">
                        <h6 className="m-0"> Login now!</h6>
                    </Link>
                </div>
            </div>
        </Container>
    );
}

export default SignInForm;