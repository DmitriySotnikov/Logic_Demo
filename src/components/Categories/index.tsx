import React, {FC, useEffect, useState} from 'react';
import {Card} from "../Card";
import {ICategory} from "../../models/ICatagory";


interface IProps {
    categories: ICategory[]
    setCategory: (arg:string) => void
    deleteCategory: (id:string) => void
}

export const Categories: FC<IProps> = ({setCategory, categories, deleteCategory}) => {

    const [activeId, setActiveId] = useState("")

    useEffect(() => {

        const onKeypress = (e: KeyboardEvent) => {

            if (e.key === "Delete") {
                //console.log(activeId)
                deleteCategory(activeId)
            }
        };

        document.addEventListener('keydown', onKeypress);
        document.addEventListener('keyup', onKeypress);

        return () => {

            document.removeEventListener('keydown', onKeypress);
            document.removeEventListener('keyup', onKeypress);
        };
    }, [activeId]);


    return (
        <div className="categories">
            <div className="categories__content-cards">
                {
                    categories.map( el =>
                        <div
                            className={activeId === el.id ? "card card--active" : "card"} key={el.id}
                            onClick={() => setActiveId(el.id)}
                        >
                            <Card
                            id={el.id}
                            setCategory={(category) => setCategory(category)}
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