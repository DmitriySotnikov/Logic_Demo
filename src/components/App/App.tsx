import React, { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { useAppDispatch } from "../../hooks/redux";
import { fetchAllCategories } from "../../service";
import "../../styles/index.scss";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllCategories()).catch(() => {});
    }, []);

    return (
        <div className="main">
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}
export default App as FC;
