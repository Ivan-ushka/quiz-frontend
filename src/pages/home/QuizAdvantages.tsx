import React from 'react';
import {Card, CardBody, CardTitle, Col, Container, Row} from "react-bootstrap";

const QuizAdvantages = () => {
    const dataCards = [
        {
            title: "Learn your audience",
            backgroundImage: `url(https://m-files.cdnvideo.ru/lpfile/6/e/b/6ebc7be4c0a11a6a3006493afea15508.svg?20964929)`,
        },
        {
            title: "Educational goals",
            backgroundImage: `url(https://th.bing.com/th/id/OIG2.rhq.WeB1gApx0dL6FNNh?pid=ImgGn)`,
        },
        {
            title: "Entertainment goals",
            backgroundImage: `url(https://img.freepik.com/premium-vector/happy-children-jumping-on-summer-meadow-background-illustration_614983-7375.jpg?w=740)`,
        },
    ]

    return (
        <div className="bg-white">
            <Container className="d-flex flex-column text-start pt-5">
                <Container>
                    <h3 className="mt-5"> Why do I need a quiz?</h3>
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
            </Container>
        </div>
    );
};

export default QuizAdvantages;