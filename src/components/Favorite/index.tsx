import React, { FC, useEffect } from "react";
import Card from "../Card";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
    deleteFavoriteCategory,
    setIsFavorite,
} from "../../store/reducer/favoriteSlice";

function Favorite() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setIsFavorite(true));
        return () => {
            dispatch(setIsFavorite(false));
        };
    }, []);

    const { favorite } = useAppSelector((state) => state);

    const deleteButtonHandler = (id: string) => {
        dispatch(deleteFavoriteCategory(id));
    };

    return (
        <div className="categories">
            <div className="categories__content-cards">
                {favorite.favoriteCategory.length === 0 && (
                    <span className="categories__info">
                        No category in favorite
                    </span>
                )}
                {favorite.favoriteCategory.map((card) => (
                    <div className="card" key={card.id}>
                        <Card
                            key={card.id}
                            category={card}
                            deleteButtonHandler={(id) =>
                                deleteButtonHandler(id)
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorite as FC;
