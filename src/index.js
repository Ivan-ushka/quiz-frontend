import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import StoreAuth from "./store/storeAuth";
import App from "./App";
import StoreQuiz from "./store/storeQuiz";

const storeAuth = new StoreAuth();
const storeQuiz = new StoreQuiz();

export const Context = createContext({
    storeAuth,
    storeQuiz
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{ storeAuth, storeQuiz}}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Context.Provider>
);
