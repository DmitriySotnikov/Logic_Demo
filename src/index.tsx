import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store'
import { Provider } from 'react-redux'
import {Favorite} from "./components/Favorite";
import {HomePage} from "./page/homePage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path="" element={<HomePage/>} />
                        <Route path="favorite" element={<Favorite/>} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);