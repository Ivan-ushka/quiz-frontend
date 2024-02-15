import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Store from "./store/store";
import App from "./App";

const store = new Store();

export const Context = createContext({
    store,
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{store}}>
        <BrowserRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Context.Provider>
);
