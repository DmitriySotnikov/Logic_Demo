import React, {FC} from "react";


export const Selectors: FC = ({}) => {

    return (
        <div className="selectors">
            <div className="selectors__list">
                <div
                    className="selectors__items selectors__items--active"
                >
                    Show All
                </div>
                <div
                    className="selectors__items"

                >
                    Design
                </div>
                <div
                    className="selectors__items"

                >
                    Branding
                </div>
                <div
                    className="selectors__items"

                >
                    Illustrations
                </div>
                <div
                    className="selectors__items"

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