import React, {FC} from "react";

interface IProps {
    setParameter: (arg: string) => void
}

export const Selectors: FC<IProps> = ({setParameter}) => {

    return (
        <div className="selectors">
            <div className="selectors__list">
                <div
                    className="selectors__items selectors__items--active"
                    onClick={() => setParameter("")}
                >
                    Show All
                </div>
                <div
                    className="selectors__items"
                    onClick={() => setParameter("Design")}
                >
                    Design
                </div>
                <div
                    className="selectors__items"
                    onClick={() => setParameter("Branding")}
                >
                    Branding
                </div>
                <div
                    className="selectors__items"
                    onClick={() => setParameter("Illustrations")}
                >
                    Illustrations
                </div>
                <div
                    className="selectors__items"
                    onClick={() => setParameter("Motions")}
                >
                    Motions
                </div>
            </div>
            <div className="selectors__form">
                <form>
                    <select className="selectors__select">
                        <option value="" placeholder="Show All">Show All</option>
                    </select>
                </form>
            </div>
        </div>
    );
};