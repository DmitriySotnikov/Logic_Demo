import React, {FC, useEffect, useState} from 'react';
import {Card} from "../Card";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {deleteCategory, selectCategory, setActiveId} from '../../store/reducer/categorySlice';

export const Categories: FC = () => {

    const dispatch = useAppDispatch()
    const {categories, filteredCategories, isActiveId, selector, isLoading} = useAppSelector(state => state.categories)

    useEffect(() => {
        const onKeypress = (e: KeyboardEvent) => {
            if (e.key === "Delete") {
                deleteButtonHandler()
            }
        };
        document.addEventListener('keydown', onKeypress);
        document.addEventListener('keyup', onKeypress);
        return () => {
            document.removeEventListener('keydown', onKeypress);
            document.removeEventListener('keyup', onKeypress);
        };
    }, [isActiveId, categories]);

    const [isShow, setIsShow] = useState(false)

    if (isLoading){
        return <div>Загрузка</div>
    }

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
        dispatch(selectCategory(selector))
        setIsShow(false)
    }

    return (
        <div className="categories">
            <div className="categories__delete-item">
                <button
                    className={isShow ? "card__del-button card__del-button--active": "card__del-button"}
                    onClick={() => deleteButtonHandler()}
                >
                    Удалить
                </button>
            </div>
            <div className="categories__content-cards">
                {
                    filteredCategories.map( el =>
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