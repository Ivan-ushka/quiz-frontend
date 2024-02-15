import React, {useContext, useEffect} from 'react';
import AppRouter from "./appRouter/AppRouter";
import {Context} from "./index";
import {Container} from "react-bootstrap";
import "./app.css"
const App = () => {
    const {store} = useContext(Context);

    useEffect( ()=>{
        if(localStorage.getItem('token')){
            store.checkAuth();
        }
    },[store])

    return (
        <Container className="app">
            <AppRouter />
        </Container>
    );
};

export default App;