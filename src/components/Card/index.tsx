import React, {FC, useState} from 'react';

interface IProps {
    id: string
    setActiveId: (arg:string) => void
    setCategory: (arg:string) => void
    categoryName: string
    title: string
}

export const Card:FC<IProps> = (
    {
        id ,
        setActiveId,
        setCategory,
        categoryName,
        title,
    }
) => {

    const [activeCategory, setActiveCategory] = useState(false)

    const activeHandler = (id: string) => {
        setActiveCategory(!activeCategory)
        return activeCategory ? setActiveId("") : setActiveId(id)
    }

    return (
        <div className={
            activeCategory ?
                "card card--active"
                : "card"}
             onClick={() => activeHandler(id)}>
            <div className="card__inner">
                <div
                    className="card__category-button"
                    onClick={() => setCategory(categoryName)}
                >
                    {categoryName}
                </div>
                <span className="card__title">{title}</span>
            </div>
        </div>
    );
};