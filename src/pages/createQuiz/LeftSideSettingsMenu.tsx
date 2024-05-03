import React from 'react';
import {Button, Container} from "react-bootstrap";

interface LeftSideSettingsMenuProps {
    setNumbButtonSubmit: (index: string) => void
}

const LeftSideSettingsMenu: React.FC<LeftSideSettingsMenuProps> = ({setNumbButtonSubmit}) => {
    return (
        <Container className="d-flex flex-column justify-content-center align-content-stretch my-2">

            <Button type="submit"
                    onClick={() => setNumbButtonSubmit('goToSettings')}
                    className="w-100 p-2 my-2">
                Basic settings
            </Button>


            <Button type="submit"
                    onClick={() => setNumbButtonSubmit('goToAdditionalSettings')}
                    className="shadow w-100 p-2 my-2">
                Additional settings
            </Button>

        </Container>
    );
};

export default LeftSideSettingsMenu;