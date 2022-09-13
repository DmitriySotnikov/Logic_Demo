import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { store } from "./store/store";
import Favorite from "./components/Favorite";
import HomePage from "./page/homePage";
import { AboutPage } from "./page/aboutPage";
import { ContactPage } from "./page/contactPage";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="" element={<HomePage />} />
                        <Route path="favorite" element={<Favorite />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="contact" element={<ContactPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
