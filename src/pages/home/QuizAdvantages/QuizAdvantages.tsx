import React from 'react';
import {Card, CardBody, CardTitle, Col, Container, Row} from "react-bootstrap";
import {dataCards} from "../../../constants/homeImages";
import './style.css'
import useIsMobile from "../../../hooks/useIsMobile";

const QuizAdvantages = () => {
    const isMobile = useIsMobile();

    return (
        <div className="bg-white">
            <Container className="d-flex flex-column text-md-start text-center pt-5 px-5">
                <h2 className="mt-md-5 mt-2 fs-1 d-flex align-items-center">
                    Benefits of taking quizzes
                </h2>
                {isMobile ? (
                    <ul className="py-3 custom-list text-start">
                        {dataCards.map((card, index) => (
                            <li key={index} className="custom-list-item">
                                <span className="list-number">{index + 1}</span>
                                <span className="list-text">{card.title}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <Row className="justify-content-md-center py-5">
                        {dataCards.map((card, index) => (
                            <Col key={index} md={4} xs={12} className="mb-3">
                                <Card
                                    style={{
                                        backgroundImage: `${card.backgroundImage}`,
                                        backgroundSize: "cover",
                                        height: "400px",
                                    }}
                                >
                                    <CardBody>
                                        <CardTitle
                                            style={{ backgroundColor: "rgba(255, 255, 255, 0.45)" }}
                                            className="p-3 shadow-lg"
                                        >
                                            <h4>{card.title}</h4>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
};

export default QuizAdvantages;