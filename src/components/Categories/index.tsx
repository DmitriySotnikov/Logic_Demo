import React, {FC, useEffect, useState} from 'react';
import {Card} from "../Card";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {deleteCategory, selectionCategory, setActiveId} from '../../store/reducer/categorySlice';

export const Categories: FC = () => {

    const dispatch = useAppDispatch()
    const [isShow, setIsShow] = useState(false)
    const {filteredCategories, isActiveId, selector, isLoading} = useAppSelector(state => state.categories)

    useEffect(() => {
        const onKeypress = (e: KeyboardEvent) => {
            if (e.key === "Delete") {
                deleteButtonHandler()
            }
        };
        document.addEventListener('keydown', onKeypress);
        //document.addEventListener('keyup', onKeypress);
        return () => {
            document.removeEventListener('keydown', onKeypress);
            document.removeEventListener('keyup', onKeypress);
        };
    }, [isActiveId]);

    if (isLoading){
        return <h1 style={{display: "flex", justifyContent: "center"}}>Загрузка...</h1>
    }

    const onActiveClass = (id: string) => {
        if (id === isActiveId) {
            dispatch(setActiveId(""))
            setIsShow(false)
        } else {
            dispatch(setActiveId(id))
            setIsShow(true)
        }
    }

    const deleteButtonHandler = () => {
        dispatch(deleteCategory(isActiveId))
        dispatch(selectionCategory(selector))
        setIsShow(false)
    }

    return (
        <div className="categories">
            <div className="categories__content-cards">
                {
                    filteredCategories.map( el =>
                        <div
                            className={el.id === isActiveId ? "card card--active" : "card"} key={el.id}
                            onClick={() => onActiveClass(el.id)}
                        >
                            <Card
                                isShow={el.id === isActiveId}
                                categoryName={el.categoryName}
                                title={el.title}
                                key={el.id}
                                deleteButtonHandler={deleteButtonHandler}
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