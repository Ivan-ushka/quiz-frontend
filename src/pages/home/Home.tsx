import React from 'react';
import Header from "../../components/Header";
import {Button, Card, Container} from "react-bootstrap";

const Home = () => {
    return (
        <>
            <Header/>
            <Container className="d-flex justify-content-center flex-wrap p-sm-5 p-2 shadow">
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
            </Container>
            <Container className="d-flex flex-column align-items-center justify-content-center mt-4">
                <h1> All quizzes</h1>
            </Container>
        </>
    );
};

export default Home;