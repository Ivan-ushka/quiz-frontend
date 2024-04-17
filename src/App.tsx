import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import {checkAuth} from "./state/authAction";
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/Header";
import {setLoading} from "./state/authSlice";
import {RootState} from "./state/store";

function App() {
    const dispatch: any = useDispatch();
    const isLoading: boolean = useSelector((state: RootState) => state.auth.loading);
    useEffect(() => {
        if (localStorage.getItem('token')) dispatch(checkAuth());
        else dispatch(setLoading(false))

    }, [dispatch]);
    //Logic about isLoading can be not so efficient
    return (
        <div className="app" style={{fontFamily: "Jost, Arial"}}>
            <Header />
            {!isLoading ? <AppRouter/> : <div>Loading...</div>}
        </div>
    );
}

export default App;
