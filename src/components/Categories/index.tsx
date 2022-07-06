import React, { FC, useEffect } from 'react';
import {Card} from "../Card";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { deleteCategory, selectionCategory, setActiveId } from '../../store/reducer/categorySlice';

export const Categories: FC = () => {

    const dispatch = useAppDispatch();
    const {filteredCategories, isActiveId, selector, isLoading} = useAppSelector(state => state.categories);

    useEffect(() => {
        const onKeypress = (e: KeyboardEvent) => {
            if (e.key === "Delete") {
                deleteButtonHandler()
            }
        };
        document.addEventListener('keydown', onKeypress);
        return () => {
            document.removeEventListener('keydown', onKeypress);
            document.removeEventListener('keyup', onKeypress);
        };
    }, [isActiveId]);

    if (isLoading){
        return <h1 style={{display: "flex", justifyContent: "center"}}>Загрузка...</h1>
    }

    const onActiveClass = (id: string) => id === isActiveId ? dispatch(setActiveId("")) : dispatch(setActiveId(id))

    const deleteButtonHandler = () => {
        dispatch(deleteCategory(isActiveId))
        dispatch(selectionCategory(selector))
    };

    return (
        <div className="categories">
            <div className="categories__content-cards">
                {
                    filteredCategories.map( el =>
                        <div
                            className={el.id === isActiveId ? "card card--active" : "card"} key={el.id}
                            onClick={() => onActiveClass(el.id)}
                        >
                            <Card
                                category={el}
                                deleteButtonHandler={deleteButtonHandler}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};