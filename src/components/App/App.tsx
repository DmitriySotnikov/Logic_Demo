import React, {FC, useEffect} from "react";
import "../../styles/index.scss";
import {Header} from "../Header";
import {Categories} from "../Categories";
import {Selectors} from "../Selectors";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAllCategories} from "../../service";


export const App: FC = () => {

    const dispatch = useAppDispatch()
    const {isLoading, error} = useAppSelector(state => state.categories)

    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [])

    return (
        <div>
            <Header/>
            <div className="container">
                <Selectors />
                <Categories/>
            </div>
        </div>
    );
}
