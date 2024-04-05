import React from 'react';

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><h5><a href="/" className="nav-link px-2 text-muted">Home</a></h5></li>
                    <li className="nav-item"><h5><a href="/my-quizzes" className="nav-link px-2 text-muted">My quizzes</a></h5></li>
                    <li className="nav-item"><h5><a href="/information" className="nav-link px-2 text-muted">Information</a></h5></li>
                    <li className="nav-item"><h5><a href="/search" className="nav-link px-2 text-muted">Search</a></h5></li>
                </ul>
                <h6 className="text-center text-muted">&copy; 2024 Quizzes Created by: Levchuk Ivan</h6>
            </footer>
        </div>

);
};

export default Footer;