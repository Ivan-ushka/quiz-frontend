import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import {checkAuth} from "./state/authAction";
import {useDispatch} from "react-redux";
import Header from "./components/Header";

function App() {
    const dispatch: any = useDispatch();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuth());
        }
    }, [dispatch]);
    return (
        <div className="app" style={{fontFamily: "Jost, Arial"}}>
            <Header />
            <AppRouter/>
        </div>
    );
}

export default App;
