import React, {FC} from 'react';
import {useAppDispatch} from "../../hooks/redux";
import { setSelector } from '../../store/reducer/categorySlice';

interface IProps {
    id: string
    categoryName: string
    title: string
}

export const Card:FC<IProps> = ({categoryName, title}) => {

     const dispatch = useAppDispatch()

    return (
        <div className="card__inner">
            <div
                className="card__category-button"
                onClick={() => dispatch(setSelector({selector: categoryName}))}
            >
                {categoryName}
            </div>
            <span className="card__title">{title}</span>
        </div>
    );
};