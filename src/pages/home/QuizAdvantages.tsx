import React from 'react';
import {Card, CardBody, CardTitle, Col, Container, Row} from "react-bootstrap";
import {dataCards} from "../../constants/homeImages";

const QuizAdvantages = () => {
    return (
        <div className="bg-white">
            <Container className="d-flex flex-column text-start pt-5 px-5">
                <h2 className="mt-5"> Why it`s important to take quizzes?</h2>
                <Row className="justify-content-md-center py-5">
                    {
                        dataCards.map((card, index) =>
                            <Col key={index} md={4} xs={12} className="mb-3">
                                <Card style={{
                                    backgroundImage: `${card.backgroundImage}`,
                                    backgroundSize: 'cover',
                                    height: "400px"
                                }}>
                                    <CardBody>
                                        <CardTitle style={{backgroundColor: "rgba(255, 255, 255, 0.45)"}}
                                                   className="p-3 shadow-lg">
                                            <h4> {card.title}</h4>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default QuizAdvantages;