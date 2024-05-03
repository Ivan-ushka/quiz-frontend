import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";

interface SettingsOrQuizPanelProps{
    setNumbButtonSubmit: (index: string) => void
}
const SettingsOrQuizBtns: React.FC<SettingsOrQuizPanelProps> = ({setNumbButtonSubmit}) => {

    return (
        <Row className="justify-content-md-center pt-2 mb-4">
            <Col className="d-flex justify-content-end">
                <Button type="submit" className="shadow"
                        onClick={(event) => setNumbButtonSubmit('goToSettings')}>
                    <FontAwesomeIcon icon={faPen} className="pe-1"/>
                    Settings
                </Button>
            </Col>
            <Col className="d-flex justify-content-start">
                <Button type="submit" className="shadow"
                        onClick={(event) => setNumbButtonSubmit('goToQuestions')}>
                    Questions
                </Button>
            </Col>
        </Row>
    );
};

export default SettingsOrQuizBtns;