import React, { FC, useEffect, useRef } from "react";
import Card from "../Card";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
    deleteCategory,
    selectionCategory,
    setActiveId,
} from "../../store/reducer/categorySlice";

function Categories() {
    const dispatch = useAppDispatch();

    const ref = useRef<HTMLDivElement>(null);

    const { filteredCategories, isActiveId, selector, isLoading } =
        useAppSelector((state) => state.categories);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            ref.current &&
            !ref.current.contains(event.target as Node) &&
            ref.current
        ) {
            dispatch(setActiveId(""));
        }
    };
    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            dispatch(setActiveId(""));
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        document.addEventListener("keydown", handleHideDropdown, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
            document.removeEventListener("keydown", handleHideDropdown, true);
        };
    });

    if (isLoading) {
        return (
            <h1 style={{ display: "flex", justifyContent: "center" }}>
                Загрузка...
            </h1>
        );
    }

    const onActiveClass = (id: string) =>
        id === isActiveId
            ? dispatch(setActiveId(""))
            : dispatch(setActiveId(id));

    const deleteButtonHandler = () => {
        dispatch(deleteCategory(isActiveId));
        dispatch(selectionCategory(selector));
    };

    return (
        <div className="categories" ref={ref}>
            <div className="categories__content-cards">
                {filteredCategories.map((el) => (
                    <div
                        className={
                            el.id === isActiveId ? "card card--active" : "card"
                        }
                        key={el.id}
                        onClick={() => onActiveClass(el.id)}
                        onKeyDown={(event) =>
                            event.key === "Delete" && deleteButtonHandler()
                        }
                        role="menuitem"
                        tabIndex={0}
                    >
                        <Card
                            category={el}
                            deleteButtonHandler={deleteButtonHandler}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories as FC;
