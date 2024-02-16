import React, {useContext, useEffect} from 'react';
import AppRouter from "./appRouter/AppRouter";
import {Context} from "./index";
import {Container} from "react-bootstrap";
import "./app.css"
const App = () => {
    const {storeAuth} = useContext(Context);

    useEffect( ()=>{
        if(localStorage.getItem('token')){
            storeAuth.checkAuth();
        }
    },[storeAuth])

    return (
        <Container className="app">
            <AppRouter />
        </Container>
    );
};

export default App;