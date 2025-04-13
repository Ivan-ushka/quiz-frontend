import {Button, Container, Form, InputGroup} from "react-bootstrap";
import React, {useState} from "react";
import './style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import {changePwd} from "../../../http/actions/userActions";
import UserService from "../../../http/services/UserService";
import {useSelector} from "react-redux";
import {RootState} from "../../../state/store";

const ChangePassword = () => {
    const id = useSelector((state: RootState) => state.auth.user.id);

    const [pwd, setPwd] = useState<string>('')
    const [newPwd, setNewPwd] = useState<string>('')
    const [isValidPwd, setIsValidPwd] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const [notification, setNotification] = useState<string>('')

    const handleSave = async () => {
        if(newPwd.length < 3){
            setIsValidPwd(false);
            setTimeout(() => {
                setIsValidPwd(true);
            }, 3000);
            return;
        }

        try {
            const response = await changePwd(id, pwd, newPwd);
            setNotification(response);
            setError('')
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <Container className="d-flex justify-content-center flex-column align-items-center my-2">
            <h1 className="change-pwd-title mb-3">You can change password</h1>
            <InputGroup className="input-group input-group-lg mb-3">
                <InputGroup.Text id="password">
                    <FontAwesomeIcon icon={faLock}/>
                </InputGroup.Text>
                <Form.Control
                    placeholder="Your password"
                    aria-label="password"
                    type="password"
                    aria-describedby="password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
            </InputGroup>

            <InputGroup className="input-group input-group-lg mb-3">
                <InputGroup.Text id="confirm password">
                    <FontAwesomeIcon icon={faLock}/>
                </InputGroup.Text>
                <Form.Control
                    placeholder="New password"
                    type="password"
                    value={newPwd}
                    onChange={(e) => setNewPwd(e.target.value)}
                />
            </InputGroup>

            <div className="d-flex justify-content-center text-center" style={{minHeight: '55px'}}>
                <div style={{maxWidth: "250px"}}>
                    {!isValidPwd && <p className="text-danger mb-0">Your new password length must be at least 4 characters</p>}
                </div>
            </div>

            <Button variant="warning" className="mt-3" onClick={handleSave}>Save</Button>
        </Container>
    );
};

export default ChangePassword;