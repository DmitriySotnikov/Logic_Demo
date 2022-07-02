import React, {FC} from 'react';
import { useAppDispatch } from "../../hooks/redux";
import {selectCategory, setSelector} from '../../store/reducer/categorySlice';

interface IProps {
    isShow: boolean
    categoryName: string
    title: string
    deleteButtonHandler: () => void
}

export const Card:FC<IProps> = ({isShow, categoryName, title, deleteButtonHandler}) => {

    const dispatch = useAppDispatch()

    const selectorHandler = (value: string, e:  React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(setSelector({selector: value}))
        dispatch(selectCategory(value))
    }

    return (
        <div className="card__inner">
            <div className="categories__delete-item">
                <button
                    className={isShow ? "card__del-button card__del-button--active": "card__del-button"}
                    onClick={() => deleteButtonHandler()}
                >
                    Удалить
                </button>
            </div>
            <div
                className="card__category-button"
                onClick={(e) => selectorHandler(categoryName, e)}
            >
                {categoryName}
            </div>
            <span className="card__title">{title}</span>
        </div>
    );
};