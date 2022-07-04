import React, {FC} from 'react';
import {Link} from "react-router-dom";

export const Header: FC = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__nav">
                    <div className="header__logo">
                        Demo
                    </div>
                    <div className="header__links">
                        <Link className="header__link-item" to={"/"}>
                            Home
                        </Link>
                        <Link className="header__link-item" to={"favorite"}>
                            Favorite
                        </Link>
                        <Link className="header__link-item" to={"/"}>
                            About
                        </Link>
                    </div>
                    <button className="header__button-contact">
                        Contact
                    </button>
                </div>
                <div className="header__bottom">
                    <span className="header__bottom-title">Portfolio</span>
                    <span className="header__bottom-info">
                        This mini application demonstrates my
                        level of work with the logic of the
                        React Single Page Application
                    </span>
                </div>
            </div>
        </div>
    );
};