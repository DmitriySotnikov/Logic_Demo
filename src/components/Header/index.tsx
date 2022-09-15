import React, { FC } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__nav">
                    <NavLink className="header__logo" to="/">
                        ReactApp
                    </NavLink>
                    <div className="header__links">
                        <NavLink className="header__link-item" to="/">
                            Home
                        </NavLink>
                        <NavLink className="header__link-item" to="favorite">
                            Favorite
                        </NavLink>
                        <NavLink className="header__link-item" to="about">
                            About
                        </NavLink>
                    </div>
                    <NavLink to="contact">
                        <button
                            className="header__button-contact"
                            type="button"
                        >
                            Contact
                        </button>
                    </NavLink>
                </div>
                <div className="header__bottom">
                    <span className="header__bottom-title">Demo</span>
                </div>
            </div>
        </div>
    );
}

export default Header as FC;
