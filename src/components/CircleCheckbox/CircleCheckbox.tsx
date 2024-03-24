import React from 'react';
import {Form} from 'react-bootstrap';
import './circleCheckbox.css';

interface CircleCheckboxProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
}

const CircleCheckbox: React.FC<CircleCheckboxProps> = ({checked, onChange, name}) => {
    return (
        <div className="circle-checkbox">
            <Form>
                <Form.Check
                    className=""
                    type="checkbox"
                    id="circle-checkbox"
                    checked={checked}
                    onChange={onChange}
                    bsPrefix="custom-control custom-checkbox custom-control-lg"
                />
            </Form>
        </div>
    );
};

export default CircleCheckbox;