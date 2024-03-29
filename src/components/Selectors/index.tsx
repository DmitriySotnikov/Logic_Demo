import React, { FC } from "react";
import selectors from "../../mock/selectors";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
    selectionCategory,
    setSelector,
} from "../../store/reducer/categorySlice";

function Selectors() {
    const dispatch = useAppDispatch();
    const { selector } = useAppSelector((state) => state.categories);

    const selectorHandler = (value: string) => {
        dispatch(setSelector(value));
        dispatch(selectionCategory(value));
    };

    return (
        <div className="selectors">
            <div className="selectors__list">
                {selectors.map((el) => (
                    <div
                        className={
                            selector === el.value
                                ? "selectors__items selectors__items--active"
                                : "selectors__items"
                        }
                        key={el.id}
                        onClick={() => selectorHandler(el.value)}
                        role="menuitem"
                        onKeyPress={() => {}}
                        tabIndex={0}
                    >
                        {el.name}
                    </div>
                ))}
            </div>
            <div className="selectors__form">
                <form>
                    <select
                        className="selectors__select"
                        onChange={(e) => selectorHandler(e.target.value)}
                        value={selector}
                    >
                        {selectors.map((el) => (
                            <option value={el.value} key={el.id}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
        </div>
    );
}

export default Selectors as FC;
