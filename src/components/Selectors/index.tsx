import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {selectCategory, setSelector} from "../../store/reducer/categorySlice";


export const Selectors: FC = () => {

    const selectors = [
        {
            id: 0,
            name: "Show All",
            value: ""
        },
        {
            id: 1,
            name: "Design",
            value: "Design"
        },
        {
            id: 2,
            name: "Branding",
            value: "Branding"
        },
        {
            id: 3,
            name: "Illustrations",
            value: "Illustrations"
        },
        {
            id: 4,
            name: "Motions",
            value: "Motions"
        },
    ]

    const dispatch = useAppDispatch()
    const {selector} = useAppSelector(state => state.categories)

    const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => dispatch(setSelector({selector: event.target.value}))

    const selectorHandler = (value: string) => {
        dispatch(setSelector({selector: value}))
        dispatch(selectCategory(value))
    }

    return (
        <div className="selectors">
            <div className="selectors__list">
                {
                    selectors.map( el =>
                        <div
                            className={selector === el.value ? "selectors__items selectors__items--active": "selectors__items"}
                            key={el.id}
                            onClick={() => selectorHandler(el.value)}
                        >
                            {el.name}
                        </div>
                    )
                }
            </div>
            <div className="selectors__form">
                <form>
                    <select
                        className="selectors__select"
                        onChange={e => onSelect(e)}
                        value={selector}
                    >
                        {
                            selectors.map( el => <option
                                value={el.value}
                                key={el.id}
                            >
                                {el.name}
                            </option>)
                        }
                    </select>
                </form>
            </div>
        </div>
    );
};