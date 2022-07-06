import React from 'react';
import { Card } from "../Card";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { deleteFavoriteCategory } from '../../store/reducer/favoriteSlice';


export const Favorite = () => {

    const dispatch = useAppDispatch()

    const {favorite} = useAppSelector(state => state);

    const deleteButtonHandler = (id: string) => {
        dispatch(deleteFavoriteCategory(id))
    };

    return (
        <div className="categories">
            <div className="categories__content-cards">
                { favorite.length === 0 && <span className="categories__info">No category in favorite</span>}
                {
                    favorite.map( card =>
                        <div className="card">
                            <Card
                                key={card.id}
                                category={card}
                                deleteButtonHandler={(id) => deleteButtonHandler(id)}
                            />
                        </div>
                    )}
            </div>
        </div>
    );
};