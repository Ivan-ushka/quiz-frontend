import React, {useEffect} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import AppRouter from "./components/AppRouter";
import {checkAuth} from "./state/authAction";
import {useDispatch} from "react-redux";

function App() {
    const dispatch: any = useDispatch();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuth());
        }
    }, [dispatch]);

    return (
        <Container className="app">
            <AppRouter/>
        </Container>
    );
}

export default App;
