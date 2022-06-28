import React, {FC, useEffect, useState} from 'react';
import {Card} from "../Card";
import {ICategory} from "../../models/ICatagory";


interface IProps {
    categories: ICategory[]
    setCategory: (arg:string) => void
}

export const Categories: FC<IProps> = ({setCategory, categories}) => {

    const [activeId, setActiveId] = useState<string>("")


    useEffect(() => {

        const onKeypress = (e: KeyboardEvent) => {

            const deleteCategory = (id: string) => {
                //setCategories(categories.filter( el => el.id !== id) )
            }

            if (e.key === "Delete") {
                deleteCategory(activeId)
            }
        };

        document.addEventListener('keydown', onKeypress);
        document.addEventListener('keyup', onKeypress);

        return () => {

            document.removeEventListener('keydown', onKeypress);
            document.removeEventListener('keyup', onKeypress);
        };
    }, [categories, activeId]);


    return (
        <div className="categories">
            <div className="categories__content-cards">
                {
                    categories.map( el =>
                        <Card
                            id={el.id}
                            setActiveId={(id: string) => setActiveId(id)}
                            setCategory={(category) => setCategory(category)}
                            categoryName={el.categoryName}
                            title={el.title}
                            key={el.id}
                        />
                    )
                }
            </div>
            <div className="categories__buttons">
                <button className="categories__button-load" >load more</button>
            </div>
        </div>
    );
};