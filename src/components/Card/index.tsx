import React, {FC, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {selectionCategory, setIsFavorite, setSelector} from '../../store/reducer/categorySlice';
import {ICategory} from "../../models/ICatagory";
import { addFavoriteCategories } from '../../store/reducer/favoriteSlice';
import {Button} from "../Button";

interface IProps {
    category: ICategory
    deleteButtonHandler: (id: string) => void
}

export const Card:FC<IProps> = ({category, deleteButtonHandler}) => {

    const [active, setActive] = useState(false);

    const {isActiveId} = useAppSelector(state => state.categories);

    const dispatch = useAppDispatch();

    const selectorHandler = (value: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(setSelector(value))
        dispatch(selectionCategory(value))
    };

    const favoriteHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(addFavoriteCategories(category))
    };

    const classNameHandler = () => {
        setActive(!active)
    };

    return (
        <div className="card__inner" onClick={classNameHandler}>
            <span className="card__title">{category.title}</span>
            <div className="categories__btn">
                <button
                    className="btn"
                    onClick={(e) => selectorHandler(category.categoryName, e)}
                >
                    {category.categoryName}
                </button>
                <button
                    className={
                        ((isActiveId === category.id) || active)
                            ? "btn card__del-Button card__del-Button--active"
                            : "btn card__del-Button"
                    }
                    onClick={() => deleteButtonHandler(category.id)}
                >
                    Удалить
                </button>
                <Button textBtn={"В избранное"} onClick={(e) => favoriteHandler(e)}/>
            </div>

            <span className="card__date">{category.date}</span>
        </div>
    );
};