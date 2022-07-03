import React, {FC, useEffect} from "react";
import "../../styles/index.scss";
import {Header} from "../Header";
import {Categories} from "../Categories";
import {Selectors} from "../Selectors";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAllCategories} from "../../service";
import {Sort} from "../Sort";


export const App: FC = () => {

    const dispatch = useAppDispatch()
    const {error} = useAppSelector(state => state.categories)

    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [])

    return (
        <div>
            <Header/>
            <div className="container">
                <Sort/>
                <Selectors />
                <Categories/>
            </div>
        </div>
    );
}
