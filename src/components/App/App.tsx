import React, {FC, useEffect} from "react";
import "../../styles/index.scss";
import {Header} from "../Header";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAllCategories} from "../../service";
import {Outlet} from "react-router-dom";


export const App: FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [])

    return (
        <div>
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
        </div>
    );
}
