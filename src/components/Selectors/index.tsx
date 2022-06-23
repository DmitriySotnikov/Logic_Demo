import React, {FC} from "react";

interface IProps {
    setCategory: (arg:string) => void
}

export const Selectors: FC<IProps> = ({setCategory}) => {

    return (
        <div className="selectors">
            <div className="selectors__list">
                <div
                    className="selectors__items selectors__items--active"
                    onClick={() => setCategory("")}
                >
                    Show All
                </div>
                <div
                    className="selectors__items"
                    onClick={() => setCategory("Design")}
                >
                    Design
                </div>
                <div
                    className="selectors__items"
                    onClick={() => setCategory("Branding")}
                >
                    Branding
                </div>
                <div
                    className="selectors__items"
                    onClick={() => setCategory("Illustrations")}
                >
                    Illustrations
                </div>
                <div
                    className="selectors__items"
                    onClick={() => setCategory("Motions")}
                >
                    Motions
                </div>
            </div>
            <div className="selectors__form">
                <form>
                    <select className="selectors__select">
                        <option value="">Show All</option>
                    </select>
                </form>
            </div>
        </div>
    );
};