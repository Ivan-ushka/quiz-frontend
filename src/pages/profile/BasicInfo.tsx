import React from 'react';
import {Button, Stack} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen} from "@fortawesome/free-solid-svg-icons";

const BasicInfo = () => {
    return (
        <div>
            <Stack gap={2}>
                <div>
                    <h3>Name</h3>
                    <p>{}</p>
                    <Button><FontAwesomeIcon icon={faPen} /></Button>
                </div>
            </Stack>
        </div>
    );
};

export default BasicInfo;