import React, {useEffect, useState} from 'react';
import {IQuizForm} from "../../createQuiz/interfaces";
import QuizService from "../../../http/services/QuizService";
import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import StartPanel from "../StartPanel";
import {faBars, faGear, faShieldHalved} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-regular-svg-icons";
import BasicInfo from "../BasicInfo/BasicInfo";
import QuizzesRefactor from "../Quizzes/QuizzesRefactor";
import useIsMobile from "../../../hooks/useIsMobile";
import './style.css'
import ChangePassword from "../Security/ChangePassword";

const Profile = () => {
    const [authQuizzes, setAuthQuizzes] = useState<IQuizForm[]>([]);
    const [btnClick, setBtnClick] = useState<number>(0);
    const isMobile = useIsMobile()

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await QuizService.getAuthQuizzes()
            setAuthQuizzes(response.data)
        } catch (e: any) {
            console.log(e)
        }
    }

    const menuRight = () => {
        switch (btnClick) {
            case 0:
                return  <BasicInfo />
            case 1:
                return <QuizzesRefactor authQuizzes={authQuizzes} fetchData={fetchData} />
            case 2:
                return <ChangePassword />
        }
    }

    return (
        <>
            <StartPanel/>
            <div className="bg-white pb-5" style={{minHeight: '500px'}}>
                <Container>
                    <Row>
                        <Col xs={12} md={3} className="pt-md-4 pt-2">
                            <Stack gap={2} direction={isMobile ? "horizontal" : "vertical"} className="justify-content-center" >
                                <Button variant="div"
                                        onClick={() => setBtnClick(0)}
                                        className={`${btnClick === 0 ? "bg-primary-subtle" : "bg-white"} profile-btn`}>
                                    <FontAwesomeIcon icon={faGear} className="pe-1"/>
                                    Info
                                </Button>
                                <Button variant="div"
                                        onClick={() => setBtnClick(1)}
                                        className={`${btnClick === 1 ? "bg-primary-subtle" : "bg-white"} profile-btn`}>
                                    <FontAwesomeIcon icon={faBars} className="pe-1"/>
                                    Quizzes
                                </Button>
                                <Button variant="div"
                                        onClick={() => setBtnClick(2)}
                                        className={`${btnClick === 2 ? "bg-primary-subtle" : "bg-white"} profile-btn`}>
                                    <FontAwesomeIcon icon={faShieldHalved} className="pe-1"/>
                                    Security
                                </Button>
                                <Button variant="div"
                                        onClick={() => setBtnClick(3)}
                                        className={`${btnClick === 3 ? "bg-primary-subtle" : "bg-white"} profile-btn`}>
                                    <FontAwesomeIcon icon={faBell} className="pe-1"/>
                                    Notification
                                </Button>
                            </Stack>
                        </Col>
                        <Col xs={11} md={9} className="profile-menu-right rounded shadow-lg bg-white">
                            {menuRight()}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Profile;