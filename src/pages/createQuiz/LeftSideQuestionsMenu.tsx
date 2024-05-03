import React from 'react';
import {Button, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";

interface LeftSideQuestionsMenuProps {
    numbQuestions: number,
    handleMenuQuestion: (index: number) => void,
    handleDeleteQuestion: (index: number) => void,
}

const LeftSideQuestionsMenu: React.FC<LeftSideQuestionsMenuProps> = ({
                                                                         numbQuestions,
                                                                         handleMenuQuestion,
                                                                         handleDeleteQuestion
                                                                     }) => {
    return (
        <>
            {new Array(numbQuestions).fill(1).map((item, index) =>
                <Container key={index} className="d-flex justify-content-center align-content-stretch my-2">

                    <Button onClick={() => handleMenuQuestion(index)}
                            className="w-100 bg-primary border-none text-white rounded p-1 p-lg-2 me-2"
                            type="submit">
                        Question №{' '}{index + 1}
                    </Button>

                    <Button className="shadow"
                            disabled={!Boolean(numbQuestions - 1)}
                            onClick={() => handleDeleteQuestion(index)}>
                        <FontAwesomeIcon icon={faTrashCan}/>
                    </Button>

                </Container>
            )}
        </>
    );
};

export default LeftSideQuestionsMenu;