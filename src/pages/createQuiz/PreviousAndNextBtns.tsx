import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

interface PreviousAndNextBtnsProps {
    currentPage: string,
    setNumbButtonSubmit: (action: string) => void,
}

const PreviousAndNextBtns: React.FC<PreviousAndNextBtnsProps> = ({currentPage, setNumbButtonSubmit}) => {
    if (currentPage === 'Questions') {
        return (
            <Col className="d-flex justify-content-center">
                <Button type="submit"
                        style={{width: "120px"}}
                        className="d-flex align-items-center justify-content-center shadow p-2"
                        onClick={() => setNumbButtonSubmit('goToAddQuestion')}>
                    Add question
                </Button>
            </Col>
        );
    } else {
        return (
            <Col className="d-flex justify-content-center">
                <Button type="submit"
                        style={{width: "120px"}}
                        className="d-flex align-items-center justify-content-center shadow p-2 me-2"
                        onClick={() => setNumbButtonSubmit('goToPreviousPage')}
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="pe-1"/>
                    Previous
                </Button>

                <Button type="submit"
                        className="d-flex align-items-center justify-content-center shadow p-2 "
                        style={{width: "120px"}}
                        onClick={() => setNumbButtonSubmit('goToNextPage')}
                >
                    Next
                    <FontAwesomeIcon icon={faArrowRight} className="ps-1"/>
                </Button>

            </Col>
        );
    }
};

export default PreviousAndNextBtns;