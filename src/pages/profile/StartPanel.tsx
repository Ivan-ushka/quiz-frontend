import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../state/store";
import {Col, Container, Row} from "react-bootstrap";
import UserImage from "./UserImage/UserImage";

const StartPanel = () => {
    const user = useSelector((state: RootState) => state.auth.user)

    return (
        <Container className="py-md-5">
            <Row className="text-white p-md-5 pb-5 mt-4 ">
                <Col md={4} className="d-flex justify-content-center align-items-center"><UserImage/></Col>
                <Col xs className="d-flex justify-content-center align-items-center mt-3"><h1>{user.name}</h1></Col>
            </Row>
        </Container>
    );
};

export default StartPanel;