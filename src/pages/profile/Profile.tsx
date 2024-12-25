import React, {useEffect, useState} from 'react';
import {IQuizForm} from "../createQuiz/interfaces";
import QuizService from "../../http/services/QuizService";
import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import StartPanel from "./StartPanel";
import {faBars, faGear, faShieldHalved} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-regular-svg-icons";
import BasicInfo from "./BasicInfo";
import QuizzesRefactor from "./QuizzesRefactor";

const Profile = () => {
    const [authQuizzes, setAuthQuizzes] = useState<IQuizForm[]>([]);
    const [btnClick, setBtnClick] = useState<number>(0);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const response = await QuizService.getAuthQuizzes()
            setAuthQuizzes(response.data)
            console.log(response)
        } catch (e: any) {
            console.log(e)
        }
    }

    const menuRight = () => {
        switch (btnClick) {
            case 0:
                return  <BasicInfo />
            case 1:
                return <QuizzesRefactor authQuizzes={authQuizzes} />
        }
    }

    return (
        <>
            <StartPanel/>
            <div className="bg-white pb-5" style={{minHeight: '500px'}}>
                <Container>
                    <Row>
                        <Col xs={3} className="pt-4">
                            <Stack gap={2}>
                                <Button variant="div"
                                        onClick={() => setBtnClick(0)}
                                        className={`${btnClick === 0 ? "bg-primary-subtle" : "bg-white"} rounded p-3 px-4 m-1`}>
                                    <FontAwesomeIcon icon={faGear} className="pe-1"/>
                                    Basic info
                                </Button>
                                <Button variant="div"
                                        onClick={() => setBtnClick(1)}
                                        className={`${btnClick === 1 ? "bg-primary-subtle" : "bg-white"} rounded p-3 px-4 m-1`}>
                                    <FontAwesomeIcon icon={faBars} className="pe-1"/>
                                    Quizzes
                                </Button>
                                <Button variant="div"
                                        onClick={() => setBtnClick(2)}
                                        className={`${btnClick === 2 ? "bg-primary-subtle" : "bg-white"} rounded p-3 px-4 m-1`}>
                                    <FontAwesomeIcon icon={faShieldHalved} className="pe-1"/>
                                    Security
                                </Button>
                                <Button variant="div"
                                        onClick={() => setBtnClick(3)}
                                        className={`${btnClick === 3 ? "bg-primary-subtle" : "bg-white"} rounded p-3 px-4 m-1`}>
                                    <FontAwesomeIcon icon={faBell} className="pe-1"/>
                                    Notification
                                </Button>
                            </Stack>
                        </Col>
                        <Col style={{marginTop: "-30px"}}
                             className="px-5 py-4 rounded shadow-lg bg-white w-50 ">
                            {
                                menuRight()
                            }

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Profile;