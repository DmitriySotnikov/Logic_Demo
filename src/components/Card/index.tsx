import React, {FC} from 'react';

interface IProps {
    id: string
    setCategory: (arg:string) => void
    categoryName: string
    title: string
}

export const Card:FC<IProps> = (
    {
        setCategory,
        categoryName,
        title,
    }) => {

    return (
        <div className="card__inner">
            <div
                className="card__category-button"
                onClick={() => setCategory(categoryName)}
            >
                {categoryName}
            </div>
            <span className="card__title">{title}</span>
        </div>
    );
};