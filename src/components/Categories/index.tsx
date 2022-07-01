import React, {FC, useEffect, useState} from 'react';
import {Card} from "../Card";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {deleteCategory, setActiveId } from '../../store/reducer/categorySlice';

export const Categories: FC = () => {

    const [isShow, setIsShow] = useState(false)

    const dispatch = useAppDispatch()
    const {categories, isActiveId} = useAppSelector(state => state.categories)

    useEffect(() => {
        const onKeypress = (e: KeyboardEvent) => {
            if (e.key === "Delete") {
                console.log(isActiveId)
                dispatch(deleteCategory({id: isActiveId}))
            }
        };
        document.addEventListener('keydown', onKeypress);
        document.addEventListener('keyup', onKeypress);
        return () => {
            document.removeEventListener('keydown', onKeypress);
            document.removeEventListener('keyup', onKeypress);
        };
    }, [isActiveId]);

    const onActiveClass = (id: string) => {
        if (id === isActiveId) {
            dispatch(setActiveId({id: ""}))
            setIsShow(false)
        } else {
            dispatch(setActiveId({id}))
            setIsShow(true)
        }
    }

    const deleteButtonHandler = () => {
        dispatch(deleteCategory({id: isActiveId}))
        setIsShow(false)
    }

    return (
        <div className="categories">
            <div className="categories__delete-item">
                <button className={isShow ? "card__del-button card__del-button--active": "card__del-button"} onClick={() => deleteButtonHandler()}>
                    Удалить
                </button>
            </div>
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