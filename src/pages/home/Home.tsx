import React from 'react';
import {Button, Card, CardBody, CardTitle, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import QuizAdvantages from "./QuizAdvantages";

const Home = () => {
    return (
        <>
           {/* <Container className="d-flex justify-content-center flex-wrap p-sm-5 p-2 shadow">
                <Card className="shadow" style={{width: '20rem'}}>
                    <Card.Img variant="bottom" src="https://img.freepik.com/free-photo/laughing-people-sharing-with-ideas-in-office_23-2147787527.jpg?w=996&t=st=1700216441~exp=1700217041~hmac=8b9cb30223476eeea0e4cbb46c1701a96e2905ab84eeb65119248b5c3019ab18" />
                    <Card.Body>
                        <Card.Title>Welcome to Quiz site</Card.Title>
                        <Card.Text>
                            Have fun with your friends and get knowledge together
                        </Card.Text>
                        <Button variant="secondary">Go to quizes</Button>
                    </Card.Body>
                </Card>
                <Card className="ms-sm-5 shadow mt-3 mt-lg-0 " style={{width: '40rem'}}>
                    <Card.Body className="d-flex align-items-center text-center justify-content-center flex-column">
                        <Card.Title>Advantages of taking quizzes</Card.Title>
                        <Card.Text>

                                Knowledge retention:<p className="mb-1">Quizzes reinforce and help retain information.</p>
                                Active learning:<p className="mb-1"> Quizzes promote active engagement and understanding.</p>
                                Assessment of understanding:<p className="mb-1"> Quizzes assess your grasp of the subject.</p>
                                Motivation and engagement:<p className="mb-1"> Quizzes make learning fun and engaging.</p>
                                Confidence building:<p className="mb-1"> Quizzes boost confidence and validate progress.</p>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>*/}
            <Container style={{height: "87vh"}} className=" text-white d-flex text-center align-items-center justify-content-center p-5 flex-column">
                <h1 style={{fontWeight: 700, fontSize: "72px"}}>Create quiz</h1>
                <h3 className="p-1">Create and launch a quiz at the <br/> level of the best quiz studios</h3>
                <Container className="d-flex justify-content-center p-3">
                    <Link to="create-quiz"> <Button size="lg" variant="warning" className="py-3 m-1 shadow-lg" style={{height: 70, width: 207}}>Create quiz</Button></Link>
                    <Button size="lg" className="py-2 m-1 shadow-lg" style={{height: 70, width: 207}}>Do existing quizzes</Button>
                </Container>
            </Container>
            <QuizAdvantages />
        </>
    );
};

export default Home;