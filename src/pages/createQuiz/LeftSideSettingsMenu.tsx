import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

interface  LeftSideSettingsMenuProps{
    setNumbButtonSubmit: (index: number) => void
}
const LeftSideSettingsMenu: React.FC<LeftSideSettingsMenuProps> = ({setNumbButtonSubmit}) => {
    return (
        <Container>
            <Row onClick={() => setNumbButtonSubmit(0)}>
                <Col as="button" type="submit"
                     className="bg-primary border-secondary-subtle shadow text-white rounded p-2 my-2">
                     Basic settings
                </Col>
            </Row>
            <Row onClick={() => setNumbButtonSubmit(6)}>
                <Col as="button" type="submit"
                     className="bg-primary border-secondary-subtle shadow text-white rounded p-2 my-2">
                     Additional settings
                </Col>
            </Row>
        </Container>
    );
};

export default LeftSideSettingsMenu;