import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

interface LeftSideQuestionsMenuProps{
    numbQuestions: number,
    handleMenuQuestion: (index: number) => void,
    handleDeleteQuestion: (index: number) => void,
}
const LeftSideQuestionsMenu: React.FC<LeftSideQuestionsMenuProps> = ({numbQuestions, handleMenuQuestion, handleDeleteQuestion}) => {
    return (
        <>
            {new Array(numbQuestions).fill(1).map((item, index) =>
                <Container key={index}>
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col as="button" type="submit" md={10} sm={7}
                             onClick={() => handleMenuQuestion(index)}
                             className="bg-primary border-secondary-subtle shadow text-white rounded p-1 p-lg-2 my-2">
                            Question №{' '}{index + 1}
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center" sm={2}>
                            <Button className="border-secondary shadow"
                                    disabled={!Boolean(numbQuestions - 1)}
                                    onClick={() => handleDeleteQuestion(index)}>
                                <FontAwesomeIcon icon={faTrashCan}/>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default LeftSideQuestionsMenu;