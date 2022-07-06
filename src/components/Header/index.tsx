import React, { FC } from 'react';
import { Link, NavLink } from "react-router-dom";

export const Header: FC = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__nav">
                    <Link className="header__logo" to={"/"}>
                        ReactApp
                    </Link>
                    <div className="header__links">
                        <NavLink className="header__link-item" to={"/"}>
                            Home
                        </NavLink>
                        <NavLink className="header__link-item" to={"favorite"}>
                            Favorite
                        </NavLink>
                        <NavLink className="header__link-item" to={"about"}>
                            About
                        </NavLink>
                    </div>
                    <Link to={"contact"}>
                        <button className="header__button-contact">
                            Contact
                        </button>
                    </Link>
                </div>
                <div className="header__bottom">
                    <span className="header__bottom-title">
                        Demo
                    </span>
                </div>
            </div>
        </div>
    );
};