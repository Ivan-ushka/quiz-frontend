import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter} from "react-router-dom";
import AppRouter from "./appRouter/AppRouter";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Store from "./store/store";

const store = new Store();

export const Context = createContext({
    store,
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{store}}>
        <BrowserRouter>
            <React.StrictMode>
                <AppRouter/>
            </React.StrictMode>
        </BrowserRouter>
    </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
