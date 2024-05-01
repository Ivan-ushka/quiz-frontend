import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import {checkAuth} from "./state/authAction";
import {useDispatch} from "react-redux";
import Header from "./components/Header";
import {AppDispatch} from "./state/store";
import Footer from "./components/Footer";
import {setLoading} from "./state/authSlice";

function App() {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) dispatch(checkAuth());
        else dispatch(setLoading(false))

    }, [dispatch]);

    return (
        <div className="app d-flex flex-column" style={{fontFamily: "Jost, Arial", minHeight: "100vh"}}>
            <Header />
            <div style={{ flex: 1 }}>
                <AppRouter />
            </div>
           <Footer />
        </div>
    );
}

export default App;
