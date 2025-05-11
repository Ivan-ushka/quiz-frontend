import React, {useEffect} from 'react';
import {Modal} from "react-bootstrap";

interface AutoCloseModalProps {
    show: boolean;
    message: string;
    onClose: () => void;
}

const AutoCloseModal: React.FC<AutoCloseModalProps> = ({ show, message, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        <Modal
            show={show}
            onHide={onClose}
            backdrop="static"
            keyboard={false}
            style={{ position: 'absolute', top: '20px', left: '0px' }}
        >
            <Modal.Body>
                {message}
            </Modal.Body>
        </Modal>
    );
};

export default AutoCloseModal;