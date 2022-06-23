import React, {FC, useEffect, useState} from 'react';
import {genId} from "../../utils/uuid"
import {Card} from "../Card";

const CategoriesDate = [
    {
        id: genId(),
        categoryName: "Design",
        title: "SOFA"
    },
    {
        id: genId(),
        categoryName: "Branding",
        title: "KeyBoard"
    },
    {
        id: genId(),
        categoryName: "Illustrations",
        title: "Work Media"
    },
    {
        id: genId(),
        categoryName: "Motions",
        title: "DDDone"
    },
    {
        id: genId(),
        categoryName: "Design",
        title: "Abstract"
    },
    {
        id: genId(),
        categoryName: "Branding",
        title: "HandP"
    },
    {
        id: genId(),
        categoryName: "Motions",
        title: "Architect"
    },
    {
        id: genId(),
        categoryName: "Design",
        title: "CalC"
    },
    {
        id: genId(),
        categoryName: "Branding",
        title: "Sport"
    },
]

const CategoriesDateDuplication = [
    {
        id: genId(),
        categoryName: "Design",
        title: "SOFA"
    },
    {
        id: genId(),
        categoryName: "Branding",
        title: "KeyBoard"
    },
    {
        id: genId(),
        categoryName: "Illustrations",
        title: "Work Media"
    },
    {
        id: genId(),
        categoryName: "Motions",
        title: "DDDone"
    },
    {
        id: genId(),
        categoryName: "Design",
        title: "Abstract"
    },
    {
        id: genId(),
        categoryName: "Branding",
        title: "HandP"
    },
    {
        id: genId(),
        categoryName: "Motions",
        title: "Architect"
    },
    {
        id: genId(),
        categoryName: "Design",
        title: "CalC"
    },
    {
        id: genId(),
        categoryName: "Branding",
        title: "Sport"
    },
]

interface ICategory {
    id: string
    categoryName: string
    title: string
}

interface IProps {
    ctg: string
    setCategory: (arg:string) => void
}

export const Categories: FC<IProps> = ({ctg, setCategory}) => {

    const [active, setActive] = useState(false)

    const [activeId, setActiveId] = useState<string>("")

    const [categories, setCategories] = useState<ICategory[]>([...CategoriesDate])

    useEffect(() => {

        const onKeypress = (e: KeyboardEvent) => {
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
    }, [categories]);



    const addCategories = () => {
        setCategories([...categories, ...CategoriesDateDuplication])
    }

    const deleteCategory = (id: string) => {
        setCategories(categories.filter( el => el.id !== id) )
    }

    return (
        <div className="categories">
            <div className="categories__content-cards">
                {ctg ?
                    categories.map( el => el.categoryName === ctg &&
                        <Card
                            id={el.id}
                            setActiveId={(id: string) => setActiveId(id)}
                            setCategory={(category) => setCategory(category)}
                            categoryName={el.categoryName}
                            title={el.title}
                            key={el.id}
                        />
                    )
                    :
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
                <button className="categories__button-load" onClick={addCategories}>load more</button>
            </div>
        </div>
    );
};