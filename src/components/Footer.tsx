import React from 'react';
import {Link} from "react-router-dom";


const Footer: React.FC = () => {
    return (
        <footer className="py-4 bg-light border-top">
            <ul className="nav justify-content-center pb-1 mb-3">
                <li className="nav-item">
                    <Link to="/" className="nav-link px-2 link-dark ">
                        <h5>Home</h5>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/search" className="nav-link px-2 link-dark">
                        <h5>Search</h5>
                    </Link>
                </li>
                <li className="nav-item text-black">
                    <Link to="/information" className="nav-link px-2 link-dark">
                        <h5> Information</h5>
                    </Link>
                </li>
            </ul>
            <h6 className="text-center text-muted ">&copy; 2024 Quizzes Created by: Levchuk Ivan</h6>
        </footer>
    );
};

export default Footer;