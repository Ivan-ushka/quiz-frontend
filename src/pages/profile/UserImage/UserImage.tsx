import React, {useState} from 'react';
import {Image} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import './style.css'

const UserImage = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="image-container d-flex flex-column justify-content-center text-center align-items-center border-light border border-5 rounded shadow bg-primary-subtle"
        >
            <div style={{ display: isHovered ? 'block' : 'none', position: 'absolute'}} className="text-white rounded ">
                <FontAwesomeIcon icon={faCamera} fontSize={56}/>
                <h3>Edit</h3>
            </div>

            <div style={{opacity: isHovered ? '40%' : '100%'}}  className=" rounded">
                <Image style={{opacity: isHovered ? '30%' : '100%'}} src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png' alt="user" fluid rounded/>
            </div>
        </div>
    );
};

export default UserImage;