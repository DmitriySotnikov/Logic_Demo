import React, {FC, useEffect} from 'react';
import {Card} from "../Card";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {deleteCategory, setActiveId } from '../../store/reducer/categorySlice';

export const Categories: FC = () => {

    const dispatch = useAppDispatch()
    const {categories, isActiveId} = useAppSelector(state => state.categories)

    useEffect(() => {
        const onKeypress = (e: KeyboardEvent) => {
            if (e.key === "Delete") {
            }
        };
        document.addEventListener('keydown', onKeypress);
        document.addEventListener('keyup', onKeypress);
        return () => {
            document.removeEventListener('keydown', onKeypress);
            document.removeEventListener('keyup', onKeypress);
        };
    }, [categories]);

    const onActiveClass = (id: string) => id === isActiveId ? dispatch(setActiveId({id: ""})) : dispatch(setActiveId({id}));

    return (
        <div className="categories">
            <button onClick={() => dispatch(deleteCategory({id: isActiveId}))}>Удалить</button>
            <div className="categories__content-cards">
                {
                    categories.map( el =>
                        <div
                            className={el.id === isActiveId ? "card card--active" : "card"} key={el.id}
                            onClick={() => onActiveClass(el.id)}
                        >
                            <Card
                            id={el.id}
                            categoryName={el.categoryName}
                            title={el.title}
                            key={el.id}
                        />
                        </div>
                    )
                }
            </div>
            <div className="categories__buttons">
                <button className="categories__button-load" >load more</button>
            </div>
        </div>
    );
};