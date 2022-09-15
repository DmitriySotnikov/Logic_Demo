import React, { FC, useState } from "react";
import Button from "../Button";
import { ICategory } from "../../models/ICatagory";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
    selectionCategory,
    setSelector,
} from "../../store/reducer/categorySlice";
import { addFavoriteCategories } from "../../store/reducer/favoriteSlice";

interface IProps {
    category: ICategory;
    deleteButtonHandler: (id: string) => void;
}

function Card({ category, deleteButtonHandler }: IProps) {
    const [active, setActive] = useState(false);

    const { isActiveId } = useAppSelector((state) => state.categories);
    const { isFavorite } = useAppSelector((state) => state.favorite);

    const dispatch = useAppDispatch();

    const selectorHandler = (
        value: string,
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        dispatch(setSelector(value));
        dispatch(selectionCategory(value));
    };

    const favoriteHandler = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        dispatch(addFavoriteCategories(category));
    };

    const classNameHandler = () => {
        setActive(!active);
    };

    return (
        <div
            className="card__inner"
            onClick={classNameHandler}
            aria-hidden="true"
            role="menuitem"
        >
            <span className="card__title">{category.title}</span>
            <div className="categories__btn">
                <button
                    className="btn"
                    type="button"
                    onClick={(e) => selectorHandler(category.categoryName, e)}
                >
                    {category.categoryName}
                </button>
                <button
                    className={
                        isActiveId === category.id || (isFavorite && active)
                            ? "btn card__del-Button card__del-Button--active"
                            : "btn card__del-Button"
                    }
                    type="button"
                    onClick={() => deleteButtonHandler(category.id)}
                >
                    Удалить
                </button>
                {!isFavorite && (
                    <Button
                        textBtn="В избранное"
                        classname=""
                        onClick={(e) => favoriteHandler(e)}
                    />
                )}
            </div>

            <span className="card__date">{category.date}</span>
        </div>
    );
}

export default Card as FC<IProps>;
