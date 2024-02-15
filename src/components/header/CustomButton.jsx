import React from 'react';
import {Button} from "react-bootstrap";
import "./header.css"

const CustomButton = ({data}) => {
    return (
        <Button className="hover-effect text-decoration-none py-1 px-2" variant="link">
            <h3 className="mb-0">{data}</h3>
        </Button>
    );
};

export default CustomButton;